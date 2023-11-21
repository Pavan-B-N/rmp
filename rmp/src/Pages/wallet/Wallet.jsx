import "./Wallet.css"
import AppTitleBar from '../../components/AppTitleBar/AppTitleBar'
import WalletIcon from '@mui/icons-material/Wallet';
import ScreenContainer from "../../components/ScreenContainer/ScreenContainer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomAccordian from "../../components/CustomAccordian/CustomAccordian";
import pauseCircle from "../../assets/pause-circle.svg"
import checkCircle from "../../assets/check-circle.svg"
function Wallet() {
  return (
    <div className="wallet-details-page">
      <div className="wallet-nav-title"><AppTitleBar title="My" hightlightTitle={"Wallet"} /></div>

      <div className="wallet-template">
        <WalletIcon className="wallet-icon" />
        <div>Available Balance</div>
        <div className="wallet-available-amount">₹ 20,0000 /-</div>
        <div>Pending amount</div>
        <div className="wallet-pending-amount">₹ 10,0000</div>
      </div>

      <ScreenContainer overrideClassName="wallet-screen-container">
        <div className="app-subtitle">My Transactions</div>
        <CustomAccordian openTitle={"Penidng amount"} closedTitle={"Penidng amount"} >
          <WalletTransactionItem amount="+500" name="Hemanth" date="18-10-23" />
        </CustomAccordian>
        
        <CustomAccordian openTitle={"Completed"} closedTitle={"Completed"} >
        <WalletTransactionItem amount="+500" name="Hemanth" date="18-10-23" type="completed" />
        </CustomAccordian>
        {/* <TransactionDetail transactionTitle="Penidng amount" />
        <TransactionDetail transactionTitle="Completed" /> */}

        <button className="bottom-btn">Withdraw</button>
      </ScreenContainer>

    </div>
  )
}
function WalletTransactionItem({ amount, name, date,type }) {
  return(
    <div className="wallet-transaction-item">
    <div className="wallet-transaction-detail">
      <img src={type==="completed" ? checkCircle :pauseCircle} alt="" />
      <div >
        <div className="wallet-transaction-item-name">{name}</div>
        <div className="wallet-transaction-item-date">{date}</div>
      </div>
    </div>
    <div className={type==="completed" && `wallet-transaction-item-amount-success`}>{amount}</div>
  </div>
  )
}
function TransactionDetail({ transactionTitle }) {
  return (
    <div className="transaction-div">
      <div className="transaction-div-title">{transactionTitle}</div>
      <KeyboardArrowDownIcon className="transaction-div-action" />
    </div>
  )
}
export default Wallet
