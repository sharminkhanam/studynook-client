"use client";
import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";


import React, { useState } from 'react'
import toast from "react-hot-toast";


const BookingCancelAlert = ({bookingId}) => {
  const [loading, setLoading] = useState(false);
  const handelCancelBooking = async()=>{
    
    setLoading( true) ;
    const {data:tokenData} = await authClient.token();
    const res = await fetch(`http://localhost:5000/booking/${bookingId}/cancel`,{
       method:"PATCH",
      headers:{
        'content-type' : 'application/json',
        authorization: `Bearer ${tokenData?.token}`,
      },
   
    })
    const data = await res.json();
    if(data){
      toast.success("Booking cancel successfully")
    }else{
      toast.error("Failed to booking cCancel")
    }
   
    //console.log(data)
    window.location.reload();

  }
  return (
    <div>
            <AlertDialog>
      <Button variant="danger">Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Room permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Are you sure want to cancel this booking? 
               
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
               cancel
              </Button>
              <Button onClick={handelCancelBooking} 
              slot="close" variant="danger">
                 disabled ={loading}
                {loading ? "Cancelling...." : "cancel booking"}
              
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    </div>
  )
}

export default BookingCancelAlert