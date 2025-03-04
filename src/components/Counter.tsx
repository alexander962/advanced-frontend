import {FC, useState} from 'react';
import './Counter.scss'

interface Props {
  className?: string;
}

export const Counter: FC<Props> = ({className}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className={className}>
      <h1>Счет: {count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
};
