import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideos } from "src/redux/features/videosSlice";
import { AppDispatch } from "src/redux/store";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchVideos());
  }, []);
  return (
    <div>
      Home Page
      <p>
        <Link to="/video/1">Go to player</Link>
      </p>
    </div>
  );
};

export default HomePage;
