import React, { useState } from "react";
import { addUser } from "../Service/Api";
import { useNavigate } from "react-router-dom";
import { Label } from "./Label";
import { Input } from "@/components/ui/input"
import {Button} from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: ""
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const history = useNavigate();

  const valueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetail = async () => {
    await addUser(user);
    history("/all");
  };

  return (
    <div className="relative overflow-x-auto pt-28">
      <div className="max-w-sm mx-auto">
        <h1 className="text-green-600 font-bold text-3xl text-center"> Add New Student </h1>
        <div>
          <Label>Name</Label>
          <Input className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" 
          onChange={(e) => valueChange(e)} 
          type="text"
          name="name" 
          value={name} />
        </div>
        <div>
        <Label>user Name</Label>

          <Input 
            onChange={(e) => valueChange(e)}
            type="text"
            name="username"
            value={username}
          />
        </div>
        <div>
        <Label>Email</Label>

          <Input 
          onChange={(e) => valueChange(e)} 
          type="email"
          name="email" 
          value={email} />
        </div>
        <div>
          <Label> Phone No. </Label>
          <Input 
          onChange={(e) => valueChange(e)} 
          type="number"
          name="phone" 
          value={phone} />
        </div>
        <Button 
          onClick={() => addUserDetail()}
          variant='trnaspert'
          className='bg-green-700 text-background'
        >
          Add New Students
        </Button>
      </div>
    </div>
  );
};

export default AddUser;