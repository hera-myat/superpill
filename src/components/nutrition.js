import React from 'react';
import Card from 'react-bootstrap/Card';
import "./nutrition.css"
import Nutrition from '../Nutrition.gif'

//superpill or AstroFuel?
export const nutrition = () => {
    return(
        <div className="nutritionCard">
        <br></br>
            <h1> 🌈 Complete Nutritional Support 🌈 </h1>
            <Card>
            <Card.Img src={Nutrition} alt="Card image" />
              <Card.Text>
              Our Super Pill isn't just a supplement; 
              it's a comprehensive nutritional companion. 
              From immune-boosting antioxidants to bone-strengthening elements, 
              each capsule is a treasure trove of health benefits, 
              supporting your body's functions from head to toe.
              </Card.Text>
          </Card>
          <br></br>
        </div>
    )
}