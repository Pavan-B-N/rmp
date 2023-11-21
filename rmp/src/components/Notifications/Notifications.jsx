import NotificationItem from "./NotificationItem"
import "./Notifications.css"
import NotificationsIcon from '@mui/icons-material/Notifications';

function Notifications() {
  return (
    <div className="dashboard-notifications">
      <div className="notification-header"><NotificationsIcon/> Notifications</div>
      <NotificationItem title="title" desc="description"  />
      <NotificationItem title="title" desc="description"  />
      <NotificationItem title="title" desc="description"  />
    </div>
  )
}

export default Notifications
