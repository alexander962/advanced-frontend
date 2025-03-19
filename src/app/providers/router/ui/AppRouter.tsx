import React, { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader';

interface Props {
  className?: string;
}

export const AppRouter: FC<Props> = ({ className }) => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className={classNames('page-wrapper', {}, [className])}>
              {element}
            </div>
          </Suspense>
        )}
      />
    ))}
  </Routes>
);
