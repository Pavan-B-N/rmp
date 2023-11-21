import { Button } from "@mui/material"
import { useEffect, useState } from 'react'
import "./Login.css"
import OtpInput from 'react-otp-input';
import AppTitleBar from "../../Components/AppTitleBar/AppTitleBar"
import { useSearchParams } from 'react-router-dom';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { auth, app } from "../../APIs/app"

import AppContext from "../../Context/AppContext.js"
import { useContext } from "react";

import { djangoServer } from "../../APIs/client.js";


import VerifiedImg from "../../assets/otp-verified.svg"
async function sendUserDetailToDjangoServer(token) {
    const res = await djangoServer.post("/api/auth/users/create/", { "firebase_token": token })
    console.log("user details sent")
    console.log(res.data)
}
function VerifyOTP() {

    const { setUid } = useContext(AppContext)

    const [searchParams] = useSearchParams();

    const [otp, setOtp] = useState('');
    const [isBtnDisabled, setIsBtnDisabled] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');

    const [timer, setTimer] = useState("");
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [isOTPVerified, setOTPVerified] = useState(false);
    useEffect(() => {
        console.log("otp", otp)
        if (otp.length == 6) {
            document.getElementById("verify-otp-btn").focus()
        }
    }, [otp])
    useEffect(() => {
        //invisible captcha
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'resend-button', {
            'size': 'invisible',
            'callback': (response) => {
                console.log(response)
            }
        });
    }, [])
    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${formattedMinutes}:${formattedSeconds}`;
    }

    function startTimer() {
        setIsTimerActive(true)
        let timer = 1 * 10;//10 seconds
        const interval = setInterval(() => {
            timer--;
            setTimer(formatTime(timer));
            if (timer === 0) {
                setIsTimerActive(false)
                clearInterval(interval);
            }
        }, 1000);
        return interval;
    }
    useEffect(() => {
        setPhoneNumber(searchParams.get("phoneNumber"))
        const interval = startTimer();
        return () => clearInterval(interval);//clean up function
    }, [])

    function sendOTP() {
        if (!isTimerActive) {
            const appVerifier = window.recaptchaVerifier;
            const auth = getAuth(app);
            signInWithPhoneNumber(auth, `+91${phoneNumber}`, appVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    // console.log(confirmationResult);
                    console.log("otp sent")
                    setIsTimerActive(true)
                }).catch((error) => {
                    console.log(error)
                });
        } else {
            alert("wait for 15 min")
        }
    }


    useEffect(() => {
        if (otp.length == 6) {
            setIsBtnDisabled(false)
        } else {
            setIsBtnDisabled(true)
        }
    }, [otp])

    function verifyOTP() {
        confirmationResult.confirm(otp).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log("user :", user)
            // console.log("uid",result.user.uid)
            setUid(result.user.uid)
            localStorage.setItem("uid", result.user.uid)
            setOTPVerified(true)
            console.log("accessToken : ", user.accessToken);
            sendUserDetailToDjangoServer(user.accessToken)
            // ...
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
            alert("Invalid otp")
            console.log(error)
            alert(error.message)

        });
    }
    return (
        <div className="verify-page">
            <AppTitleBar />
            <div className="verify-form">
                <div className="title-msg">Enter <span className="msg-highlight">verification code</span></div  >
                <div className="verify-top-desc-msg" >we have sent a verification code to</div>
                <div className="verification-number">+91 {phoneNumber} <a href="/login">Edit number</a> </div>
                <div className="otp-container">
                    <OtpInput
                        inputStyle={{ width: "100%", padding: "7px", fontSize: "1.2rem", margin: "3px", borderRadius: "5px", background: "#454545", color: "white", }}
                        // sx={{ width: "100%" }}
                        // inputStyle={{  }}
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        placeholder=""
                        // renderSeparator={<span> - </span>}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>
                <div className="resent-top-btn">
                    {
                        !isTimerActive ?
                            <Button variant="text" onClick={sendOTP} id="resend-button" >Resend OTP </Button>
                            :
                            <div>Resend OTP in {timer}</div>
                    }
                </div>

                {
                    !isOTPVerified ?
                        <button className="bottom-btn" id="verify-otp-btn" disabled={isBtnDisabled} onClick={verifyOTP}>Verify</button>
                        :
                        <div className="otp-verified">
                            <div>Your OTP has been</div>
                            <div className="verified msg-highlight">Verified</div>
                            <img src={VerifiedImg} alt="" />
                            <button className="bottom-btn" onClick={() => { }}>Continue</button>
                        </div>
                }


            </div>
        </div>
    )
}

export default VerifyOTP
