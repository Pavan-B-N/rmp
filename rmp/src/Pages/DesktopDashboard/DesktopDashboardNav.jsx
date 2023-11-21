import React from 'react'
import { Avatar} from "@mui/material"
import { Link } from 'react-router-dom'
import home from "../../assets/Home.svg"
import wallet from "../../assets/Account balance wallet.svg"
import share from "../../assets/Share.svg"
import referrals from "../../assets/family-tree.svg"
import leaderboard from "../../assets/medal-outline.svg"
function DesktopDashboardNav({activePage}) {

    return (
        <div className="desktop-dashboard-nav">
            <div className="nav-title">RMP - Distributor</div>
            <hr className="divider" />
            <div className="main-menu">
                <div className="menu-title">Main Menu</div>
                <NavItem iconSrc={home} title="Home" link="/desktop-dashboard-home" className={`${activePage==="home" && "active-page"}`}  />
                <NavItem iconSrc={wallet} title="Wallet" link="/desktop-dashboard-wallet" className={`${activePage==="wallet" && "active-page"}`}  />
                <NavItem iconSrc={share} title="Share" link="/desktop-dashboard-share" className={`${activePage==="share" && "active-page"}`}  />
                <NavItem iconSrc={referrals} title="Referrals" link="/referrals" className={`${activePage==="referrals" && "active-page"}`}  />
                <NavItem iconSrc={leaderboard} title="Leaderboard" link="/desktop-dashboard-leaderboard" className={`${activePage==="leaderboard" && "active-page"}`}  />
            </div>

            <div className="peoples">
                <div className="menu-title">Peoples</div>
                <PeopleItem name="Rahul" email="rahul@gmail.com" />
            </div>
        </div>
    )
}
function NavItem({ iconSrc, title, link ,className}) {
    return (
        <Link to={link}>
            <div className={`nav-item ${className}`}>
                <img src={iconSrc} alt="" />
                <div>{title}</div>
            </div>
        </Link>
    )
}
function PeopleItem({name,email}){
    return (
        <div className="people-item">
            <Avatar
            sx={{ height: " 40px", width: "40px", background: "#4A578B", fontWeight: "bold", fontSize: "25px" }}
            >{name[0]}</Avatar>
            <div className="detail">
                <div className="name">{name}</div>
                <div className="email">{email}</div>
            </div>
        </div>
    )
}
export default DesktopDashboardNav
