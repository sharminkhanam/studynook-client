import { Card } from '@heroui/react'
import React from 'react'
import { FaRegClock } from 'react-icons/fa'

import { FiBookOpen } from 'react-icons/fi'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { LuCircleDollarSign } from 'react-icons/lu'

const WhyChooseStudyNook = () => {
  return (
    <div className=' py-20 bg-base-100'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='my-5 space-y-3'>
                 <h2 className='text-3xl font-bold text-center  '>Why Students Choose StudyNook?</h2>
            <p className='text-gray-600  text-center '>Discover a smarter way to find and  reserve study spaces that help you
                stay productive and focused.
            </p>
            </div>
           
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
        <Card className="w-[300px] ">
      <FiBookOpen size={50}/>
      <Card.Header className='space-y-2'>
        <Card.Title className='text-xl font-bold'>Quiet Study Environment</Card.Title>
        <Card.Description>
            Find distraction-free rooms designed for focused learning and productive study session.
        </Card.Description>
      </Card.Header>
    </Card>
      <Card className="w-[300px]">
      <FaRegClock size={50} />
      <Card.Header className='space-y-2'>
        <Card.Title className='text-xl font-bold'>Instant Bookings</Card.Title>
        <Card.Description>
             Reserve your preferred study room within seconds with our streamlined booking process
        </Card.Description>
      </Card.Header>
    </Card>
      <Card className="w-[300px]">
      <LuCircleDollarSign  size={50} />
      <Card.Header className='space-y-2'>
        <Card.Title className='text-xl font-bold'>
            Affordable Rates
        </Card.Title>
        <Card.Description>
            Flexible hourly pricing suitable for students, researchers, and professional.
        </Card.Description>
      </Card.Header>
    </Card>
      <Card className="w-[300px]">
     <IoShieldCheckmarkOutline  size={50} />
      <Card.Header className='space-y-2'>
        <Card.Title className='text-xl font-bold'>Secure and Reliable</Card.Title>
        <Card.Description>
           Verified room lostings and secure booking management for peace of mind
        </Card.Description>
      </Card.Header>
    </Card>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseStudyNook

