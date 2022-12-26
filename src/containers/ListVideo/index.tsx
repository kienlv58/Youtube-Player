import { useSelector } from "react-redux";
import VideoItem from "src/components/VideoItem";
import { RootState } from "src/redux/reducer";

import styles from "./ListVideo.module.scss";

const ListVideo = () => {
  const videoData = useSelector((state: RootState) => state.videos);

  if (videoData.error) return <h2>Get video error</h2>;

  return (
    <div className={styles.videos}>
      <h2>Videos</h2>
      <div>
        {videoData.recommendationsList.map((video) => (
          <VideoItem video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
};

export default ListVideo;
