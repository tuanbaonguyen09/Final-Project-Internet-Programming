import * as React from 'react';
import './SideBar.css'

//navlink
import {NavLink} from 'react-router-dom'


//font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import MainIcon from '/img'

//State Handler

import {useState} from 'react'
 

export default function SideBar() {
    const [isActive, setIsActive] = useState(false)

    const menuClickHandler = () => {
        setIsActive(!isActive);
    }

    const items = [
        {
            path: "/home/gallery",
            Name: "Home",
            icon: <FontAwesomeIcon icon="fa-solid fa-house" className="barIcon"/>,
        },
        {
            path: "/home/upload",
            Name: "Upload",
            icon: <FontAwesomeIcon icon="fa-solid fa-upload" className="barIcon"/>,
        },
        {
            path: "/home/gallery",
            Name: "Gallery",
            icon: <FontAwesomeIcon icon="fa-solid fa-images" className="barIcon"/>
        },
    ]

    return ( 
        <div className={isActive? "SideBar" : "SideBar disabled"}>
            <div className="SideBarInner">
                <div className="MainIcon">
                    <img src={MainIcon} alt="" />           
                </div>
                <div className="heading">
                    <div className="text">Menu</div>
                    <button className={!isActive? "burgerIcon" : "burgerIcon disabled"} onClick={menuClickHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="list">
                        {
                            items.map((item, index) => (
                                <NavLink to={item.path} key={index}  className={(navData) => navData.isActive ? "item active" : "item" }>
                                    {item.icon}
                                    <div className="text">
                                        {item.Name}
                                    </div>
                                </NavLink>
                            ))
                        }
                </div>
            </div>
        </div>
    )
}