import React from 'react';
import Card from 'react-bootstrap/Card';
import "./scienceBacked.css"
import TRUSTEd from '../TRUSTEd.gif'

//superpill or AstroFuel?
export const scienceBacked = () => {
    return(
        <div className="scienceBackedCard">
        <br></br>
            <h1> 👩‍⚕️ Backed By Modern Science 👩‍⚕️ </h1>
            <Card>
            <Card.Img src={TRUSTEd} alt="Card image" />
              <Card.Text>
              Backed by the latest scientific research, 
              our Super Pill is formulated with precision and care. 
              Rest easy knowing you're giving your body the best 
              that science and nature have to offer.
              </Card.Text>
          </Card>
          <br></br>
        </div>
    )
}