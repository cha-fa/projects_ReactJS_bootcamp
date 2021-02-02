import React from 'react';

const Colors = () => {
  const [lastColor, setLastColor] = React.useState("red")

  const changeColor = (color) => {
    setLastColor(color);
  };

  return (
    <ul>
      <button onClick={() => changeColor("red")} style={{backgroundColor: 'red'}}>First button</button>
      <button onClick={() => changeColor("blue")} style={{backgroundColor: 'blue'}}>First button</button>
      <button onClick={() => changeColor("green")} style={{backgroundColor: 'green'}}>First button</button>
      <button onClick={() => changeColor("orange")} style={{backgroundColor: 'orange'}}>First button</button>
      <p>La dernière couleur cliquée est {lastColor}</p>
    </ul>

  )

}

export default Colors;
