import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
function NotificationItem(props) {
    return (
        <div className="notification-item">
            <div className="notification-detail">
                <div className="notification-title">{props.title}</div>
                <div>{props.desc}</div>
            </div>
            <div className="notification-actions">
                <CloseIcon/>
            </div>
        </div>
    )
}

export default NotificationItem
