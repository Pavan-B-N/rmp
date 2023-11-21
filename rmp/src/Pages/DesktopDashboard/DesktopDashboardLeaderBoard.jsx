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

function DesktopDashboardLeaderBoard() {
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
                    <DesktopDashboardNav  activePage="leaderboard" />
                </Drawer>


                <div className="desktop-dashboard-nav-bar">
                    <DesktopDashboardNav activePage="leaderboard"   />
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


                <div className="title-heading">Overall Leaderboard</div>
                <div className="leadership-month desktop-leadership-month">
                    <div className="selected-leadership-month">This Month</div>
                    <div>Overall</div>
                </div>


                <div className="leaderboard-content-desktop">

                    <div>
                        <div className="desktopside-title">Rank Card</div>
                        <div className="desktop-leadership-list">
                            <table className="desktop-leadership-list-table">
                                <th>S.N</th>
                                <th>Distributor Name</th>
                                <th>Referral Mode</th>
                                <th>Amount</th>

                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />

                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />
                                <LederShipDetail level="3" amt="2500" distributor_name="Name" reference_mode="8" />

                            </table>
                        </div>
                    </div>

                    <div>
                    <div className="desktopside-title desktopside-title-top">Top Performers</div>
                        <TopPerformance />
                    </div>
                </div>

            </div>
        </div>
    )
}


function LederShipDetail({ level, distributor_name, referral_model, amt }) {
    return (
        <tr>
            <td>{level}</td>
            <td>{distributor_name}</td>
            <td>{distributor_name}</td>
            <td>{amt}</td>
        </tr>
    )
}

function TopPerformance() {
    return (
        <div className="leadership-badge desktop-leadership-badge">

            <div className="badge badge2">
                <div className="avatar-shadow">
                    <Avatar sx={{ height: " 40px", width: "40px", background: "#C0C0C0", fontWeight: "bold", fontSize: "25px" }}
                        className="badge-img"
                    >A</Avatar>
                </div>
                <div className="badge-score">40,000</div>
            </div>
            <div className="badge badge1">
                <div className="avatar-shadow">
                    <Avatar sx={{ height: " 40px", width: "40px", background: "#FFD700", fontWeight: "bold", fontSize: "25px" }}
                        className="badge-img"
                    >H</Avatar>
                </div>
                <div className="badge-score">40,000</div>
            </div>

            <div className="badge badge3">
                <div className="avatar-shadow">
                    <Avatar sx={{ height: " 40px", width: "40px", background: "#C18454", fontWeight: "bold", fontSize: "25px" }}
                        className="badge-img"
                    >Y</Avatar>
                </div>
                <div className="badge-score">40,000</div>
            </div>
        </div>
    )
}


export default DesktopDashboardLeaderBoard
