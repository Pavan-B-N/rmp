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

function DesktopDashboardWallet() {
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
                    <DesktopDashboardNav activePage="wallet" />
                </Drawer>


                <div className="desktop-dashboard-nav-bar">
                    <DesktopDashboardNav activePage="wallet" />
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


                <div className="desktop-dashboard-home-container">
                    <div>
                        <div className="title-heading">Your Wallet Detail</div>
                        <div className="dashboard-first-row">
                            <div className="dashboard-wallet">
                                <EarningCard />
                            </div>

                            <div className="dashboard-wallet-detail-conatiner">
                                <div className="dashboard-wallet-detail">
                                    <div className="dashboard-in-wallet">
                                        <div>In Wallet</div>
                                        <div>₹ 8500</div>
                                    </div>
                                    <div className="vertical-line"></div>
                                    <div>
                                        <div>Pending</div>
                                        <div>₹ 3500</div>
                                    </div>

                                </div>

                                <div className="dashboard-withdraw-amt">
                                    <div className="righ-item-title">Withdraw Money</div>
                                    <div className="desktop-withdraw-money-detail">
                                        <div>₹ 8500</div>
                                        <button>Withdraw</button>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>


                    <div className="right">

                    </div>

                    <div className="desktop-dashboard-analytics">
                        <div className="bank-row-wallet">
                            <div >
                                <div className="title-heading">Your Bank Detail</div>
                                <div className="bank-status">
                                    <img src={bank} alt={""} />
                                    <div>Bank Details Added</div>
                                    <img src={check} alt={""} />
                                </div>

                            </div>
                            <div>
                                <div className="title-heading">Withdraw Request</div>
                                <div className="bank-status">
                                    <div>
                                        <div>Request Placed</div>
                                        <div className="small-text">Processed in 2-3 working days</div>
                                    </div>
                                    <div>₹ 8,500</div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="title-heading">Transactions</div>

                            <TabLayout />

                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

function TabLayout() {
    const [value, setValue] = React.useState('Completed');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="tab-layout">
            <div className="tabs">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="Completed" label="Completed" />
                    <Tab value="Pending" label="Pending" />
                </Tabs>

            </div>
            <div className="contents">
                {value === "Completed" &&
                    <div>
                        <TransactionItem status={"success"} />
                        <TransactionItem status={"success"} />
                        <TransactionItem status={"success"} />
                        <TransactionItem status={"success"} />
                        <TransactionItem status={"success"} />
                        <TransactionItem status={"success"} />
                    </div>
                }
                {value === "Pending" &&
                    <div>
                        <TransactionItem /><TransactionItem /><TransactionItem />

                    </div>
                }
            </div>
        </div>
    )
}
function TransactionItem({ status }) {
    return (
        <div className="desktop-transaction-item">
            <div>
                <div className="desktop-transaction-title">
                    <img src={status == "success" ? check : pause} alt={""} />
                    Commission earned
                </div>
                <div className="small-text">12th JUL 2023 08:30:00</div>
            </div>
            <div>
                <div className="desktop-transaction-amt">+ 500 INR</div>
                <div className="small-text">#91821*****72</div>
            </div>
            <div></div>
        </div>
    )
}
function EarningCard() {
    return (
        <div className="earning-page-card">
            <div className="earning-page-details">
                {/* <div className="earnings-count">27</div> */}
                <div className="detail">
                    <div className="detail-title">Total Earnings</div>
                    <div className="detail-amount">₹ 12,500</div>
                </div>
            </div>
            <hr className="earning-card-divider" />
            <div className="earnings-progress-container">
                <progress className="earning-progress" min="0" max="100" value="50"></progress>
                <div className="progress-label">
                    <div className="progress-start-label">₹ 12,500</div>
                    <div className="progress-end-label">₹ 50,000</div>
                </div>
            </div>
        </div>
    )
}

export default DesktopDashboardWallet
