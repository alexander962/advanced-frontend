import React, {FC, Suspense} from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import './index.scss';

interface Props {
  className?: string;
}

export const App: FC<Props> = ({className}) => {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/about" element={<AboutPageAsync />} />
            <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
