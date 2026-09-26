
import { IBuyerDemand, IFarmerSupply, IMatchResult } from "../types";

const LOCATION_PROXIMITY: Record<string, Record<string, number>> = {
  Kaduna: { Kaduna: 1.0, Kano: 0.85, Katsina: 0.75, Abuja: 0.9, Plateau: 0.6 },
  Kano: { Kano: 1.0, Kaduna: 0.85, Jigawa: 0.9, Katsina: 0.85, Bauchi: 0.7 },
  Plateau: { Plateau: 1.0, Bauchi: 0.85, Nasarawa: 0.85, Kaduna: 0.6, Benue: 0.8 },
  Lagos: { Lagos: 1.0, Ogun: 0.95, Oyo: 0.8, Osun: 0.7 },
};

export function calculateMatchingSuppliers(
  demand: IBuyerDemand,
  supplies: IFarmerSupply[]
): { matches: IMatchResult[]; totalFulfilledKg: number; weightedAvgPrice: number } {
  // 1. Filter out incompatible commodities or over-budget options
  const eligibleSupplies = supplies.filter(
    (s) =>
      s.commodity.toLowerCase() === demand.commodity.toLowerCase() &&
      s.unitPricePerKg <= demand.maxBudgetPerKg &&
      s.availableQuantityKg > 0
  );

  // 2. Score each supplier batch
  const scoredSuppliers = eligibleSupplies.map((supply) => {
    // Price Score (35% Weight)
    const priceRatio = supply.unitPricePerKg / demand.maxBudgetPerKg;
    const priceScore = Math.max(0, (1 - priceRatio * 0.5) * 100);

    // Quality Grade Score (25% Weight)
    const qualityScores = { A: 100, B: 75, C: 50 };
    const qualityScore = qualityScores[supply.qualityGrade] || 50;

    // Location Proximity Score (20% Weight)
    const proximity =
      LOCATION_PROXIMITY[demand.targetLocationState]?.[supply.locationState] ?? 0.4;
    const locationScore = proximity * 100;

    // Reliability Rating Score (20% Weight)
    const reliabilityScore = (supply.reliabilityRating / 5) * 100;

    // Weighted Score Summary
    const compositeScore = Math.round(
      priceScore * 0.35 +
        qualityScore * 0.25 +
        locationScore * 0.2 +
        reliabilityScore * 0.2
    );

    return {
      supply,
      compositeScore,
      breakdown: {
        priceScore: Math.round(priceScore),
        qualityScore,
        locationScore: Math.round(locationScore),
        reliabilityScore: Math.round(reliabilityScore),
      },
    };
  });

  // 3. Sort by highest match score
  scoredSuppliers.sort((a, b) => b.compositeScore - a.compositeScore);

  // 4. Greedy Allocation Loop
  let remainingDemandKg = demand.requiredQuantityKg;
  let totalCostSum = 0;
  const matches: IMatchResult[] = [];

  for (const item of scoredSuppliers) {
    if (remainingDemandKg <= 0) break;

    const allocatedKg = Math.min(remainingDemandKg, item.supply.availableQuantityKg);
    const itemTotalCost = allocatedKg * item.supply.unitPricePerKg;

    matches.push({
      supplier: item.supply,
      matchScore: item.compositeScore,
      allocatedQuantityKg: allocatedKg,
      totalCost: itemTotalCost,
      scoreBreakdown: item.breakdown,
    });

    remainingDemandKg -= allocatedKg;
    totalCostSum += itemTotalCost;
  }

  const totalFulfilledKg = demand.requiredQuantityKg - remainingDemandKg;
  const weightedAvgPrice = totalFulfilledKg > 0 ? Math.round(totalCostSum / totalFulfilledKg) : 0;

  return { matches, totalFulfilledKg, weightedAvgPrice };
}