"use client"

import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import {Check} from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";


const LoginPage = () => {
    //const router = useRouter();
    const onSubmit = async(e)=>{
        e.preventDefault();
      
        const email = e.target.email.value;
      
        const password = e.target.password.value;
        console.log({name,email,password})
        
       const {data, error} = await authClient.signIn.email({
     
        email,
    
        password
        

       });
       console.log({data,error})
       if(data){
        redirect('/')
       }
      
       
       if(error) {
        toast.error(error.message || " Registration failed");
        return;
       }
       toast.success("Registration successful")
   
       setTimeout(()=> {
        router.push('/login');
       }, 1000)
    }
    return (
        <div >
         
        <h2 className=" text-2xl font-bold text-center my-5">Login your acoount</h2>
         
        <Form className="flex w-96 flex-col gap-4 mx-auto p-10 shadow-lg mt-10" onSubmit={onSubmit}>
     
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>

    
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
        </div>
    );
};

export default LoginPage;