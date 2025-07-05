'use client';

import { useState, useEffect } from 'react';
import { AnalyticsData } from '@/types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Page = () => {
    const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const response = await fetch('/api/analytics');
                if (response.ok) {
                    const data = await response.json();
                    setAnalytics(data);
                }
            } catch (error) {
                console.error('Error fetching data: ', error)
            }
        }

        fetchAnalytics();
    }, []);

    return (
        <div className="flex flex-col text-center items-center justify-center my-30 gap-y-15">
            <div className="text-6xl text-[#0B0E29] border-b-2 border-[#0B0E29]">
                ANALYTICS
            </div>
            <div>
                <TableContainer component={Paper} className="min-w-[650px] rounded-none shadow-none border-2 border-[#0B0E29]">
                    <Table>
                        <TableHead>
                            <TableRow className='bg-[#252D74]'>
                                <TableCell className="font-[syne] font-bold text-white">Dominio</TableCell>
                                <TableCell className="font-[syne] font-bold text-white">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {analytics?.emailDomains && Object.entries(analytics.emailDomains).map(([domain, count]) => (
                                <TableRow key={domain}>
                                    <TableCell className="font-[syne]">{domain}</TableCell>
                                    <TableCell className='font-[syne]'>{count}</TableCell>  
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}

export default Page