import { FC, useState } from "react";
import styles from "./Counter.module.scss";

interface Props {
  className?: string;
}

export const Counter: FC<Props> = ({ className }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className={styles.btn} onClick={increment}>
        Increment
      </button>
    </>
  );
};
