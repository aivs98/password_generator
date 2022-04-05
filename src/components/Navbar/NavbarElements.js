import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'   //Aliasing NavLink as Link
import { FaBars } from 'react-icons/fa'    //  /fa to select just that one icon



//styling part is within the two backticks ` ` 

//exported <Nav> from src/components/Navbar/index.js
export const Nav = styled.nav`
 
   
   opacity:0.8;
   height: 80px;
   display: flex;
   justify-content: space-between;
   padding: 0.5rem calc((100vw - 1000px) / 2);
   z-index: 10;
`             

export const NavLink =styled(Link)`
   color:black;
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0 1rem;
   height: 100%;
   cursor: pointer;
    border:1px solid green;
    margin-left: 5px;
   &.active {
       color:RGB(4, 94, 38);
   }
`

//styling for the react icons (fa bars icon)
export const Bars = styled(FaBars)`
   display:none;
   color:#fff;

   @media screen and (max-width: 768px) {
       display: block;
       position: absolute;
       top: 0;
       right: 0;
       transform: translate(-100%, 75%);
       font-size: 1.Brem;
       cursor: pointer;
   }
`

export const NavMenu = styled.div`
   display: flex;
   aligh-items: center;
   margin-right: -24px;

   @media screen and (max-width: 768px) {
       display: none;
   }
`

export const NavBtn = styled.nav`
   display: flex;
   aligh-items: center;
   margin-right: 24 px;


@media screen and (max-width: 768px) {
    display: none;
}
`
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  border:none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;