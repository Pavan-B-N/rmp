import "./LeaderBoard.css"
import AppTitleBar from "../../Components/AppTitleBar/AppTitleBar"
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer"
import { Avatar } from "@mui/material"
function LeaderBoard() {
    return (
        <div className="LeaderBoard-page">
            <div className="leaderboard-title"><AppTitleBar title={"My"} hightlightTitle={"Leaderboard"} /></div>
            <div className="leaderboard-level-conatiner">
                <div className="leadership-month">
                    <div className="selected-leadership-month">This Month</div>
                    <div>Overall</div>
                </div>
                <div className="leadership-badge">
                    
                    <div className="badge badge2">
                        <div className="avatar-shadow">
                            <Avatar sx={{ height: " 40px", width: "40px", background: "#C0C0C0", fontWeight: "bold", fontSize: "25px" }}
                                 className="badge-img"
                            >A</Avatar>
                        </div>
                        <div className="badge-score">40,000</div>
                    </div>
                    <div className="badge badge1">
                    <div className="avatar-shadow">
                            <Avatar sx={{ height: " 40px", width: "40px", background: "#FFD700", fontWeight: "bold", fontSize: "25px" }}
                                 className="badge-img"
                            >H</Avatar>
                        </div>
                        <div className="badge-score">40,000</div>
                    </div>

                    <div className="badge badge3">
                    <div className="avatar-shadow">
                            <Avatar sx={{ height: " 40px", width: "40px", background: "#C18454", fontWeight: "bold", fontSize: "25px" }}
                                 className="badge-img"
                            >Y</Avatar>
                        </div>
                        <div className="badge-score">40,000</div>
                    </div>
                </div>

            </div>
            <ScreenContainer overrideClassName={"leaderboard-details"}>
                <div className="leadership-details-scrollable">
                    <LederShipDetail level="3" amt="2500" />
                    <LederShipDetail level="3" amt="2500" />
                    <LederShipDetail level="3" amt="2500" />
                    <LederShipDetail level="3" amt="2500" />
                    <LederShipDetail level="3" amt="2500" />
                    <LederShipDetail level="3" amt="2500" />
                    <LederShipDetail level="3" amt="2500" />
                    <LederShipDetail level="3" amt="2500" />
                    <LederShipDetail level="3" amt="2500" />
                </div>

            </ScreenContainer>
        </div>
    )
}
function LederShipDetail({ level, src, amt }) {
    return (
        <div className="leadership-detail">
            <div className="leadership-user">
                <div>{level}</div>
                <Avatar sx={{ height: "40px", width: "40px", backgroundColor: "#4D5A89" }} />
            </div>
            <div>₹ {amt}</div>
        </div>
    )
}

export default LeaderBoard
