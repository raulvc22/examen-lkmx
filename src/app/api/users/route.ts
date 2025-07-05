import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/db';
import { CreateUserRequest } from "@/types";

interface PrismaError {
    code: string;
    message: string;
    }

function isPrismaError(error: unknown): error is PrismaError {
    return typeof error === 'object' && error !== null && 'code' in error;
}


export async function GET() {
    try {
        const users = await prisma.user.findMany({
            orderBy: { id: 'desc' }
        })
        return NextResponse.json(users)
    } catch (error) {
        console.error('Error fetching users: ', error)
        return NextResponse.json(
            { error: 'Internal server error'},
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const body: CreateUserRequest = await request.json()

        if (!body.username || !body.email) {
            return NextResponse.json(
                { error: 'Username and email required' },
                { status: 400}
            )
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Non valid email'},
                { status: 400 }
            )
        }

        const user = await prisma.user.create({
            data: {
                username: body.username,
                email: body.email
            }
        })

        return NextResponse.json(user, { status: 201})
    } catch (error: unknown) {
        console.error('Error creating user: ', error)

        if (isPrismaError(error) && error.code === 'P2002') {
            return NextResponse.json(
                { error: 'Username or email duplicated'},
                { status: 409 }
            )
        }

        return NextResponse.json(
            { error: 'Internal server error'},
            { status: 500 }
        )
    }
}
