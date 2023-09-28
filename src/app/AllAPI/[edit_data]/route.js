import { dbconnection } from "@/API-OBJ/Database/db_connection"
import { productSTR } from "@/API-OBJ/Database/db_str"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function PUT(request, content) {
    try {
        const productId = content.params.edit_data
        const filterID = { _id: productId }
        const Payload = await request.json()
        await mongoose.connect(dbconnection)
        const result = await productSTR.findOneAndUpdate(filterID, Payload)
        return NextResponse.json({ result, success: true })
    } catch {
        return NextResponse.json({ result, success: false })
    }
}
export async function GET(req, cont) {
    try {
        const productId = cont.params.edit_data
        const filterID = { _id: productId }
        await mongoose.connect(dbconnection)
        const data = await productSTR.findById(filterID)
        return NextResponse.json(data)
    } catch (error) {
        console.log("Daynamic GET api have some error" + error);
        return NextResponse.error({ error: 'Daynamic get internal server error' })
    }
}
export async function DELETE(req, cont) {
    try {
        const productId = cont.params.edit_data
        const filterID = { _id: productId }
        await mongoose.connect(dbconnection)
        const data = await productSTR.deleteOne(filterID)
        return NextResponse.json({ data, success: true })
    } catch (error) {
        console.log("Daynamic DELETE api have some error" + error)
        return NextResponse.error({ error: 'Daynamic DELETE internal server error' })
    }
}