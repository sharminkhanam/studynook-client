import { Button } from '@heroui/react';
import React from 'react'
import RoomCard from './RoomCard';
import Link from 'next/link';


const FeaturedRoom =async ({}) => {
    const res = await fetch('http://localhost:5000/featured');
    const rooms = await res.json()
    console.log(rooms)
  return (
    <div className='max-w-7xl mx-auto mt-10'>
        <div className='flex justify-between mt-4 '>
            <div className='space-y-2'>
                     <h1 className='text-3xl font-bold'>Featured Room</h1>
       <p className='text-gray-600'>Explore top study rooms with modern facilites</p>
        </div>
       <Link href={'/rooms'}><Button variant='outline' className={'rounded-none border boder-2 text-cyan-400 border-cyan-600'}>All Rooms</Button>
       </Link>
       
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
                rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
            }
        </div>
       
      
    </div>
  )
}

export default FeaturedRoom