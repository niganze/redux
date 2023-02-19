import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import {FcBusinessContact} from 'react-icons/fc'
import {GiProgression} from 'react-icons/gi'
function DashboardHome() {
  return (
    <div>

     <div className="semiheader">
        <div className="simiheader1">
          <h2> Admin Dashboard</h2>
        </div>
        <div className="report">
          <button>Download the report</button>
        </div>
       </div>

       <div className="dashboardcards">
        <div className="cards">
          <div className='cardbi'>
            <FcBusinessContact/>
            <p>30%</p>
            <span>people for us </span>
            </div>
            <div className='circle'>
              <GiProgression/>
              <p>+16%</p>
              <span>level</span>
              </div>
        </div>
        <div className="cards">
        <div className='cardbi'>
            <FcBusinessContact/>
            <p>30%</p>
            <span>post traing </span>
            </div>
            <div className='circle'>
              <GiProgression/>
              <p>+20%</p>
              <span>level</span>
              </div>
        </div>
        <div className="cards">
        <div className='cardbi'>
            <FcBusinessContact/>
            <p>89%</p>
            <span>Likes </span>
            </div>
            <div className='circle'>
              <GiProgression/>
              <p>+16%</p>
              <span>level</span>
              </div>
        </div>
        <div className="cards">
        <div className='cardbi'>
            <FcBusinessContact/>
            <p>30%</p>
            <span>all blog </span>
            </div>
            <div className='circle'>
              <GiProgression/>
              <p>+16%</p>
              <span>level</span>
              </div>
        </div>

       </div>
     
        <div className="bigcards">
          <div className="semicard">
            ytyu
          </div>
          <div className="smallestcards">fff</div>
        </div>


    <div className="cardsy">
      <div className="card3r">
        gggggg
      </div>
      <div className="alain">ggg</div>
      <div className="alain">gggg</div>
    </div>
    </div>
  )
}

export default DashboardHome