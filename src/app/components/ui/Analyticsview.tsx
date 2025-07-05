'use client'

import { useState, useEffect } from 'react'
import {
    Typography,
    Box,
    CircularProgress,
} from '@mui/material'
// import { AnalyticsData } from '@/types'

export default function Analytics() {
    // const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await fetch('/api/analytics')
                if (!response.ok) {
                throw new Error('Error al cargar analytics')
                }
                // const data = await response.json()
                // setAnalytics(data)
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError('Error desconocido al cargar')
                }
            } finally {
                setLoading(false)
            }
        }

        fetchAnalytics()
    }, [])

    if (loading) {
        return (
        <Box display="flex" justifyContent="center" p={4}>
            <CircularProgress />
        </Box>
        )
    }

    if (error) {
        return (
        <Typography color="error" align="center">
            {error}
        </Typography>
        )
    }

    return (
        <div></div>
    )
}