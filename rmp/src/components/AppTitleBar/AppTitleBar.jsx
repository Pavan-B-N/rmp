import "./AppTitleBar.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AppTitleBar({ title,hightlightTitle }) {
    function goback(){
        window.history.back();
    }
    return (
        <div className="screen-title-bar">
            <div className="title-bar-back-icon"><button onClick={goback}><ArrowBackIcon/></button></div>
            <h2 className="title-bar-text" >{title} <span className="hightlightTitle">{hightlightTitle}</span></h2>
        </div>
    )
}

export default AppTitleBar
