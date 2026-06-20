"use client"

import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink';
import { FaBars } from "react-icons/fa6";
import { FiBookOpen } from 'react-icons/fi';



const Navbar = () => {
      const userData = authClient.useSession();
      const user = userData.data?.user;
      const [open, setOpen] = useState(false);
    //console.log(user)
    const handelSignOut = async () => {
        await authClient.signOut()
    }
  return (
    <div className='bg-white '>
    <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center gap-2'>
                <p className=' border border-2 bg-gray-950 p-3 rounded-full'>
                    <FiBookOpen className="border border-2 rounded-full p-2 bg-gray-700" />
                <span className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-700 bg-clip-text text-transparent'>SN</span>
                </p>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-700 bg-clip-text text-transparent'>
                StudyNook
                </h1>
            </div>
       
            {/* desktop menu */}

            <ul className='hidden md:flex items-center font-medium gap-6'>
              <li>
                <NavLink href={'/'}>Home</NavLink>
            </li>
             <li>
                <NavLink href={'/rooms'}>Rooms</NavLink>
            </li>
              {user && (
            <>
            <li>
                <NavLink href={'/add-rooms'}>Add Rooms</NavLink>
            </li>
             <li>
                <NavLink href={'/my-bookings'}>My Bookings</NavLink>
            </li>
             <li>
                <NavLink href={'/my-listings'}>My Listings</NavLink>
            </li>
            </>
        )
     }
      </ul>
      {/** auth desktop */}
      <div className='hidden md:flex items-center gap-3'>
        {
            !user ? (<>
                <Link href={'/register'} className='bg-green-500 border px-3 py-2 rounded-md text-white'>Register</Link>
                 <Link href={'/login'} className='bg-indigo-600 border px-3 py-2 rounded-md text-white'>LogIn</Link>
            </>) :(<>
              <Avatar size="sm">
                    <Avatar.Image alt="John Doe" size="sm" src={user?.image}
                    referrerPolicy='no-referrer'/>
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                    <span>{user.name}</span>
                    </Avatar>
                        <Button onClick={handelSignOut} variant='danger'
                    >SignOut</Button>
            </>
        )}
         </div>
       {/* Mobile Button */}
          <Button onClick = {() => setOpen(!open)} className="md:hidden text-2xl">
				<FaBars /></Button>
    </div>

     {/* Mobile Menu */}
     {
        open && (<>
        <div className='md:hidden px-4 pb-4  space-y-3'>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/rooms'}>Rooms</NavLink>
            {
                user && (<>
                    <NavLink href={'/add-rooms'}>Add Rooms</NavLink>
                     <NavLink href={'/my-bookings'}>My Bookings</NavLink>
                     <NavLink href={'/my-listings'}>My Listings</NavLink>
                </>
            )}
            {
                !user ? (
                    <>
                    <div className='flex flex-col gap-2 w-28'>
                    <Link href={'/register'} className='bg-green-500 border px-3 py-2 rounded-md text-white'>Register</Link>
                     <Link href={'/login'} className='bg-indigo-600 border px-3 py-2 rounded-md text-white'>LogIn</Link>
                    </div>
                     
                    </>
                ):(<>
                <div className='flex gap-2'> 
                    <Avatar size="sm">
                    <Avatar.Image alt="John Doe" size="sm" src={user?.image}
                    referrerPolicy='no-referrer'/>
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback> 
                        <span>{user.name}</span>
                   </Avatar>
                
                        
                    <Button onClick={handelSignOut} variant='danger'
                    >SignOut</Button>
                
                  
                    </div>
                </>)}
        </div>
        </>)}
    
    </div>
    
  )
}

export default Navbar