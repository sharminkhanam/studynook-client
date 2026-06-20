"use client"

import { authClient } from '@/lib/auth-client';
import { Button, Card, DateField, Description, FieldError, Label } from '@heroui/react'
import Image from 'next/image';

import React, { useState } from 'react'
import { toast } from 'react-toastify';

const BookingCard = ({singleRoom}) => {
      const userData = authClient.useSession();
        const user = userData.data?.user;
      
  
         //const {data:session} =authClient.useSession();
            //const user = session?.user;
        //console.log(user)
        //console.log(singleRoom)
    const {_id,roomName,floor,capacity, 
      hourlyRate,bookingCount,imageUrl,ownerName} = singleRoom;
        const [date, setDate] = useState(null);
        const [startTime, setStartTime] = useState("");
        const [endTime, setEndTime] = useState("");
      
        
      const hours = [
        "08:00AM","09:00AM","10:00AM","11:00AM","12:00PM",
        "01:00PM","02:00PM","03:00PM","04:00PM","05:00PM",
        "06:00PM","07:00PM","08:00PM"
      ];
      const convertTime = (time)=>{
          if(!time) return 0;
          let hour = parseInt(time.slice(0,2));
          let period = time.slice(-2);
          if(period === "AM" && hour !== 12)
            hour += 12;
           if(period === "AM" && hour === 12)
            hour =0;
           return hour;
        } ;
       
      const totalCost = ()=>{
        if(!startTime || !endTime) 
          return 0;
        const start = convertTime(startTime);
        const end = convertTime(endTime);
        if(end <= start) return 0;
        return (end-start) * hourlyRate;
      };
         
     
    
    //console.log(new Date(date))
    const handelBooking = async()=>{
        const bookingData={
            userId: user?.id,
            userName:user?.name,
            userImage:user?.image,
            userEmail:user?.email,
            roomId: _id,
            bookingCount:bookingCount,
            roomName:roomName,
            imageUrl,
            floor,
            hourlyRate,
            capacity,
            ownerName,
            date,
            startTime,
            endTime,
            totalCost: totalCost()
        }
        //console.log(bookingData)
        const {data:tokenData} = await authClient.token();
        console.log(tokenData)
         const res = await fetch('http://localhost:5000/booking', {
          method:'POST',
          headers:{
            'content-type' : 'application/json',
            authorization: `Bearer ${tokenData?.token}`,
          },
          body:JSON.stringify(bookingData)
        })
        const data = await res.json();
        toast.success("Your booked successfully")
        console.log(data)
       
    }
     
    //console.log(singleRoom)
  return (
  
    <Card className="w-full md:p-6 p-4 flex flex-col gap-4 md:flex-row ">
     
         <div className="flex flex-1 flex-col gap-3">
              <h2 className='font-bold md:text-2xl'>{roomName}</h2>
              <div className='space-y-5'>
               <div className='flex justify-between gap-6'>
                <p>Floor:{floor}</p>
               <p>Capacity:{capacity}seates</p>
               </div>
               <div className='flex justify-between'>
                <p>HourlyRate:{hourlyRate}/hour</p>
               <p>BookingCount:{bookingCount}</p>
               <p className='font-bold'>OwnerName:{ownerName}</p>
               </div>
               <div>
               </div>
               <div className='flex gap-3'>
                <input type="date" className='border p-2 mt-2'
                onChange={(e) =>setDate(e.target.value)} 
                />
                <select className='border p-2 mt-2'
                onChange={(e) =>setStartTime(e.target.value)}
                >
                  <option> Select StartTime</option>
                  {
                    hours.map((h) =>(
                      <option key={h} value={h}>{h}</option>
                    ))
                  }
                </select>
                 <select className='border p-2 mt-2'
                onChange={(e) =>setEndTime(e.target.value)}
                >
                  <option> Select EndTime</option>
                  {
                    hours.map((h) =>(
                      <option key={h} value={h}>{h}</option>
                    ))
                  }
                </select>
                
               </div>
             <p>TotalCost:${totalCost()}</p>
              </div>
 
     <Button onClick={handelBooking}>Booking Now</Button>
            </div>
    </Card>
  )
}

export default BookingCard