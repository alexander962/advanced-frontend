import React, {FC, Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

interface Props {
  className?: string;
}

export const AppRouter: FC<Props> = ({className}) => {
  return (
    <div className={className}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route
              key={path}
              path={path}
              element={element}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
