import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { AnalyticsData } from '@/types'

interface UserEmail {
    email: string;
}

export async function GET() {
    try {
        const users: UserEmail[] = await prisma.user.findMany({
            select: { email: true }
        })
        
        const totalUsers = users.length
        const emailHandles: Record<string, number> = {}
        
        // Extraer y contar handles de email
        users.forEach((user: UserEmail) => {
            const handle = user.email.split('@')[1]
            if (handle) {
                emailHandles[handle] = (emailHandles[handle] || 0) + 1
            }
        })
        
        // Ordenar handles por cantidad
        const topHandles = Object.entries(emailHandles)
            .map(([handle, count]) => ({ handle, count }))
            .sort((a, b) => b.count - a.count)
        
        const analytics: AnalyticsData = {
            totalUsers,
            emailHandles,
            topHandles
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