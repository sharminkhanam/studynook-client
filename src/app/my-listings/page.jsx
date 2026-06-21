

import React from 'react'
import { auth } from '@/lib/auth'
import { Button, Card } from '@heroui/react'
import { headers } from 'next/headers'
import Image from 'next/image'
import MyListingClient from '@/components/MyListingClient'

export  const metadata = {
  title: "My-Listings",
};


const MyListingsPage = async() => {
      const session = await auth.api.getSession({
      headers:await headers() // you need to pass the headers object.
  });
  
 const {token} = await auth.api.getToken({
       headers: await headers()
     });
      const user = session?.user;
      console.log(token)
  //console.log(user)
  //const res = await fetch(`http://localhost:5000/booking/${user?.id}`)
  const res = await fetch("http://localhost:5000/my-listings",
      {
            headers:{
               authorization: `Bearer ${token}`,
            },
            cache:  "no-store",
          },
         
  )
  
  const rooms = await res.json()
  //console.log(rooms)
  return (
    <div>
      <MyListingClient rooms={rooms}/>
    </div>
  )
}

export default MyListingsPage