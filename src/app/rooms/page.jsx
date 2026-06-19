import RoomCard from '@/components/RoomCard';
import React from 'react'

export  const metadata = {
  title: "Rooms",
};

const RoomsPage = async() => {
  const res = await fetch('http://localhost:5000/room');
  const rooms = await res.json();
  //console.log(rooms)
 
  return (
    <div>All RoomsPage
      
      <div className='grid grid-cols-3 gap-4'>
        {
          rooms.map((room)=><RoomCard key={room._id} room={room}>

          </RoomCard>)
        }
      </div>
     
    </div>
  )
}

export default RoomsPage