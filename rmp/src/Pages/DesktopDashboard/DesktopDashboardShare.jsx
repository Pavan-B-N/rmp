import "./DesktopDashboard.css"
import DesktopDashboardNav from "./DesktopDashboardNav"
import { Avatar, IconButton, LinearProgress } from "@mui/material"
import bank from "../../assets/Account-balance.svg"
import check from "../../assets/check-circle.svg"
import pause from "../../assets/pause-circle-1.svg"

import { BarChart } from '@mui/x-charts/BarChart';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import audioBookImg from "../../assets/audio-book-item.jpeg"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShareIcon from "../../assets/share-icons.svg"

function DesktopDashboardShare() {
    const [showNav, setShowNav] = useState(false)
    function closeDrawer() {
        setShowNav(false)
    }
    return (
        <div className="desktop-dashboard-home">
            <div className="desktop-dashboard-nav">

                <Drawer
                    anchor="left"
                    open={showNav}
                    onClose={closeDrawer}
                >
                    <DesktopDashboardNav activePage="share" />
                </Drawer>


                <div className="desktop-dashboard-nav-bar">
                    <DesktopDashboardNav activePage="share" />
                </div>
            </div>
            <div className="desktop-dashboard-main-container">
                <div className="desktop-dashboard-titlebar">

                    <div className="desktop-dashboard-uname">
                        <span style={{ color: "white" }} className="desktop-dashboard-menu-icon" >
                            <IconButton style={{ color: "white" }} onClick={() => setShowNav(true)} >
                                <MenuIcon style={{ color: "white" }} />
                            </IconButton>
                        </span>
                        Welcome <span className="uname">Hemanth</span></div>
                    <Avatar
                        sx={{ height: " 40px", width: "40px", background: "#4A578B", fontWeight: "bold", fontSize: "25px" }}
                    >H</Avatar>
                </div>


                <div className="desktop-share-container">
                    <AudioAccordion
                        imgsrc={audioBookImg}
                        title={"Student PAck"}
                        desc={"pack of 3 audios"}
                        commission={500}
                        price={2900}
                    />
                      <AudioAccordion
                        imgsrc={audioBookImg}
                        title={"Student PAck"}
                        desc={"pack of 3 audios"}
                        commission={500}
                        price={2900}
                    />
                      <AudioAccordion
                        imgsrc={audioBookImg}
                        title={"Student PAck"}
                        desc={"pack of 3 audios"}
                        commission={500}
                        price={2900}
                    />
                         <AudioAccordion
                        imgsrc={audioBookImg}
                        title={"Student PAck"}
                        desc={"pack of 3 audios"}
                        commission={500}
                        price={2900}
                    />


                </div>



            </div>
        </div>
    )
} function AudioAccordion({ imgsrc, title, desc, commission, price }) {
    // const [expanded, setExpanded] = useState(true);
    // function handleExpanded() {
    //     setExpanded(pre => !pre);
    // }
    return (
        <div className="audio-book-item-container desktop-audio-container">
            <div className="audio-book-item dashboard-audio-book-item" >
                <img src={imgsrc} alt="" className="audio-book-img" />
                <div className="audio-book-detail">
                    <div className="audio-book-title">{title}</div>
                    <p className="audio-book-desc">{desc}</p>
                    <div className="audio-book-price-conatiner">
                        <div className="audio-price">
                            <div className="audio-price-amt">₹ {price}</div>
                            <div className="audio-price-label">Price</div>
                        </div>
                        {/* {
                            expanded ?
                                <KeyboardArrowUpIcon />
                                :
                                <KeyboardArrowDownIcon />
                        } */}
                    </div>
                </div>
            </div>
            <div className="book-item-commision-container desktop-commision-container" /*style={{ display: expanded ? "flex" : "none" }}*/>
                <div>Commision - <span className="book-item-commision-amt">₹ {commission}</span></div>
                <img src={ShareIcon} alt="shr-icon" />
            </div>
        </div>
    )
}



export default DesktopDashboardShare
