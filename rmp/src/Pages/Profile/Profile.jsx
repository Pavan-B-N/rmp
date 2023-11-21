import "./Profile.css"
import React, { useEffect, useState } from 'react'
import { Avatar } from "@mui/material"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ErrorIcon from '@mui/icons-material/Error';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AppTitleBar from "../../components/AppTitleBar/AppTitleBar";
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";

import CheckCircle from "../../assets/check-decagram.svg"


import { readDoc } from "../../APIs/firebaseAPI's";

import AppContext from "../../Context/AppContext.js"
import { useContext } from "react";
function Profile() {
    //usefull for fetching
    const { uid } = useContext(AppContext);

    const [isBankAccount, setisBankAccount] = useState(false);
    const [isAadharSetup, setisAadharSetup] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    async function getDetails() {
        try {
            const res = await readDoc("users", uid);
            console.log(res)
            setName(res.name);
            setEmail(res.email);
            setisBankAccount(res.bankaccount == "true");
            setisAadharSetup(res.aadharsetup == "true");

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (uid) {
            getDetails()
        }
    }, [uid])

    return (
        <div className="profile-page">
            <div className="profile-title"><AppTitleBar title="My " hightlightTitle={"Profile"} /> </div>
            <ScreenContainer overrideClassName="profile-container">
                <div className="avatar-shadow">
                    <Avatar sx={{ height: " 60px", width: "60px", background: "#879EFD", fontWeight: "bold", fontSize: "30px" }} 
                    className="profile-avatar"
                    >H</Avatar>
                </div>
                <h2 className="side-title">My Details</h2>
                <div className="profile-detail">
                    <div>
                        <b>Name: </b>{name}
                    </div>
                    <div>
                        <b>Email: </b>{email}
                    </div>

                </div>
                <h2 className="side-title">My KYC</h2>
                <div className="profile-kyc">
                    <div className="left">
                        <AccountBalanceIcon />
                        <h3>Bank Account</h3>
                    </div>
                    <div className="right">
                        {
                            isBankAccount ?
                                <img src={CheckCircle} alt="check-circle" /> :
                                <ErrorIcon sx={{ color: "red" }} />
                        }
                        <NavigateNextIcon />

                    </div>
                </div>

                <div className="profile-kyc">
                    <div className="left">
                        <AccountBalanceIcon />
                        <h3>Aadhar Setup</h3>
                    </div>
                    <div className="right">
                        {
                            isAadharSetup ?
                                <img src={CheckCircle} alt="check-circle" /> :
                                <ErrorIcon sx={{ color: "red" }} />
                        }
                        <NavigateNextIcon />
                    </div>
                </div>
            </ScreenContainer>
        </div>
    )
}

export default Profile
