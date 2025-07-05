'use client';

import { useState, useEffect } from 'react';
import { User } from '@/types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const Page = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center my-30 gap-y-15">
            <div className="text-6xl text-[#0B0E29] border-b-2 border-[#0B0E29]">
                LISTA DE USUARIOS
            </div>
            <div>
                <TableContainer component={Paper} className="min-w-[650px] rounded-none shadow-none border-2 border-[#0B0E29]">
                    <Table>
                        <TableHead>
                            <TableRow className='bg-[#252D74]'>
                                <TableCell className="w-20 font-[syne] font-bold text-white">ID</TableCell>
                                <TableCell className="font-[syne] font-bold text-white">Usuario</TableCell>
                                <TableCell className="font-[syne] font-bold text-white">Email</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="w-20">{user.id}</TableCell>
                                    <TableCell className='font-[syne]'>{user.username}</TableCell>
                                    <TableCell className='font-[syne]'>{user.email}</TableCell>
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