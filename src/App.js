import './App.css';
import { TypeAnimation } from 'react-type-animation';
import { superPill } from './components/superPill';
import backgroundVideo from './SpaceBackground.mp4';
import AstronautFloating from './AstronautFloating.png';
import { nutrition } from './components/nutrition';
import { cognitive } from './components/cognitive';
import { scienceBacked } from './components/scienceBacked';
import { useState } from 'react';
import spaceBackground from './spaceBackground.gif';

function App() {
  const [count, setCount] = useState(0);

  function updateCount() {
    const randomNumber = Math.random();
    const randomInteger = Math.floor(randomNumber * 101);
    if (count === randomInteger) {
      alert("You won a free Super Pill!");
      setCount(0);
    }
    else if (count > 100){
      alert("You ran out of tries! Sorry!");
      setCount(0);
    }
    else {
      setCount(count + 1)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      <video id="myVideo" loop autoPlay>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
        <img src={AstronautFloating} className="App-logo" alt="logo" />
          <TypeAnimation
            sequence={[
              'We produce food for the world...',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'We produce food for solar system...',
              1000,
              'We produce food for the milky way...',
              1000,
              'Introducing our groundbreaking health innovation...',
              1000
            ]}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
      </header>
      {/*PLACE REST OF PAGE HERE*/ }
      <div>
        {superPill()}
        {nutrition()}
        {cognitive()}
        {scienceBacked()}
      </div>
            
      <div className="Ending">
      <h1>Your Chance To Win A Free Super Pill!</h1>
      <button className="button" onClick={() => updateCount(count + 1)}> Click me! </button>
      <p2> You clicked {count} times! </p2>
      <p> Click the button above to get a chance of winning a free Super Pill! </p>
      <p> You have 100 chances </p>
      </div>

      
    </div>
  );
}

export default App;
