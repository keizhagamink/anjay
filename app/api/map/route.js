import { ConnectDB } from "@/lib/config/db"
import MapModels from "@/lib/models/MapModels";
const { NextResponse } = require("next/server")
import { writeFile } from 'fs/promises'
const fs = require('fs')

const LoadDB = async () => {
    await ConnectDB();
}

LoadDB();

export async function GET(request) {
    const mapId = request.nextUrl.searchParams.get("id");
    if (mapId) {
        const map = await MapModels.findById(mapId);
        return NextResponse.json(map);
    }
    else{
        const maps = await MapModels.find({});
        return NextResponse.json({ maps })
    }
}

export async function POST(request) {

    const formData = await request.formData();
    const timestamps = Date.now();

    const gambar = formData.get('gambar');
    const imageByteData = await gambar.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamps}_${gambar.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamps}_${gambar.name}`;

    const mapData = {
        judul: `${formData.get('judul')}`,
        deskripsi: `${formData.get('deskripsi')}`,
        penulis: `${formData.get('penulis')}`,
        category: `${formData.get('category')}`,
        gambar: `${imgUrl}`,
        fotopenulis: `${formData.get('fotopenulis')}`
    }

    await MapModels.create(mapData);
    console.log("Map Saved")

    return NextResponse.json({ success: true, msg: "Map Added" })
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const map = await MapModels.findById(id);
    fs.unlink(`./public${map.image}`, ()=>{});
    await MapModels.findByIdAndDelete(id);
    return NextResponse.json({msg:"Maps Deleted"})
}