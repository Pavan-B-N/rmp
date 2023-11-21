import React from 'react'
import "./DesktopLogin.css"
import backgroundIMG from "../../assets/desktop-login-background.png"
import Login from "../Login/Login"
import PersonImg from "../../assets/person-img.png"
function DesktopLogin() {
    return (
        <div style={{ background: `url(${backgroundIMG})` }} className="desktop-login-container" >
            <div className="app-brand">
                <img src={PersonImg} alt="" />
                <div className="info">
                    <div className="app-name">Rapid Mind Power</div>
                    <div className='author'>- Wilfred Stanley</div>
                </div>
            </div>
            <div className="desktop-login-form">
                <Login />
            </div>
        </div>
    )
}

export default DesktopLogin
