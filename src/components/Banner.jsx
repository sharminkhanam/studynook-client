import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Banner = () => {
  return (
    <div className='my-10 '>
      <div className='flex  flex-col-reverse lg:flex-row gap-3'>
        <div className='flex-1 lg:text-left md:p-10 text-center'>
          <div className='space-y-3'>
            <p className="font-semibold text-purple-400">New:AI-Powered Tools Available</p>
          <h2 className='font-bold text-4xl text-sky-950 text-center items-center '>Find Your Perfet Study Room</h2>
          <p className='text-gray-900 mx-auto lg:mx-0 max-w-xl'>Browse and book quiet, private study rooms in your library.
            
            List your own room and create a focused study environment.

          </p>
          </div>
          
            <div className='flex gap-3 ml-20 sm:flex-row justify-center lg:justify-start'>
            <Button className={'hover:bg-purple-900'}>List Room</Button>
            <Link href="/rooms">
            <Button className={'hover:bg-purple-600 w-full sm:w-auto'}>Explore Room</Button>
            </Link>
          
          </div>
        </div>
        <div className='bg-amber-900 flex-1'>
      <Image
      src="/assets/hero.png" alt="Study Room" 
     height={800}
     width={800}
      className='w-full h-auto rounded-2xl object-cover'
      priority  
      >
      </Image>
        </div>
      </div>
     
    

       
    
      
    </div>
  )
}

export default Banner