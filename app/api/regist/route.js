import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db"
import User from "@/lib/models/user";
import bcrypt from "bcryptjs";


const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function POST(req) {
    try{
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            name,
            email,
            password:hashedPassword ,
        })

    return NextResponse.json({msg:"User Registered."})
    } catch(error){
        return NextResponse.json({msg:"User Not Registered"})
    }
    
}