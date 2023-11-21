
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import AudioDashboard from './Pages/Dashboard/AudioDashboard'
import Login from './Pages/Login/Login'
import VerifyOTP from './Pages/Login/VerifyOTP'
import Earnings from './Pages/Earnings/Earnings'
import Profile from './Pages/Profile/Profile'
import BankDetail from './Pages/BankDetail/BankDetail'
import Wallet from './Pages/wallet/Wallet'
import AudioBooks from './Pages/AudioBooks/AudioBooks'
import AdharDetail from './Pages/AdharDetail/AdharDetail'
import LeaderBoard from './Pages/LeaderBoard/LeaderBoard'
import Referrals from './Pages/Referrals/Referrals'
import Settings from './Pages/Settings/Settings'
import DesktopLogin from './Pages/DesktopLogin/DesktopLogin'
import DesktopVerifyOTP from './Pages/DesktopLogin/DesktopVerifyOTP'
import DesktopDashboardHome from './Pages/DesktopDashboard/DesktopDashboardHome'
import DesktopDashboardWallet from './Pages/DesktopDashboard/DesktopDashboardWallet'
import DesktopDashboardShare from './Pages/DesktopDashboard/DesktopDashboardShare'
import DesktopDashboardLeaderBoard from './Pages/DesktopDashboard/DesktopDashboardLeaderBoard'
function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: true,
      },
      "google_translate_element"
    );

    //translate page to selected language
    const languageDropdown = document.querySelector(".goog-te-combo");
    setTimeout(() => {
      if (languageDropdown) {
        const lang = localStorage.getItem("language")
        console.log("translating to ", lang)

        languageDropdown.value = lang;
        console.log(languageDropdown.value)
        // Dispatch a "change" event to trigger the language change
        const changeEvent = new Event("change", { bubbles: true });
        languageDropdown.dispatchEvent(changeEvent);
        console.log("event dispatched")
      }
      else {
        console.log("language dropdown not found")
      }
    }, 1000)

    // custom implementation
    // listen for changes in the lanuage dropdown
    // const observer = new MutationObserver(() => {
    //   console.log("observer called")
    //   const selectedLanguage = document.querySelector(".goog-te-combo").value;
    //   console.log("Language changed to: " + selectedLanguage);
    //   localStorage.setItem("language", selectedLanguage)
    //   // You can perform any action you want with the new language here
    // });
    // if (languageDropdown) {
    //   observer.observe(languageDropdown, { childList: true });
    // }

  };

  useEffect(() => {
    const appLang = localStorage.getItem("language")
    if (!appLang) {
      console.log("App language not set, setting to english")
      localStorage.setItem("language", "en")
    } else if (appLang === "en") {
      console.log("default language is english")
      return;
    }
    console.log("importing google translator script")
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <>
      <Router>
        {/* <div style={{ display: "none" }}> */}
        <div id="google_translate_element" hidden ></div>
        {/* </div> */}
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 

          <Route path="/desktop-login" element={<DesktopLogin />} /> 
          <Route path="/desktop-verify-otp" element={<DesktopVerifyOTP />} /> 
          <Route path="/desktop-dashboard-home" element={<DesktopDashboardHome />} />  
          <Route path="/desktop-dashboard-wallet" element={<DesktopDashboardWallet />} />  
          <Route path="/desktop-dashboard-share" element={<DesktopDashboardShare />} />  
          <Route path="/desktop-dashboard-leaderboard" element={<DesktopDashboardLeaderBoard />} />  


          <Route path="/login/verifyOTP" element={<VerifyOTP />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bank-detail" element={<BankDetail />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/audio-books" element={<AudioBooks />} />
          <Route path="/aadhar-details" element={<AdharDetail />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/audio" element={<AudioDashboard />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
