import { Avatar } from "@mui/material"
import { Link } from "react-router-dom"
import "./Earnings.css"

import PersonIcon from '@mui/icons-material/Person';
import WalletIcon from '@mui/icons-material/Wallet';
import ShareIcon from '@mui/icons-material/Share';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import CustomAccordian from "../../components/CustomAccordian/CustomAccordian";
// import medalLogo from "../../assets/medal-outline.jpg"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


//circular bar
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';

import ellipse from "../../assets/Ellipse.svg"
import accountGroup from "../../assets/account-group.svg"
import poll from "../../assets/poll.svg"

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';




function Earnings() {
  return (
    <div className="earningss-page">
      <div className="earnings-welcome-msg">
        <Avatar sx={{ width: 40, height: 40, marginRight: "20px" }} />
        <div>Welcome <span className="hightlightTitle">Hemanth</span></div>
      </div>
      <ScreenContainer overrideClassName={"earnings-page-conatiner"}>
        <div className="earnings-overflow-container">

          <EarningCard />

          <div className="quick-shortcuts-title">Quick Shortcuts</div>
          <div className="earning-actions">
            <Link to="/profile">
              <div className="earning-action-item">
                <PersonIcon />
                <div>Profile</div>
              </div>
            </Link>

            <Link to="/wallet">
              <div className="earning-action-item">
                <WalletIcon />
                <div>Wallet</div>
              </div>
            </Link>

            <Link to="/audio-books">
              <div className="earning-action-item">
                <ShareIcon />
                <div>Share</div>
              </div>
            </Link>


            <Link to="/referrals">
              <div className="earning-action-item">
                <AccountTreeIcon />
                <div>Referrals</div>
              </div>
            </Link>
          </div>

          {/* <h2 className="my-earnings-title">My Earnings</h2>

          <EarningDetail title={"November Earnings"} amount={"2,314"} />
          <EarningDetail title={"Total Earnings"} amount={"2,314"} /> */}

          <div className="earnings-page-leader-container">
            <Link to="/leaderboard" className="link-to-text">
              <div className="earnings-page-leader-title">
                {/* <img src={medalLogo} className="earnings-page-leader-img" /> */}
                <WorkspacePremiumIcon />
                <div className="title" >Leaderboard</div>
              </div>
            </Link>

            <div className="carousel">
              <Carousel
                // autoPlay={true}
                // interval={3000}
                infiniteLoop={true}
                showArrows={false}
                showThumbs={false}
                showIndicators={false}
                swipeable={true}
                showStatus={false}
                emulateTouch={true}
              >
                <CarouselItem title={"Total Purchases"} imgSrc={ellipse} href="" count={25} countDesc={"People Purchased"} value1={35} value2={70} />
                <CarouselItem title={"Total Referrals"} imgSrc={accountGroup} href="/referrals" count={56} countDesc={"People Referred"} value1={35} value2={70} />
                <AnalyticsBar title={"Analytics"} imgSrc={poll} href="/leaderboard" />
              </Carousel>
            </div>
            {/* <CustomAccordian openTitle={"View All Analytics"} closedTitle="Dismiss all analytics">
              <LeaderboardDetail />

            </CustomAccordian> */}


          </div>
        </div>



      </ScreenContainer>
    </div>
  )
}
function AnalyticsBar({ imgSrc, title, href }) {
  const data = [
    { name: 'Category 1', value: 300 },
    { name: 'Category 2', value: 500 },
  ];
  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="carasouel-container">
      <div className="carasouel-title">
        <div className="carasouel-title-desc">
          <img src={imgSrc} alt="" className="carasouel-img" />
          <div>{title}</div>
        </div>
        <Link to={href} className="view-btn" >View</Link>
      </div>

      <div className="carasouel-content carasouel-content-bar ">
        <BarChart
          xAxis={[{ scaleType: 'band', categoryGapRatio: 0.6, data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }]}
          series={[{ data: [4, 3, 5, 6, 8, 9, 3, 4, 2, 6, 3, 4] }]}
          width={500}
          height={200}
          colors={"black"}

        />
      </div>
    </div>
  )
}
function CarouselItem({ imgSrc, title, href, count, countDesc, value1, value2 }) {
  const data = [
    { name: 'Category 1', value: 300 },
    { name: 'Category 2', value: 500 },
  ];
  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="carasouel-container">
      <div className="carasouel-title">
        <div className="carasouel-title-desc">
          <img src={imgSrc} alt="" className="carasouel-img" />
          <div>{title}</div>
        </div>
        <Link to={href} className="view-btn" >View</Link>
      </div>
      
      <div className="carasouel-content">
        <div className="carasouel-details">
          <div className="people-counter">{count}</div>
          <div>{countDesc}</div>
        </div>
        <div className="pie">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: value1, color: "#9D98AD" },
                  { id: 1, value: value2, color: "#756AD4" },
                ],
              },
            ]}
            width={200}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}
