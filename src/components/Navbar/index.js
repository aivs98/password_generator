import React from 'react'     //rafce enter
import { Nav, NavLink, Bars, NavMenu} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/">
                <h1>PASSWORD GENERATOR</h1>
            </NavLink>
            <Bars  />
            <NavMenu>                    {/* a div wrapped */} 
                <NavLink to="/login" >                     {/* Use this to make pages */}
                <h3>Login </h3>  
                </NavLink>
 
                
                                  
            </NavMenu>
            
           
            

        </Nav>
    </>
  );
};

export default Navbar