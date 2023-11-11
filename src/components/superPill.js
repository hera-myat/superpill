import React from 'react';
import Card from 'react-bootstrap/Card';
import "./superPill.css"
import SUPer_Pill from '../SUPer_PILL.gif'

//superpill or AstroFuel?
export const superPill = () => {
    return(
        <div className="pillCard">
        <br></br>
            <h1> 🌟 The Ultimate NutriVibe Super Pill! 🌟 </h1>

            <Card>
            <Card.Img src={SUPer_Pill} alt="Card image" />
              <Card.Text>
              Unlock the full potential of your well-being with a single, 
              powerful capsule packed with a curated blend of essential nutrients. 
              Our Super Pill is meticulously crafted to provide your body 
              with everything it needs to thrive, 
              ensuring you feel your absolute best every day.
              </Card.Text>
          </Card>
          <br></br>
        </div>
    )
}