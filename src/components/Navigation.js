import React from 'react';
import { Link } from "react-router-dom";
import { Nav, NavItem} from 'reactstrap';
import index from '../index.css'

const Navigation = () => {
    return(
        <div className="row custom-nav">
            <Nav tabs  className="bg-dark">
                <p style={{color:'white', fontFamily: 'forte'}} className='brand h3'>Todo Manager</p>
                <NavItem>
                    <Link className='nav-link' to='/home'>Home</Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to='/about'>About</Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </NavItem>
            </Nav>
        </div>
    )
}
export default Navigation;