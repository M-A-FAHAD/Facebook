import { dbconnection } from "@/API-OBJ/Database/db_connection";
import { productSTR } from "@/API-OBJ/Database/db_str";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET() {
    try {
        await mongoose.connect(dbconnection)
        const data = await productSTR.find()
        return NextResponse.json({ result: data })
    } catch (error) {
        console.log("The databased connected GET api have some error" + error);
        return NextResponse.error({ error: 'internal server error' })
    }
}
export async function POST(req, res) {
    try {
        const Payload = await req.json();
        await mongoose.connect(dbconnection)
        const data = new productSTR(Payload);
        const newdata = await data.save();
        return NextResponse.json({ result: newdata, success: true })
    } catch (error) {
        console.log("The databased connected POST api have some error" + error);
        return NextResponse.error({ error: 'internal server error' })
    }
}
