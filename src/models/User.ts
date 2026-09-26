import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "../types";

export interface IUserDocument extends Omit<IUser, "id" | "_id">, Document {}

const UserSchema: Schema<IUserDocument> = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: false },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["buyer", "farmer", "rider"],
      required: true,
      default: "buyer",
    },
    farmLocation: { type: String, required: false },
    cooperativeName: { type: String, required: false },
    companyName: { type: String, required: false },
    vehicleType: { type: String, required: false },
    licenseNumber: { type: String, required: false },
  },
  { timestamps: true }
);

const User: Model<IUserDocument> =
  mongoose.models.User || mongoose.model<IUserDocument>("User", UserSchema);

export default User;