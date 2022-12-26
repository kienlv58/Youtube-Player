import { Link } from "react-router-dom";
import { VideoInfo } from "src/redux/features/videosSlice";
import { convertSecondToUserView } from "src/utils/helpers";
import styles from "./VideoItem.module.scss";
const VideoItem = ({ video }: { video: VideoInfo }) => {
  return (
    <Link to={`video/${video.metadata?.sid}`} className={styles.item}>
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
  );
};
export default VideoItem;
