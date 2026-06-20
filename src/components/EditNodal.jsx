
"use client";
import {Envelope} from "@gravity-ui/icons";
import React from 'react'

import {Button, FieldError, Select,Input, Label, Modal, Surface, TextField, ListBox, TextArea} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const EditNodal = ({singleRoom}) => {
    const {_id,roomName} = singleRoom;
   
      const onSubmit= async(e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const room = Object.fromEntries(formData.entries());
    //console.log(room)
     const {data:tokenData} = await authClient.token();
    const res = await fetch(`http://localhost:5000/room/${_id}`, {
      method:'PATCH',
      headers:{
        'content-type' : 'application/json',
         authorization: `Bearer ${tokenData?.token}`,
      },
      body:JSON.stringify(room)
    })
    const data = await res.json();
    //console.log(data)
  }
  return (
    
         <Modal>
     
            <Button variant="outline" >Edit</Button>
   
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-full max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-2" />
              </Modal.Icon>
              <Modal.Heading>Edit Room</Modal.Heading>
              <p className=" text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. 
               
              </p>
            </Modal.Header>
            <Modal.Body className="p-2">
              <Surface variant="default">
                      <form
                     onSubmit={onSubmit}
                          className="space-y-4"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {/* room Name */}
                            <div className="md:col-span-2">
                              <TextField defaultValue={roomName} name="roomName" isRequired>
                                <Label>Room Name</Label>
                                <Input placeholder="Bali Paradise" className="rounded-2xl" />
                                <FieldError />
                              </TextField>
                            </div>
              
                            {/* floor */}
                            <TextField name="floor" isRequired>
                              <Label>Floor</Label>
                              <Input placeholder="3rd" className="rounded-2xl" />
                              <FieldError />
                            </TextField>
              
                            {/* capacity */}
                            <TextField name="capacity" type="number" isRequired>
                              <Label> capacity(Number of seates)</Label>
                              <Input
                                type="number"
                                placeholder="4"
                                className="rounded-2xl"
                              />
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
                            <TextField name="hourlyRate" isRequired>
                              <Label>Hourly Rate $</Label>
                              <Input
                                placeholder="5"
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
                                  placeholder="https://example.com/bali-paradise.jpg"
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
                                  placeholder="Describe the travel experience..."
                                  className="rounded-3xl"
                                />
                                <FieldError />
                              </TextField>
                            </div>
         
                          </div>
              
                          {/* Buttons */}
              
               <Modal.Footer>
             
              <Button type="submit">Save</Button>
            </Modal.Footer>
            
                        </form>
                   
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  
  )
}

export default EditNodal