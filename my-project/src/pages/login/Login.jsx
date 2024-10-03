import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      const res = await axios.get("http://127.0.0.1:3000/users");
      const token = res.data[0].email;
      if (token) {
        Cookies.set("my-token", token);
      }

      window.location.replace("/")
      // setIsLoggedIn(true);
    } else {
      // alert("Invalid username or password");
      toast({
        variant: "destructive",
        title: "Invalid username or password",
      });
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
            <Button
              onClick={handleLogin}
              variant="trnaspert"
              className="bg-green-700 text-background"
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
