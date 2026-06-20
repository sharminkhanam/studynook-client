"use client"

import {Button, Card, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import {Check} from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";


const LogInPage = () => {
    const router = useRouter();
    const onSubmit = async(e)=>{
        e.preventDefault();
      
        const email = e.target.email.value;
    
        const password = e.target.password.value;
        console.log({email,password})
        
       const {data, error} = await authClient.signIn.email({
        email,password,
        callbackURL: '/'

       });
       if(error) {
        toast.error(error.message || " Login failed");
        return;
       }
       toast.success("Login successful")
   
      
        router.push('/'); 
    }
    const handelSignInGoole = async () => {
        await authClient.signIn.social({
            provider: "google"
        });
     
    }
    return (
        <Card className="w-full max-w-md mx-auto mt-10">

               <Card.Header>
        <Card.Title className="text-2xl font-black text-center">Login your account</Card.Title>
        
      </Card.Header>   
   <Form onSubmit={onSubmit}>
        <Card.Content>
          <div className="flex flex-col gap-4">
            <TextField name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.coml" variant="secondary" />
            </TextField>
            <TextField name="password" type="password">
              <Label>Password</Label>
              <Input placeholder="password" variant="secondary" />
            </TextField>
          </div>
        </Card.Content>
        <Card.Footer className="mt-4 flex flex-col gap-2">
          <Button className="w-full text-xl" type="submit">
            LogIn
          </Button>
         
        </Card.Footer>
      </Form>
        <p className="text-center ">Don`t have an account? 
          <Link  href={'/register'} className="text-red-500 ">Register</Link></p>
       <p className="text-center text-gray-600">Or</p>
      <Button className={"w-full bg-purple-600 px-2 py-1 rounded-full text-white"} 
      onClick={handelSignInGoole}>Login In with google</Button>
        
        </Card>
    );
};

export default LogInPage;