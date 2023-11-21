import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContext from "./Context/AppContext.js"

import { useState } from 'react'
import { useEffect } from 'react'
///register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js")
}

function MainApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState(null);
  const globalData = {
    isLoggedIn,
    setIsLoggedIn,
    uid,
    setUid
  }
  useEffect(()=>{
    if(localStorage.getItem("uid")){
      setUid(localStorage.getItem("uid"))
      setIsLoggedIn(true)
    }
  },[])
  return (
    <AppContext.Provider value={globalData}>
      <App />
    </AppContext.Provider>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <MainApp />
)
