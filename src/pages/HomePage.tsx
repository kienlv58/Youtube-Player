import { Link } from "react-router-dom";

const HomePage = () => {
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
