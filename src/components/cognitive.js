import React from 'react';
import Card from 'react-bootstrap/Card';
import "./cognitive.css"
import Cognitive from '../Cognitive.gif'

//superpill or AstroFuel?
export const cognitive = () => {
    return(
        <div className="cognitiveCard">
        <br></br>
            <h1> 🚀 Enhanced Cognitive Function 🚀 </h1>
            <Card>
            <Card.Img src={Cognitive} alt="Card image" />
              <Card.Text> 
              Elevate your mental clarity and focus with the brain-boosting power 
              of carefully selected ingredients. 
              The Ultimate NutriVibe Super Pill is designed to enhance cognitive function, 
              helping you stay sharp and alert throughout your busy day.
              </Card.Text>
          </Card>
          <br></br>
        </div>
    )
}