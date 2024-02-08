import React from 'react'
import { useState } from 'react'
import "./styles.scss"
const Switch = ({data}) => {

    const [currentTab, setCurrentTab] = useState(0)
    const [left, setLeft] = useState(0)

    const ActiveTab = (tab, index) => {
        if(window.innerWidth < 768){
            setLeft(index * 60)
        } else{
            setLeft(index * 100)
        }
        setTimeout(() => {
            setCurrentTab(index)
        }, 300);
    }
  return (
    <div className="switchingTabs">
        <div className="container">
            <div className="tabItems">
                {data.map((tab, index) => (
                    <span key={index} className={`tabItem ${currentTab === index ? "active" : ""}`} onClick={() => ActiveTab(tab, index)}>{tab}</span>
                ))}
                <span className="movingBg" style={{left: left}}/>
            </div>
        </div>
    </div>
  )
}

export default Switch
