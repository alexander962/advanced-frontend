import { FC } from "react";

interface Props {
  className?: string;
}

const AboutPage: FC<Props> = ({ className }) => {
  return <div className={className}>AboutPage</div>;
};

export default AboutPage;
