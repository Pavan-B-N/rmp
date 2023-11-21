import React from 'react'

function NavIcon(props) {
  return (
    <div className="nav-icon">
      <div className="nav-icon-item">{props.item}</div>
      <div>{props.label}</div>
    </div>
  )
}

export default NavIcon
