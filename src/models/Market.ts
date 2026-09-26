import mongoose, { Schema, Document, Model } from "mongoose";
import { IBuyerDemand, IFarmerSupply } from "../types";

// Omit both 'id' and '_id' so Mongoose's built-in Document properties take precedence
export interface IBuyerDemandDocument
  extends Omit<IBuyerDemand, "id" | "_id">, Document {}
export interface IFarmerSupplyDocument
  extends Omit<IFarmerSupply, "id" | "_id">, Document {}

const BuyerDemandSchema = new Schema<IBuyerDemandDocument>(
  {
    buyerId: { type: String, required: true },
    buyerName: { type: String, required: true },
    commodity: { type: String, required: true },
    requiredQuantityKg: { type: Number, required: true },
    maxBudgetPerKg: { type: Number, required: true },
    targetLocationState: { type: String, required: true },
    status: {
      type: String,
      enum: ["OPEN", "MATCHED", "FULFILLED"],
      default: "OPEN",
    },
  },
  { timestamps: true },
);

const FarmerSupplySchema = new Schema<IFarmerSupplyDocument>(
  {
    farmerId: { type: String, required: true },
    farmerName: { type: String, required: true },
    commodity: { type: String, required: true },
    availableQuantityKg: { type: Number, required: true },
    unitPricePerKg: { type: Number, required: true },
    locationState: { type: String, required: true },
    qualityGrade: { type: String, enum: ["A", "B", "C"], default: "A" },
    verificationStatus: {
      type: String,
      enum: ["VERIFIED", "PENDING"],
      default: "VERIFIED",
    },
    reliabilityRating: { type: Number, default: 4.5 },
  },
  { timestamps: true },
);

export const BuyerDemand: Model<IBuyerDemandDocument> =
  mongoose.models.BuyerDemand ||
  mongoose.model<IBuyerDemandDocument>("BuyerDemand", BuyerDemandSchema);

export const FarmerSupply: Model<IFarmerSupplyDocument> =
  mongoose.models.FarmerSupply ||
  mongoose.model<IFarmerSupplyDocument>("FarmerSupply", FarmerSupplySchema);
