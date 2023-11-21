import "./Settings.css"
import AppTitleBar from '../../Components/AppTitleBar/AppTitleBar'
import { useEffect } from "react";

function Settings() {
    function handleLanguageChange(e){
        const lang=e.target.value
        if(lang==="null") return    
        localStorage.setItem("language", lang)
    }

    return (
        <div className="settings-page">
            <div className="settings-title"><AppTitleBar title="Settings " /> </div>

            <div className="google-translate-container">
                <div className="side-title">Choose Your Language</div>
                <select name="" id="google-translater" onChange={handleLanguageChange} defaultValue="null">
                    <option value="null" disabled selected >choose your language</option>
                    <option value="en">English</option>
                    <option value="kn">Kannada</option>
                    <option value="hi">Hindi</option>
                    <option value="ta">Tamil</option>
                    <option value="te">English</option>
                    <option value="ml">Malyalam</option>
                </select>
            </div>
            <button className="bottom-btn" onClick={()=>window.location.replace("/")}>Save</button>
        </div>
    )
}

export default Settings
