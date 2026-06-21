import React from 'react'
import EditNodal from './EditNodal'
import DeleteAlert from './DeleteAlert'
import Image from 'next/image'

const MyListingClient = ({rooms}) => {
  console.log(rooms)
  return (
    <div className='max-w-7xl mx-auto my-10 gap-4 px-4 md:px-6'>MyListingClient
        <div >
       <div>
        <div className=''>
          
      </div>
            <h1 className='text-3xl font-bold my-5 '>My Listings</h1>
           
             <div className='py-5'>
              {
                  (!rooms || rooms.length === 0 ) ? (
                      <div className='bg-red-500'>
                          Not Found
                      </div>
                  ):
                  ( <div >
                  {
                    rooms.map(room => 
                    <div key={room._id} className='flex flex-col md:flex-row  gap-4 border border-2 rounded-md p-4 mb-4 shadow'>
                     
                         <div>
                              <Image
                              src={room.imageUrl || "https://cdn.pixabay.com/photo/2019/11/04/10/15/book-4600757_1280.jpg"}
                              alt={room.roomName || "Book Room"}
                              width={200}
                              height={100}
                              className="w-full h-48 object-cover rounded"
                              />
                         
      
                          
                        
                          </div>
                          
                          <div className='   flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 items-center '>
                            
                           <div>
                             <h2>
                              RoomName
                              <p >{room.roomName}</p></h2>
                           </div>
                          <div>
                             <h2>
                            Capacity
                            <p >{room.capacity}</p>
                          </h2>
                          </div>
                          <div className='text-center'>
                            <h2>
                            Floor
                            <p>{room.floor}</p>
                          </h2>
                          </div>
                          
                          <div className='text-center'>
                            <h2>HourlyRate
                            <p >${room.hourlyRate}</p>
                          </h2>
                          <p>BookingCount:{room.bookingCount || 0}</p>
                          </div>
                          </div>
                         <div className='flex justify-end'>
                            <EditNodal singleRoom={room}/>
                            <DeleteAlert singleRoom={room}/>
                        </div>
                    </div>
                    )
                  }
                   
              </div>)
              }
             </div>
              
             
             
          </div>
    </div>
    </div>
  )
}

export default MyListingClient