import React from 'react';
import ReactDOM from 'react-dom';
import Colors from './components/Colors'
import Counter from './components/Counter'

const App = () => (
  <div>
    <Colors />
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

