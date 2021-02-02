import React from 'react';
import BigNumber from '../../components/BigNumber'

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <BigNumber number={count} />

    </div>
  );
};

export default Counter
