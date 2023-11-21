import { useEffect, useState, useRef } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./Referrals.css"

import AppTitleBar from "../../Components/AppTitleBar/AppTitleBar";
import ScreenContainer from "../../Components/ScreenContainer/ScreenContainer";

import client from "../../APIs/client"
import { djangoServer } from "../../APIs/client"
import { Skeleton } from "@mui/material";

function CustomAccordian({ title, data, render, count }) {
    const [expanded, setExpanded] = useState(false);
    const dataref = useRef(null);
    let isRendered = false;
    function handleExpanded() {
        setExpanded(pre => !pre);
    }
    useEffect(() => {
        if (!isRendered) {
            if (data.children.length > 0) {
                isRendered = true;
                render(data.children, dataref)
            } else {
                dataref.current.innerHTML = `<div class="no-referrals">No Referrals</div>`
            }
        }
    }, [])
    return (
        <div className="accordian custom-accordian">
            <div className="accordian-summary custom-accordian-summary" onClick={handleExpanded} >
                <div className="title">{title}</div>

                {
                    expanded ?
                        <div className="referrals-container-details">
                            <div className="referrals-count">{count || 0}</div>
                            <div><ExpandLessIcon /></div>
                        </div>
                        :
                        <div className="referrals-container-details">
                            <div className="referrals-count">{count || 0}</div>
                            <div><ExpandMoreIcon /></div>
                        </div>

                }
            </div>
            <div className="accordian-details custom-accordian-detail" ref={dataref} style={{ display: expanded ? "block" : "none" }}>
            </div>
        </div>
    )
}
function Referrals() {
    const [data, setData] = useState(null)
    // const data =
    // {
    //     "id": 1,
    //     "username": "admin",
    //     "mobile_no": "0000000000",
    //     "children": [
    //         {
    //             "id": 2,
    //             "username": "t1",
    //             "mobile_no": "0000000001",
    //             "children": []
    //         },
    //         {
    //             "id": 3,
    //             "username": "t2",
    //             "mobile_no": "0000000002",
    //             "children": [
    //                 {
    //                     "id": 8,
    //                     "username": "t7",
    //                     "mobile_no": "0000000007",
    //                     "children": [
    //                         {
    //                             "id": 12,
    //                             "username": "t11",
    //                             "mobile_no": "0000000011",
    //                             "children": []
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "id": 9,
    //                     "username": "t8",
    //                     "mobile_no": "0000000008",
    //                     "children": []
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 4,
    //             "username": "t3",
    //             "mobile_no": "0000000003",
    //             "children": [
    //                 {
    //                     "id": 7,
    //                     "username": "t6",
    //                     "mobile_no": "0000000006",
    //                     "children": [
    //                         {
    //                             "id": 10,
    //                             "username": "t9",
    //                             "mobile_no": "0000000009",
    //                             "children": []
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     "id": 11,
    //                     "username": "t10",
    //                     "mobile_no": "0000000010",
    //                     "children": [
    //                         {
    //                             "id": 13,
    //                             "username": "t12",
    //                             "mobile_no": "0000000012",
    //                             "children": []
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             "id": 5,
    //             "username": "t4",
    //             "mobile_no": "0000000004",
    //             "children": []
    //         },
    //         {
    //             "id": 6,
    //             "username": "t5",
    //             "mobile_no": "0000000005",
    //             "children": []
    //         },
    //         {
    //             "id": 29,
    //             "username": "9375039573",
    //             "mobile_no": "9375039573",
    //             "children": []
    //         },
    //         {
    //             "id": 30,
    //             "username": "2221222211",
    //             "mobile_no": "2221222211",
    //             "children": []
    //         },
    //         {
    //             "id": 31,
    //             "username": "2221222213",
    //             "mobile_no": "2221222213",
    //             "children": []
    //         }
    //     ]
    // }
    useEffect(() => {
        djangoServer.get("api/users/10/referrals/").then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    function renderNestedList(data) {
        const ul = document.createElement('ul');

        data.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
            <div style="display:flex;justify-content:space-between;">
                <div>${item.username}</div>
                <div style="margin-right:10px;">${item.children.length}</div>
            </div>
            `;

            // if (item.children.length > 0) {
            //     const childUl = renderNestedList(item.children);
            //     li.appendChild(childUl);
            // }

            ul.appendChild(li);
        });

        return ul;
    }
    function render(data, ele) {
        const ul = renderNestedList(data);
        ele.current.appendChild(ul)
    }

    return (
        <div className="referral-page">
            <div className="referral-page-titlebar"><AppTitleBar title="My" hightlightTitle="Referrals" /></div>
            <ScreenContainer overrideClassName={"referral-screen-container"} >
                <div className="referrals-overflow-container">
                    {
                        data ?
                            (
                                data.children.length == 0 ?
                                    <div style={{ textAlign: "center" }}>No Referrals</div>
                                    :
                                    data.children.map(item => {
                                        return <CustomAccordian title={item.username} data={item} count={item.children.length} render={render} key={item.id} />
                                    })
                            )
                            :
                            <div style={{textAlign:"center"}}>
                                loading...
                                {/* <Skeleton variant="rounded" height={40} sx={{ backgroundColor: "white", margin: "5px" }} />
                                <Skeleton variant="rounded" height={40} sx={{ backgroundColor: "white", margin: "5px" }} /> */}
                            </div>
                    }
                </div>
            </ScreenContainer>

            <button className="invite-other-referrals-btn">Invite other friends and earn</button>
        </div>
    )
}

export default Referrals
