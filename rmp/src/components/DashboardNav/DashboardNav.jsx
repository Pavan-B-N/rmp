import "./DashboardNav.css"
import Avatar from '@mui/material/Avatar';
import YouTubeIcon from '@mui/icons-material/YouTube';
import NavIcon from "./NavIcon";
function DashboardNav() {
    return (
        <div className="dashboard-nav">
            <Avatar
                alt="Name"
                src="/vite.svg"
                sx={{ width: 150, height: 150 , border: '2px solid white',margin:"10px" }}
            />
            <div className="dashboard-nav-links">
                <NavIcon item={<YouTubeIcon sx={{width:53, height:53}}/>} label="Videos"/>
                <NavIcon item={<YouTubeIcon sx={{width:53, height:53}}/>} label="Home"/>
                <NavIcon item={<YouTubeIcon sx={{width:53, height:53}}/>} label="Home"/>
            <NavIcon item={<YouTubeIcon sx={{width:53, height:53}}/>} label="Home"/>
            </div>
        </div>
    )
}

export default DashboardNav