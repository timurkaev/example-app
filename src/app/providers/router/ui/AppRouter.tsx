import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import type { FC } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const AppRouter: FC = (): JSX.Element => (
  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
      <Route
        key={path}
        path={path}
        element={
          <Suspense fallback="Loading page...">
            <div className="page-wrapper">{element}</div>
          </Suspense>
        }
      />
    ))}
  </Routes>
);

export default AppRouter;
