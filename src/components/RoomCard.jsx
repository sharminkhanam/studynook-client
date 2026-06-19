import {Button, Card} from "@heroui/react";
import Image from "next/image";

import Link from 'next/link';
import React from 'react'

const RoomCard = ({room}) => {
    const { _id,roomName,floor,capacity,hourlyRate,imageUrl,amenities} = room;
  return (
    //<div>RoomCard
        //{description}
        //{country}
        //<Link href={`/rooms/${_id}`} ><Button>Book Now</Button></Link>
    //</div>
    <Card className="w-full items-stretch md:flex-row my-10 bg-amber-300">
    <div className="flex flex-col">
      <div >
            <Image
              src={imageUrl}
              alt={roomName}
              width={500}
              height={500}
              className="object-cover rounded"
            />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <h2>{roomName}</h2>
        <div>
         <p>Floor:{floor}</p>
        
         <p>Capacity:{capacity}seates</p>
         <p>HourlyRate:{hourlyRate}/hour</p>
         <p>Amenities:{amenities}</p>
        </div>
       <Link href={`/rooms/${_id}`} ><Button className={'w-full'}> View Details Book Now</Button></Link>
      </div>
    </div>
    </Card>
  )
}

export default RoomCard