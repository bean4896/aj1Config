import React, { useState } from 'react';



const Configurator = ({ changeColor }) => {

    const [currentColor, setCurrentColor] = useState('red'); // Initial color is red

    const handleClick = (color) => {
      setCurrentColor(color);
      changeColor(color); // Pass the selected color to App.jsx
    };

    <div class="configurator">
      <button onClick={() => handleClick('red')}>Red</button>
      <button onClick={() => handleClick('blue')}>Blue</button>
      <button onClick={() => handleClick('green')}>Green</button>
    </div>
}

export default Configurator;