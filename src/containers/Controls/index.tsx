import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./Controls.module.scss";

import pauseIcon from "src/assets/icons/pause.svg";
import playIcon from "src/assets/icons/play.svg";
import speakerIcon from "src/assets/icons/speaker.svg";
import muteIcon from "src/assets/icons/volume-off.svg";
import { useNavigate } from "react-router-dom";

interface Props {
  onPlayPause: () => void;
  onSeek: (position: number) => void;
  onMute: () => void;
  playing: boolean;
  muted: boolean;
  duration: number;
  playedSeconds: number;
}

const Controls = (props: Props) => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  const onClickPlayPause = () => {
    props.onPlayPause();
  };

  const handleSeek = (position: number) => {
    props.onSeek(position);
  };

  return (
    <div className={styles.control}>
      <button onClick={onClickPlayPause} className={styles["play-pause"]}>
        <img src={props.playing ? playIcon : pauseIcon} alt="control" />
      </button>
      <div className={styles.slider}>
        <Slider
          onChange={(nextValues) => {
            handleSeek(nextValues as number);
          }}
          value={props.playedSeconds}
          min={0}
          max={props.duration}
          defaultValue={0}
          step={1}
          handleStyle={{
            backgroundColor: "#6185BB",
            border: "none",
            opacity: 1,
          }}
          trackStyle={{ backgroundColor: "#3B5780" }}
          railStyle={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
        />
      </div>
      <button onClick={props.onMute} className={styles.speaker}>
        <img
          className={styles["speaker-icon"]}
          src={props.muted ? muteIcon : speakerIcon}
          alt="speaker"
        />
      </button>
      <button onClick={onClickBack} className={styles.back}>
        back to home
      </button>
    </div>
  );
};

export default Controls;
