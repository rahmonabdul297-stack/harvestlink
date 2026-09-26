import { connectToDatabase } from "@/src/lib/db";
import { calculateMatchingSuppliers } from "@/src/lib/matchingEngine";
import { FarmerSupply } from "@/src/models/Market";
import { IBuyerDemand, IFarmerSupply } from "@/src/types";
import { NextResponse } from "next/server";


// Seeded mock farmer supply batches for offline hackathon testing/demo
const MOCK_SUPPLIES: IFarmerSupply[] = [
  {
    id: "SUP-101",
    farmerId: "FARM-1",
    farmerName: "Kano Grain Farmers Coop",
    commodity: "Sesame",
    availableQuantityKg: 3000,
    unitPricePerKg: 1150,
    locationState: "Kano",
    qualityGrade: "A",
    verificationStatus: "VERIFIED",
    reliabilityRating: 4.8,
  },
  {
    id: "SUP-102",
    farmerId: "FARM-2",
    farmerName: "Makarfi Agricultural Hub",
    commodity: "Sesame",
    availableQuantityKg: 2500,
    unitPricePerKg: 1180,
    locationState: "Kaduna",
    qualityGrade: "A",
    verificationStatus: "VERIFIED",
    reliabilityRating: 4.9,
  },
  {
    id: "SUP-103",
    farmerId: "FARM-3",
    farmerName: "Zaria Smallholders Union",
    commodity: "Sesame",
    availableQuantityKg: 4000,
    unitPricePerKg: 1100,
    locationState: "Kaduna",
    qualityGrade: "B",
    verificationStatus: "VERIFIED",
    reliabilityRating: 4.2,
  },
  {
    id: "SUP-104",
    farmerId: "FARM-4",
    farmerName: "Plateau Grain Enterprise",
    commodity: "Maize",
    availableQuantityKg: 5000,
    unitPricePerKg: 850,
    locationState: "Plateau",
    qualityGrade: "A",
    verificationStatus: "VERIFIED",
    reliabilityRating: 4.6,
  },
];

export async function POST(req: Request) {
  try {
    const demand: IBuyerDemand = await req.json();

    if (!demand.commodity || !demand.requiredQuantityKg || !demand.maxBudgetPerKg) {
      return NextResponse.json(
        { success: false, error: "Please supply commodity, quantity, and max budget." },
        { status: 400 }
      );
    }

    let supplies: IFarmerSupply[] = [];

    // Try DB query first, fallback to mock data if empty/offline
    try {
      await connectToDatabase();
      const dbSupplies = await FarmerSupply.find({
        commodity: new RegExp(`^${demand.commodity}$`, "i"),
      });

      if (dbSupplies && dbSupplies.length > 0) {
        supplies = dbSupplies.map((s) => ({
          id: s._id.toString(),
          farmerId: s.farmerId,
          farmerName: s.farmerName,
          commodity: s.commodity,
          availableQuantityKg: s.availableQuantityKg,
          unitPricePerKg: s.unitPricePerKg,
          locationState: s.locationState,
          qualityGrade: s.qualityGrade,
          verificationStatus: s.verificationStatus,
          reliabilityRating: s.reliabilityRating,
        }));
      }
    } catch (dbErr) {
      console.warn("DB offline or unconfigured. Falling back to mock dataset.");
    }

    if (supplies.length === 0) {
      supplies = MOCK_SUPPLIES;
    }

    const result = calculateMatchingSuppliers(demand, supplies);

    return NextResponse.json({
      success: true,
      demand,
      summary: {
        totalFulfilledKg: result.totalFulfilledKg,
        fulfillmentPercentage: Math.round(
          (result.totalFulfilledKg / demand.requiredQuantityKg) * 100
        ),
        weightedAvgPricePerKg: result.weightedAvgPrice,
        matchedSuppliersCount: result.matches.length,
      },
      matches: result.matches,
    });
  } catch (error: any) {
    console.error("Match API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to run matching calculation." },
      { status: 500 }
    );
  }
}