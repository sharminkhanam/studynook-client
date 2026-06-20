"use client";
import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";

import React from 'react'
import toast from "react-hot-toast";

const DeleteAlert = ({singleRoom}) => {
     const { roomName,_id} = singleRoom;
     const handelDelete = async()=>{
      const {data:tokenData} = await authClient.token();
        const res =await fetch(`http://localhost:5000/room/${_id}`,{
               method:'DELETE',
        headers:{
        'content-type' : 'application/json',
         authorization: `Bearer ${tokenData?.token}`,
      },
        })
         const data = await res.json();
    if(res.ok){
      toast.success("Room deleted successfully")
    }else{
      toast.error(data?.message || "failed to delete room");
    }
     
     }

  return (
    <div>
          <AlertDialog>
      <Button  variant="danger">Delete </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete room permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{roomName}</strong> and all of its
                data. 
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button onClick={handelDelete}  variant="tertiary">
                Delete
              </Button>
             
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    </div>
  )
}

export default DeleteAlert