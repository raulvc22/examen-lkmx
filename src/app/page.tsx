import Link from 'next/link';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className="text-center justify-center items-center px-20 flex my-10 py-30 gap-30 text-[#0B0E29] text-wrap">
      <div className="text-center">
        <div className="text-6xl">
          REGISTRAR <br/> USUARIO
        </div>
        <div className='pt-20'>
          <Link href='/register'>
            <Button variant='contained' className='text-2xl rounded-none bg-[#252D74] py-4 px-20 font-[syne]'>
              {"GO >>"}
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-1 bg-[#0B0E29] h-[21.875rem]"/>

      <div className='text-center'>
        <div className="text-6xl">
          LISTA DE <br /> USUARIOS
        </div>
        <div className='pt-20'>
          <Link href='/list'>
            <Button variant='contained' className='text-2xl rounded-none bg-[#252D74] py-4 px-20 font-[syne]'>
              {"GO >>"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
