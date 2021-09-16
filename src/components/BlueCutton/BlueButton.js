import React from 'react'
import './btn.css'

function BlueButton(props) {
    return (
        <button style={{ backgroundColor:`${props.color}`, color:`${props.textColor} `}} className="main-btn">{ props.text }</button>
    )
}

export default BlueButton
