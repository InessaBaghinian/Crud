import Navbar from "./components/Navbar"
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EditUser from "./components/EditUser"


function App() {
    return ( 
        <BrowserRouter>
           <Navbar/>
           <Routes >
              <Route path = "/" element = { < Home/ > } />
              <Route path = "/all" element = { < AllUsers/ > } /> 
              <Route path = "/add" element = { < AddUser/ > } /> 
              <Route path = "/edit/:id" element = { < EditUser/ > } /> 
           </Routes> 
       </BrowserRouter>
    );
}

export default App;
