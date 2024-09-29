import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {Button} from '@/components/ui/button'
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"




const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    if (username === "admin" && password === "password") {
      const res = await axios.get("http://127.0.0.1:3003/users");
      const token = res.data[0].token;
      Cookies.set("my-token", token);
      window.location.replace('/home')
      // setIsLoggedIn(true);
    } else {
      // alert("Invalid username or password");
      <ToastClose/>
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-green-600 font-bold text-3xl text-center">
            Admin account
          </h2>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mt-8 space-y-6">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {/* <Button
              onClick={handleLogin}
              className="w-full flex justify-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
            >
              Sign in
            </Button> */}
            <Button
              onClick={handleLogin}
              variant='trnaspert'
              className='bg-green-700 text-background'
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
