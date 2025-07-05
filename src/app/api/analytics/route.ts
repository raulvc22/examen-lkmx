import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

interface UserEmail {
    email: string;
}

export async function GET() {
    try {
        const users: UserEmail[] = await prisma.user.findMany({
            select: { email: true }
        })
        
        const totalUsers = users.length
        const emailDomains: Record<string, number> = {}
        
        users.forEach((user: UserEmail) => {
            const domain = user.email.split('@')[1]
            if (domain) {
                emailDomains[domain] = (emailDomains[domain] || 0) + 1
            }
        })
        
        const analytics = {
            totalUsers,
            emailDomains
        }
        
        return NextResponse.json(analytics)
    } catch (error) {
        console.error('Error fetching analytics:', error)
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        )
    }
}