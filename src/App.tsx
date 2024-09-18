import { FC } from "react";
import { Counter } from "./components/Counter";
import "./index.scss";

interface Props {
  className?: string;
}

export const App: FC<Props> = ({ className }) => {
  return (
    <div className="app">
      App
      <Counter />
    </div>
  );
};
