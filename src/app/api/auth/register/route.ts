import { connectToDatabase } from "@/src/lib/db";
import User from "@/src/models/User";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      password,
      role,
      farmLocation,
      cooperativeName,
      companyName,
      vehicleType,
      licenseNumber,
    } = body;

    // Basic Validation
    if (!fullName || !email || !password || !role) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields." },
        { status: 400 }
      );
    }

    // Connect to Database
    await connectToDatabase();

    // Check if user exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "An account with this email already exists." },
        { status: 400 }
      );
    }

    // Save User Document
    const newUser = await User.create({
      fullName,
      email: email.toLowerCase(),
      phone,
      password, // In production, hash password using bcrypt
      role,
      farmLocation,
      cooperativeName,
      companyName,
      vehicleType,
      licenseNumber,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully!",
        user: {
          id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error." },
      { status: 500 }
    );
  }
}