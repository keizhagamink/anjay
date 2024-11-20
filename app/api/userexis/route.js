import User from "@/lib/models/user";
import { NextResponse } from "next/server";

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function POST(req) {
  try {
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}