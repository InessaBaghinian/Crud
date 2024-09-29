import Navbar from "./components/Navbar"
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditUser from "./components/EditUser"
import Logout from "./components/Admin/Logout";
import Login from "./components/Admin/Login";
import RequireAuth from "./components/RequireAuth";
import RequireGuest from "./components/RequireGuest";
import Dashboard from "./components/pages/Dashboard";

function App() {
    return ( 
        <BrowserRouter>
           <Navbar/>
           <Routes >
           <Route path="/" element={
              <RequireAuth>
                <Dashboard/>
              </RequireAuth>
            }
          />
          <Route
            path="/login"
            element={
              <RequireGuest>
                <Login />
              </RequireGuest>
            }
          />
              <Route path = "/login" element = { < Login/ > } />
              <Route path = "/home" element = { < Home/ > } />
              <Route path = "/all" element = { < AllUsers/ > } /> 
              <Route path = "/add" element = { < AddUser/ > } /> 
              <Route path = "/edit/:id" element = { < EditUser/ > } /> 
              <Route path = "/logout" element = { < Logout/ > } /> 
           </Routes> 
       </BrowserRouter>
    );
}

export default App;
