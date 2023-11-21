import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <div>
      <Link to="/login">Login</Link><br />
      <Link to="/login/verifyOTP">verifyOTP</Link><br />
      <Link to="/earnings">earnings</Link><br />
      <Link to="/Profile">Profile</Link><br />
      <Link to="/bank-detail">bank-detail</Link><br />
      <Link to="/aadhar-details">aadhar-details</Link><br />
      <Link to="/wallet">wallet</Link><br />
      <Link to="/audio-books">audio-books</Link><br />
      <Link to="/leaderboard">leaderboard</Link><br />
      <Link to="/referrals">referrals</Link><br />
      <Link to="/dashboard">dashboard</Link><br />
      <Link to="/settings">settings</Link><br />

      <br /><br />
      <Link to="/desktop-login">desktop-login</Link><br />
    </div>
  )
}

export default Home
