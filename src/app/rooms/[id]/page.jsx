import BookingCard from '@/components/BookingCard';
import DeleteAlert from '@/components/DeleteAlert';
import EditNodal from '@/components/EditNodal';
import { auth } from '@/lib/auth';

import { Button, Card, Description } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';

import Link from 'next/link';
import React from 'react'
export  const metadata = {
  title: "Room Details",
};

const RoomDetailPage = async({params}) => {
    const {id} = await params;
       const session = await auth.api.getSession({
        headers:await headers() // you need to pass the headers object.
    });
    const user = session?.user;
    console.log(user)
    const {token} = await auth.api.getToken({
      headers: await headers()
    });
     
    //console.log(token) server compnent
    const res = await fetch(`http://localhost:5000/room/${id}`
      ,{
      headers:{
        authorization: `Bearer ${token}`,
      }
    }
  );
    const singleRoom = await res.json()
    //console.log("singleRoom",singleRoom)
  
     const {roomName,imageUrl,amenities,description,ownerId} = singleRoom;
     const isOwner = user?.id === ownerId;
    
  return (
    <div className=' max-w-7xl mx-auto '>RoomDetailPage
         {
          isOwner && (
              <div className='flex justify-end gap-3 my-5'>
            <EditNodal singleRoom={singleRoom}/>
            <DeleteAlert singleRoom={singleRoom}/>
          </div>
          )
         }
     <Card className="w-full items-stretch md:flex-row">
          <div className='relative w-full aspect-square'>
              <Image
             src={imageUrl}
             alt={roomName}
           width={800}
           height={500}
             className="object-cover rounded"
           />
             <div className="flex flex-1 flex-col gap-3">
             
          
              <p>{description}</p>
            
             
              <div>
                
                <div className='flex  gap-2 '><h3 className='font-bold'>Amenities:{amenities}</h3>
                 
              </div>
              
              <p>OnwnerId:{ownerId}</p>
              </div>
             
            </div>
          </div>
         
             <BookingCard singleRoom={singleRoom}/>
          
           
      </Card>
    </div>
  )
}

export default RoomDetailPage