import { Button } from '@heroui/react';
import Link from 'next/link';



const NotFound = () => {
    return (
    <div className='max-w-7xl mx-auto shadow shadow-xl p-16'>
        <div className='flex flex-col  text-center space-y-3'>
            <h2 className='text-6xl text-red-600 font-bold '>404</h2>
            <h2 className='text-3xl font-bold'>Opps! Page Not Found</h2>
            <p>The page you are loooking for does not exist.</p>
            <Link href="/">
            <Button className='btn btn-info font-bold'>Go Back Home</Button>
            </Link>
        </div>
     
    </div>
  );
};

export default NotFound;