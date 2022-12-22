import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RouteMap from "src/utils/route-map";
import Loading from "src/components/Loading";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const PlayerPage = React.lazy(() => import("./pages/PlayerPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Routes>
      <Route
        index
        path={RouteMap.HOME}
        element={
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        index
        path={RouteMap.PLAYER}
        element={
          <Suspense fallback={<Loading />}>
            <PlayerPage />
          </Suspense>
        }
      />
      <Route
        path={RouteMap.NOT_FOUND}
        element={
          <Suspense fallback={<Loading />}>
            <NotFoundPage />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
