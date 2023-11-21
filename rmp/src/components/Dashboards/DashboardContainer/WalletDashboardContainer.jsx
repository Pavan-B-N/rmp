import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import "./DashboardContainer.css"
function WalletDashboardContainer() {
    return (
        <div className="wallet">
            <div className="wallet-top">
                <h2 className="wallet-title">My Wallet</h2>
                <div className="verticle">
                    <div> Withdraw Now</div>
                    <CreditCardIcon sx={{width:50,height:50}} />
                </div>
            </div>
            <div className="wallet-detail">
                <div className="verticle">
                    <div>Available Amount</div>
                    <div>₹ 0.0</div>
                </div>
                <div className="verticle">
                    <div>Withdrawable Amount</div>
                    <div>₹ 0.0</div>
                </div>
            </div>
        </div>
    )
}

export default WalletDashboardContainer
