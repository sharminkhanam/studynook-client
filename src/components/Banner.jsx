import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Banner = () => {
  return (
    <div className='my-10 '>
      <div className='flex justify-between gap-3'>
        <div className='flex-1 bg-amber-300'>
          <div>

          </div>
          <p className="font-semibold text-purple-400">New: AI-Powered Tools Available</p>
          <h2 className='font-bold text-4xl text-sky-950 text-center items-center mt-30'>Find Your Perfet Study Room</h2>
          <p className='text-gray-900 ml-20'>Browse and book quiet, private study rooms in your library.
            <br></br>
            List your own room and create a focused study environment.

          </p>
            <div className='flex gap-3 ml-20'>
            <Button className={'hover:bg-purple-900'}>List Room</Button>
            <Link href="/rooms">
            <Button className={'hover:bg-purple-600'}>Explore Room</Button>
            </Link>
          
          </div>
        </div>
        <div className='bg-amber-900 flex-1'>
      <Image
      src="/assets/hero.png" alt="Study Room" 
     height={800}
     width={800}
      className='object-cover'
      >
      </Image>
        </div>
      </div>
     
    

       
    
      
    </div>
  )
}

export default Banner