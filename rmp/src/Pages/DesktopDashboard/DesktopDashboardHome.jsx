import "./DesktopDashboard.css"
import DesktopDashboardNav from "./DesktopDashboardNav"
import { Avatar, IconButton, LinearProgress } from "@mui/material"
import bank from "../../assets/Account-balance.svg"


import { BarChart } from '@mui/x-charts/BarChart';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

function DesktopDashboard() {
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
          <DesktopDashboardNav  activePage="home" />
        </Drawer>


        <div className="desktop-dashboard-nav-bar">
          <DesktopDashboardNav activePage="home" />
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

                <div className="dashboard-account-details">
                  <img src={bank} alt="" />
                  <div className="dashboard-account-details-info">
                    <div className="dashboard-account-details-info-item">
                      <div>Acc No</div>
                      <div>1234678902</div>
                    </div>
                    <div className="dashboard-account-details-info-item">
                      <div>Bank Name</div>
                      <div>SBI</div>
                    </div>
                    <div className="dashboard-account-details-info-item">
                      <div>IFSC code</div>
                      <div>1234678902</div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>


          <div className="right">
            <div className="title-heading">Referrals</div>
            <div className="desktop-dashboard-total-signups">
              <div className="righ-item-title">Total Sign Up's</div>
              <div className="desktop-signup-details">
                <CircularProgressbar value={75} text={`${75}%`}
                  className="circular-progress-mui"
                  strokeWidth={10}
                  styles={{
                    // Customize the text
                    background: {
                      fill: '#E66D57',
                    },
                    color: "#E66D57"
                  }}
                />

                <div>
                  12 people have been joined to the platform
                </div>
              </div>

            </div>
            <div className="desktop-dashboard-goals">
              <div className="righ-item-title">Goals</div>
              <div className="progress-wrapper">
              <progress className="earning-progress-linear" min="0" max="100" value="50"></progress>
              </div>
              <div className="progress-label">
                <div className="progress-start-label-linear">₹ 12,500</div>
                <div className="progress-end-label-linear">₹ 50,000</div>
              </div>
            </div>
            <div className="desktop-dashboard-transactions">
              <div className="righ-item-title">Transactions</div>

              <div className="desktop-transcation-list">
                <TransactionItem/>
                <TransactionItem/>  
       
              </div>
            </div>
          </div>

          <div className="desktop-dashboard-analytics">
            <div className="title-heading">Analytics</div>
            <div className="analytics-bar-chart">
              <BarChart
                xAxis={[{ scaleType: 'band', categoryGapRatio: 0.6, data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }]}
                series={[{ data: [4, 3, 5, 6, 8, 9, 3, 4, 2, 6, 3, 4] }]}
              // width={100}
              // height={100}
              // colors={"black"}
              />
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}
function TransactionItem(){
  return (
    <div className="desktop-transaction-item">
                  <div>
                    <div className="desktop-transaction-title">Commission earned</div>
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

export default DesktopDashboard
