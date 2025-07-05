import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { AnalyticsData } from '@/types'

// Definir tipo para el resultado de la consulta
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
        
        const topDomains = Object.entries(emailDomains)
            .map(([domain, count]) => ({ domain, count }))
            .sort((a, b) => b.count - a.count)
        
        const analytics: AnalyticsData = {
            totalUsers,
            emailDomains,
            topDomains
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