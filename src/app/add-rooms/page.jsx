'use client'

import { authClient } from '@/lib/auth-client'
import { FieldError, Button,Input, Label, ListBox, TextField,Select, TextArea, Card, Checkbox } from '@heroui/react'
import { redirect } from 'next/navigation'

import React from 'react'
import { toast } from 'react-toastify'


const AddRoomsPage = () => {

  const onSubmit= async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const room = Object.fromEntries(formData.entries());
    console.log(room)
    

    const {data:tokenData} = await authClient.token();
    const res = await fetch('http://localhost:5000/room', {
      method:'POST',
      headers:{
        'content-type' : 'application/json',
        authorization: `Bearer ${tokenData?.token}`,
      },
      body:JSON.stringify(room)
    })
    const data = await res.json();
    if(res.ok){
       toast.success("Add New Room successfully")
    }
   
    redirect('/rooms')
    console.log(data)
  }
  return (
    <div className='max-w-7xl mx-auto my-10 '>
     <h1 className='font-bold text-xl my-4 text-center'> Add Rooms</h1>
      <Card className='shadow shadow-2xl'>
        <form
        onSubmit={onSubmit}
            className="p-10 space-y-8 "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/*Room Name */}
              <div className="md:col-span-2">
                <TextField name="roomName" isRequired>
                  <Label>Room Name</Label>
                  <Input placeholder="Quiet Study Room A1" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Floor */}
              <TextField name="floor" isRequired>
                <Label>Floor</Label>
                <Input placeholder="3rd Floor" className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Amenities - Updated Select Component */}
              <div>
                <Label className='mb-2 block'>Amenites</Label>
                <div className='grid grid-cols-2 gap-3'>
                  <Label className='flex items-center gap-2'>
                    <input type="checkbox" name="amenities" value="WhiteBoard"/>
                    WhiteBoard
                  </Label>
                   <Label className='flex items-center gap-2'>
                    <input type="checkbox" name="amenities" value="Projector"/>
                    Projector
                  </Label>
                   <Label className='flex items-center gap-2'>
                    <input type="checkbox" name="amenities" value="wi-Fi"/>
                    Wi-Fi
                  </Label>
                   <Label className='flex items-center gap-2'>
                    <input type="checkbox" name="amenities" value="Quite Zone"/>
                    Quite Zone
                  </Label>
                   <Label className='flex items-center gap-2'>
                    <input type="checkbox" name="amenities" value="Power Outlets"/>
                    Power Outlets
                  </Label>
                   <Label className='flex items-center gap-2'>
                    <input type="checkbox" name="amenities" value="Air Conditioning"/>
                    Air Conditioning
                  </Label>
                </div>
              </div>
              {/* Hourly Rate */}
              <TextField name="hourlyRate" type="number" isRequired>
                <Label>Hourly Rate($)</Label>
                <Input
                  type="number"
                  placeholder="5"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

                  {/* Capacity */}
              <TextField name="capacity" type="number" isRequired>
                <Label>Capacity(Number of seates)</Label>
                <Input
                  type="number"
                  placeholder="4"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

           

         
            

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <TextField name="description" isRequired>
                  <Label>Description</Label>
                  <TextArea
                    placeholder="A silent study room ideal for deep focus sessions. Equipped with power…"
                    className="rounded-3xl"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
              
              className=" rounded-none w-full bg-cyan-500 text-white"
            >
             Add New Room
            </Button>
          </form>
      </Card>
      

    </div>
  )
}

export default AddRoomsPage