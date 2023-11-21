import "./Dashboard.css"
import DashboardNav from '../../components/DashboardNav/DashboardNav'
import Notifications from '../../components/Notifications/Notifications'
import DashboardContainer from "../../components/Dashboards/DashboardContainer/DashboardContainer"
function Dashboard() {
  return (
    <div className='dashboard'>
      <DashboardNav/>
      <DashboardContainer/>
      <Notifications/>
    </div>
  )
}

export default Dashboard
