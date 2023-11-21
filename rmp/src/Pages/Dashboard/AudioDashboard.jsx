import "./Dashboard.css"
import DashboardNav from '../../components/DashboardNav/DashboardNav'
import Notifications from '../../components/Notifications/Notifications'
import AudioDashboardContainer from "../../components/Dashboards/AudioDashboardConatiner/AudioDashboardContainer"
function AudioDashboard() {
  return (
    <div className='dashboard'>
      <DashboardNav/>
      <AudioDashboardContainer/>
      <Notifications/>
    </div>
  )
}

export default AudioDashboard
