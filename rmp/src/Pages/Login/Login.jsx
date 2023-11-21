import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./Login.css"

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, app } from "../../APIs/app"
import { TextField,IconButton } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import CancelIcon from '@mui/icons-material/Cancel';

function Login() {
    const navigate = useNavigate()
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isbtnDisabled, setIsbtnDisabled] = useState(true);

    useEffect(() => {
        if (phoneNumber.length == 10) {
            setIsbtnDisabled(false)
        } else {
            setIsbtnDisabled(true)
        }
    }, [phoneNumber])

    useEffect(() => {
        //invisible captcha
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // console.log(response)
            }
        });
    }, [])

    function sendOTP() {
        const appVerifier = window.recaptchaVerifier;
        const auth = getAuth(app);
        signInWithPhoneNumber(auth, `+91${phoneNumber}`, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                // console.log(confirmationResult);
                console.log("success")
                navigate(`/login/verifyOTP?phoneNumber=${phoneNumber}`)
            }).catch((error) => {
                console.log(error)
                alert(error.message)
            });
    }
    return (
        <div className="login-page desktop-login-page">
            <div className="login-welcome-msg">Welcome to
                <div className="login-page-app-title">Rapid Mind Power</div>
            </div>
            <div className="login-from">
                <div className="field-info">To continue, <span className="enter-phone-msg">Enter <span className="msg-highlight">Phone Number</span></span></div>
                <TextField
                 label="Phone Number"
                 placeholder="Enter phone number"
                 focused
                 type='tel'
                 pattern="[0-9]{10}"
                 inputMode="numeric"
                 className='input-text-field'
                 value={phoneNumber}
                 onChange={(e) =>{
                    setPhoneNumber(e.target.value)
                 }} 
                 sx={{margin:"25px 0"}}
                 InputProps={{
                    style: { color: 'white' },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                         onClick={() => {
                            setPhoneNumber("")
                         }}
                        >
                        <CancelIcon
                        sx={{color:"white"}}
                        />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <button className="bottom-btn" id="sign-in-button" disabled={isbtnDisabled} onClick={sendOTP}>Verify</button>
            </div>
        </div>
    )
}

export default Login
