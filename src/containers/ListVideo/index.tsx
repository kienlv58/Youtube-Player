import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "src/redux/reducer";
import { convertSecondToUserView } from "src/utils/helpers";

import styles from "./ListVideo.module.scss";

const ListVideo = () => {
  const videoData = useSelector((state: RootState) => state.videos);

  if (videoData.error) return <h2>Get video error</h2>;

  return (
    <div className={styles.videos}>
      <h2>Videos</h2>
      <div>
        {videoData.recommendationsList.map((video) => (
          <Link
            key={video.id}
            to={`video/${video.metadata?.sid}`}
            className={styles.item}
          >
            <img
              className={styles.thumbnail}
              src={video.metadata?.thumbnailUrl}
              alt={video.metadata?.title}
            />
            <div className={styles.info}>
              <p className={styles.title}>{video.metadata?.title}</p>
              <p className={styles.duration}>Duration</p>
              <p>{convertSecondToUserView(video.metadata?.duration || 0)}</p>
              {video.isPlayed && <div className={styles.played}>Played</div>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListVideo;
