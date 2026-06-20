import BookingCancelAlert from '@/components/BookingCancelAlert'
import { auth } from '@/lib/auth'

import { headers } from 'next/headers'
import Image from 'next/image'


import React from 'react'
export  const metadata = {
  title: "My Booking",
};

const MyBookingPage = async() => {
    const session = await auth.api.getSession({
    headers:await headers() // you need to pass the headers object.
});

const {token} = await auth.api.getToken({
      headers: await headers()
    });
    const user = session?.user;
    console.log(token)

//const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
const res = await fetch("http://localhost:5000/my-bookings",
    {
          headers:{
            authorization: `Bearer ${token}`,
          }
        }
)

const bookings = await res.json()
//console.log(bookings)
  return (
    <div className='max-w-7xl mx-auto my-10 '>
      <h1 className='text-3xl font-bold my-5 '>MyBooking</h1>
       <div>
        {
            (!bookings || bookings.length === 0 ) ? (
                <div className='bg-red-500'>
                    Not Found
                </div>
            ):
            ( <div >
            {
              bookings.map(booking => <div key={booking._id} className='flex justify-between space-x-4 border border-2 rounded-md'>
               
                   <div >
                       
                        <Image
                        src={booking.imageUrl}
                        alt={booking.roomName}
                        width={200}
                        height={100}
                        className="object-cover rounded"
                        />
                   

                    
                  
                    </div>
                    
                    <div className=' shadow shadow-xl flex gap-3 items-center mx-auto'>
                      
                     <div>
                       <h2>
                        RoomName
                        <p className='text-center'>{booking.roomName}</p></h2>
                     </div>
                    <div>
                       <h2>
                      Capacity
                      <p className='text-center'>{booking.capacity}</p>
                    </h2>
                    </div>
                    <div className='text-center'>
                      <h2>
                      Floor
                      <p>{booking.floor}</p>
                    </h2>
                    </div>
                    
                    <div className='text-center'>
                      <h2>Date
                      <p >{booking.date}</p>
                    </h2>
                    </div>
                    <div className='text-center'>
                      <h2>TotalCost<p>{booking.totalCost}</p></h2>
                    </div>
                  <div className='text-center'>
                     <h2> Total Time <p>{booking.startTime}-{booking.endTime}</p></h2>
                  </div>
                    <div className='flex-col text-center'>
                      <h2>Status</h2>
                          <span className={`px-2 py-1 text-xs rounded ${booking.status === "cancelled" ? "bg-red-200 text-red-700" : "bg-green-200 text-green-700"}`}>
                      {booking.status || "confirmed"}
                    </span>
                      </div>
                        <BookingCancelAlert bookingId={booking._id}/>
                    </div>
               
                   
                    
                </div>)
            }
             
        </div>)
        }
       </div>
        
       
       
    </div>
  )
}

export default MyBookingPage