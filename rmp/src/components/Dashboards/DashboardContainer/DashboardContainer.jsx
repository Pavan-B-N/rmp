import React from 'react'
import "./DashboardContainer.css"
import WalletDashboardContainer from './WalletDashboardContainer';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
function DashboardContainer() {
    return (
        <div className="dashboard-content">
            {
                window.innerWidth <= 900 &&
                <div className="dashboard-menu">
                    {window.innerWidth <= 600 && <MenuIcon sx={{ width: 30, height: 30 }} />}
                    <NotificationsIcon sx={{ width: 30, height: 30, float: "right" }} />
                </div>
            }

            <WalletDashboardContainer />
        </div>
    )
}

export default DashboardContainer
