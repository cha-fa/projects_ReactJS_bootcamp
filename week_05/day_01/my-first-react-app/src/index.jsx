import React from 'react';
import ReactDOM from 'react-dom';
import Paragraphs from './components/Paragraphs';

const App = () => (
  <div>
    <h1>Hello world!</h1>
    <Paragraphs />
    <ul>
      <li>Books: <TotalAmount amount={154} /></li>
      <li>Pencils: <TotalAmount amount={12.85} /></li>
      <li>Erasers: <TotalAmount amount={18} /></li>
    </ul>
  </div>
);

const TotalAmount = (props) => (
  <span className="TotalAmount">
    Total: {props.amount} €
  </span>
);

ReactDOM.render(<App />, document.getElementById('root'));
