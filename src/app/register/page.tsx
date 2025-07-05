'use client';

import { TextField, Button } from '@mui/material';
import { useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // api logic

        setFormData({
            username: '',
            email: '',
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center my-30 gap-y-8">
            <div className="text-6xl text-[#0B0E29] border-b-2 border-[#0B0E29]">
                REGISTRO DE USUARIOS
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <div className='flex py-10 gap-x-15'>
                    <div>
                        <TextField required id="username" onChange={handleChange} label="Usuario" variant="outlined" value={formData.username} className='w-[400px]'/>
                    </div>
                    <div>
                        <TextField required id="email" type='email' onChange={handleChange} label="Email" variant="outlined" value={formData.email} className='w-[400px]'/>
                    </div>
                </div>
                <div className='py-8'>
                    <Button variant='contained' type='submit' className='text-2xl rounded-none bg-[#252D74] py-4 px-20 font-[syne]'>
                        REGISTRAR
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Page