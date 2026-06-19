import React from 'react'
import EditNodal from './EditNodal'
import DeleteAlert from './DeleteAlert'
import Image from 'next/image'

const MyListingClient = ({rooms}) => {
  return (
    <div>MyListingClient
        <div className='max-w-7xl mx-auto my-10 gap-4'>
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
                    <div key={room._id} className='flex gap-5 border border-2 rounded-md'>
                     
                         <div>
                              <Image
                              src={room.imageUrl}
                              alt={room.roomName}
                              width={200}
                              height={100}
                              className="object-cover rounded"
                              />
                         
      
                          
                        
                          </div>
                          
                          <div className=' shadow shadow-xl flex-1 grid grid-cols-2 md:grid-cols-4 gap-3 items-center '>
                            
                           <div>
                             <h2>
                              RoomName
                              <p className='text-center'>{room.roomName}</p></h2>
                           </div>
                          <div>
                             <h2>
                            Capacity
                            <p className='text-center'>{room.capacity}</p>
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
                          </div>
                          </div>
                         <div className='flex justify-end'>
                            <EditNodal singleRoom={rooms}/>
                            <DeleteAlert singleRoom={room._id}/>
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