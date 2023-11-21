import "./AudioBooks.css"
import { useState, useEffect } from 'react'
import AppTitleBar from '../../Components/AppTitleBar/AppTitleBar'
import ScreenContainer from '../../Components/ScreenContainer/ScreenContainer'
import audioBookImg from "../../assets/audio-book-item.jpeg"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShareIcon from "../../assets/share-icons.svg"

import { readDoc } from "../../APIs/firebaseAPI's";

import AppContext from "../../Context/AppContext.js"
import { useContext } from "react";
function AudioBooks() {
  //usefull for fetching
  const { uid } = useContext(AppContext);
  const [audioBooks, setAudioBooks] = useState([]);

  async function getDetails() {
    try {
      const res = await readDoc("premium-audio-files", uid);
      console.log(res)
      setAudioBooks(res.files);


    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDetails()
  }, [])

  return (
    <div className="audiobooks-page">
      <div className="audio-nav-title"><AppTitleBar title="My" hightlightTitle={"Audio Books"} /></div>
      <ScreenContainer overrideClassName={"audio-book-container"}>
        <div className="audio-books-scroller">
          {
            audioBooks.map((item, index) => {
              return (
                <AudioAccordion
                  key={index}
                  imgsrc={item.thumbnail}
                  title={item.title}
                  desc={item.desc}
                  commission={item.commission}
                  price={item.price}
                />
              )
            })
          }
        </div>
      </ScreenContainer>
    </div>
  )
}


function AudioAccordion({ imgsrc, title, desc, commission, price }) {
  const [expanded, setExpanded] = useState(false);
  function handleExpanded() {
    setExpanded(pre => !pre);
  }
  return (
    <div className="audio-book-item-container">
      <div className="audio-book-item" onClick={handleExpanded}>
        <img src={imgsrc} alt="" className="audio-book-img" />
        <div className="audio-book-detail">
          <div className="audio-book-title">{title}</div>
          <p className="audio-book-desc">{desc}</p>
          <div className="audio-book-price-conatiner">
            <div className="audio-price">
              <div className="audio-price-amt">₹ {price}</div>
              <div className="audio-price-label">Price</div>
            </div>
            {
              expanded ?
                <KeyboardArrowUpIcon />
                :
                <KeyboardArrowDownIcon />
            }
          </div>
        </div>
      </div>
      <div className="book-item-commision-container" style={{ display: expanded ? "flex" : "none" }}>
        <div>Commision - <span className="book-item-commision-amt">₹ {commission}</span></div>
        <img src={ShareIcon} alt="shr-icon" />
      </div>
    </div>
  )
}

export default AudioBooks
