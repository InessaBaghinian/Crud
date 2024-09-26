import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav>
                <div > 
                    <NavLink to = "./"  > Home </NavLink> 
                    <NavLink to = "all"  > All Users </NavLink> 
                    <NavLink to = "add"  > Add User </NavLink>
                </div > 
            </nav> 
        </div>
    );
};

export default Navbar;
