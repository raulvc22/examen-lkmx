import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        { message: 'SERVER HEALTH OK!'},
        { status: 200 }
    )
}