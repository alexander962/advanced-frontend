import {FC} from 'react';
import {App} from "../../App";

interface Props {
  className?: string;
}

const MainPage: FC<Props> = ({className}) => {
  return (
    <div className={className}>MainPage</div>
  );
};

export default MainPage;
