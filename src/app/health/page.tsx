'use client';

import { useEffect, useState } from 'react';

function ServerHealth() {
    const [healthStatus, setHealthStatus] = useState<string>('Revisando salud del servidor...');

    useEffect(() => {
        fetch('/api/health')
        .then(async (res) => {
            const data = await res.json();
            setHealthStatus(`${res.status} - ${data.message}`)
        })
        .catch(() => {
            setHealthStatus('Error - no pudimos comunicarnos con el servidor.');
        });
    }, []);

    return (
        <div className="text-6xl font-[syne] text-[#0B0E29] mx-40 text-center">
        {healthStatus}
        </div>
    );
}


const page = () => {
    return (
        <div className='flex items-center justify-center my-40 text-wrap'>
            <ServerHealth />
        </div>
    )
}

export default page