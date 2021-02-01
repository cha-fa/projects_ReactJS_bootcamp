import React from 'react';
import ReactDOM from 'react-dom';
import MixedContent from './components/MixedContent'
import FirstImage from './components/MixedContent/img1.jpg'
import SecondImage from './components/MixedContent/img2.png'
import ThirdImage from './components/MixedContent/img3.jpg'

const App = () => (
  <div>
    <MixedContent mytitle={"la papot"} mytext={"on adore manger"} myimage={FirstImage}/>
    <MixedContent mytitle={"Salut la mif"} mytext={"on adore dormir"} myimage={SecondImage}/>
    <MixedContent mytitle={"Bien le bjr"} mytext={"on adore netflix"} myimage={ThirdImage}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