function LeaderboardDetail() {
  return (
    <div className="leaderboard-details-container">
      <TotalPuchases />
      <Analytics />
      <TotalSignUps />
    </div>
  )
}
function Analytics() {
  return (
    <div className="analytics">
      <div className="analytics-title">Analytics</div>
      <div className="analytics-details">
        <div className="analytics-detail-item">
          <div className="analytics-month">Jan</div>
          <div className="analytics-amount">₹ 2,000</div>
        </div>
        <div className="analytics-detail-item">
          <div className="analytics-month">Jan</div>
          <div className="analytics-amount">₹ 2,000</div>
        </div>
        <div className="analytics-detail-item">
          <div className="analytics-month">Jan</div>
          <div className="analytics-amount">₹ 2,000</div>
        </div>
        <div className="analytics-detail-item">
          <div className="analytics-month">Jan</div>
          <div className="analytics-amount">₹ 2,000</div>
        </div>
      </div>
    </div>
  )
}
function TotalSignUps() {
  return (
    <div className="total-sign-ups">
      <div className="total-sign-up-title">
        Total Sign up's
      </div>
      <div className="signup-progress">

        <CircularProgressbar value={75} text={`${50}%`}
          className="circular-progress-mui"
          strokeWidth={4}
          styles={{
            // Customize the text
            background: {
              fill: '#3e98c7',
            },
          }}
        />
        {/* <CircularProgress value={25} /> */}
      </div>

      <div className="signup-summary">
        <div className="signed-up-indicator"></div>
        <div>Signed up</div>
      </div>
      <div className="signup-summary">
        <div className="referer-indicator"></div>
        <div>Total referred</div>
      </div>

    </div>
  )
}

function TotalPuchases() {
  return (
    <div className="total-purchases">
      <div className="title">Total Purchases</div>
      <div className="people-puchased">
        <div className="people-purchased-number">25</div>
        <div className="people-puchased-msg">People <br /> Puchased</div>
      </div>
      <div className="commission-title">Commision Earned</div>
      <div className="commission-amount">₹ 12,500.00</div>
    </div>
  )
}
function EarningCard() {
  return (
    <div className="earning-page-card">
      <div className="earning-page-details">
        {/* <div className="earnings-count">27</div> */}
        <div className="detail">
          <div className="detail-title">Total Earnings</div>
          <div className="detail-amount">₹ 12,500</div>
        </div>
      </div>
      <hr className="earning-card-divider" />
      <div className="earnings-progress-container">
        <progress className="earning-progress" min="0" max="100" value="50"></progress>
        <div className="progress-label">
          <div className="progress-start-label">₹ 12,500</div>
          <div className="progress-end-label">₹ 50,000</div>
        </div>
      </div>
    </div>
  )
}
function EarningDetail({ title, amount }) {
  return (
    <div className="earnings-deatil">
      <div>
        <div className="earning-item-title">{title}</div>
        <div className="earning-amount">₹ {amount}</div>
      </div>
      <ArrowUpwardIcon className="arrow-up-icon" />
    </div>
  );
}

export default Earnings
