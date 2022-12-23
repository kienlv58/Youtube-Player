import React, { useEffect } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import RouteMap from "src/utils/route-map";
import Loading from "src/components/Loading";
import Layout from "src/components/Layout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/redux/store";
import { fetchVideos } from "src/redux/features/videosSlice";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const PlayerPage = React.lazy(() => import("./pages/PlayerPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchVideos());
    return () => {};
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
      </Route>
    </Routes>
  );
}

export default App;
