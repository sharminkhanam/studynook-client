import { Card } from '@heroui/react'
import React from 'react'
import { FiSmartphone, FiTarget } from 'react-icons/fi'
import { IoIosTimer } from 'react-icons/io'

const StudyProductivity = () => {

  return (
    <div>
         <div className=' py-20 bg-base-100'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='my-5 space-y-3'>
                         <h2 className='text-3xl font-bold text-center  '> Boost Your Study Productivity</h2>
                    <p className='text-gray-600  text-center '>Discover proven study habits that help you stay focused,
                        manage your time, and achieve better academic results.
                       
                    </p>
                    </div>
                   
                    <div className='grid md:grid-cols-3  gap-4 my-10'>
                <Card className=" ">
             <IoIosTimer size={50}/>
              <Card.Header className='space-y-2'>
                <Card.Title className='text-xl font-bold'>Time Bloking</Card.Title>
                <Card.Description>
                    Schedule dedicated study periods to improve concentration and productivity
                </Card.Description>
              </Card.Header>
            </Card>
              <Card className="">
              <FiTarget size={50} />
              <Card.Header className='space-y-2'>
                <Card.Title className='text-xl font-bold'>Set Daily Goals</Card.Title>
                <Card.Description>
                    Set priorities and concentreate on the most important tasks first
                </Card.Description>
              </Card.Header>
            </Card>
              <Card className="">
             <FiSmartphone size={50} />
              <Card.Header className='space-y-2'>
                <Card.Title className='text-xl font-bold'>
                  Avoid Distractions 
                </Card.Title>
                <Card.Description>
                   Turn off notifications and choose q quiet environment for maximum focus
                </Card.Description>
              </Card.Header>
            </Card>
           
                    </div>
                </div>
            </div>
    </div>
  )
}

export default StudyProductivity 