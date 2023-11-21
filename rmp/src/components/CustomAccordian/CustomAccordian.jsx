import "./CustomAccordian.css"
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function CustomAccordian({closedTitle,openTitle,children}) {
    const [expanded, setExpanded] =useState(false);
    function handleExpanded(){
      setExpanded(pre=>!pre);
    }
    return (
      <div className="accordian">
        <div className="accordian-summary" onClick={handleExpanded} >
          <div className="title">{expanded ? closedTitle : openTitle}</div> 
          {
            expanded ?
            <ExpandLessIcon  /> :
            <ExpandMoreIcon  />
          }
        </div>
        <div className="accordian-details" style={{display:expanded ? "block" :"none"}}>
            {children}
        </div>
      </div>
    )
}

export default CustomAccordian
