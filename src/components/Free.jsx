import React from 'react'
import  icon from "../assets/icon.png"
import  super1 from "../assets/super1.png"
import  release2 from "../assets/release2.png"

import Card from './Card'
export default function Free() {
  return (
    <div className='free'>
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="contect"> 
            <div className="image"> 
              <img src={icon} alt="" />
            </div>
            <h2 className='title'>Free NFT for early birds</h2>
            <p className='description'>
              Sign up today and you'll get a free NFT when we launch
            </p>
          </div>
      </div>
      <div className="cards">
          <div className="card1">
            <Card
            image={super1}
            series="Floop series"
              title="pure man"
              price={2.99}
              tag={12983}
              time={1}
               
            />
          </div>
          <div className="card2"> 
          <Card
            image={release2}
            series="Floop series"
              title="pure man"
              price={2.99}
              tag={12983}
              time={1}
               
            />
           </div>
        </div>
    </div>
  )
}
