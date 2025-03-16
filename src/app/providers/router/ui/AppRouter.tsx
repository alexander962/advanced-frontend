import React, {FC, Suspense} from 'react';
import { Route, Routes } from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {classNames} from "shared/lib/classNames/classNames";

interface Props {
  className?: string;
}

export const AppRouter: FC<Props> = ({className}) => {
  return (
    <div className={classNames('page-wrapper', {}, [className])}>
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
