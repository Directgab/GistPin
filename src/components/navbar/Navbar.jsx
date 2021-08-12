import "./navbar.scss"
import gistpinvd from './gistpinvd.png';
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import gistpinvdavartar from './gistpinvdavartar.png';
import React, { useState } from 'react'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left"></div>
                <img src={gistpinvd} alt="gistpin" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
                
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src={gistpinvdavartar} alt="gistpinvdavartar"/>
                    
                    <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                  </div>
                
            </div>            
        </div>
    )
}

export default Navbar
