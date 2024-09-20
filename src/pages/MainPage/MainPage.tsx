import { FC } from "react";

interface Props {
  className?: string;
}

const MainPage: FC<Props> = ({ className }) => {
  return <div className={className}>MainPage</div>;
};

export default MainPage;
