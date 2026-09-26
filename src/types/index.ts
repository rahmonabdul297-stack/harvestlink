export type UserRole = "buyer" | "farmer" | "rider";

export interface IUser {
  id?: string;
  fullName: string;
  email: string;
  phone?: string;
  role: UserRole;
  password?: string;
  // Role-specific fields
  farmLocation?: string;
  cooperativeName?: string;
  companyName?: string;
  vehicleType?: string;
  licenseNumber?: string;
  createdAt?: Date;
}

export interface IFarmerSupply {
  id?: string;
  _id?: string;
  farmerId: string;
  farmerName: string;
  commodity: string;
  availableQuantityKg: number;
  unitPricePerKg: number;
  locationState: string;
  qualityGrade: "A" | "B" | "C";
  verificationStatus: "VERIFIED" | "PENDING";
  reliabilityRating: number;
}

export interface IBuyerDemand {
  id?: string;
  _id?: string;
  buyerId: string;
  buyerName: string;
  commodity: string;
  requiredQuantityKg: number;
  maxBudgetPerKg: number;
  targetLocationState: string;
  status?: "OPEN" | "MATCHED" | "FULFILLED";
  createdAt?: Date;
}

export interface IMatchResult {
  supplier: IFarmerSupply;
  matchScore: number;
  allocatedQuantityKg: number;
  totalCost: number;
  scoreBreakdown: {
    priceScore: number;
    qualityScore: number;
    locationScore: number;
    reliabilityScore: number;
  };
}