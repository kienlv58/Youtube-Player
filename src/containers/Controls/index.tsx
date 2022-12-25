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
  onVolumeChange: (vol: number) => void;
  playing: boolean;
  volume: number;
  muted: boolean;
  duration: number;
  playedSeconds: number;
  className?: string;
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
    <div className={`${styles.control} ${props.className}`}>
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
      <div className={styles.speaker}>
        <button onClick={props.onMute} className={styles.mute}>
          <img
            className={styles["speaker-icon"]}
            src={props.muted ? muteIcon : speakerIcon}
            alt="speaker"
          />
        </button>
        <div className={styles.volume}>
          <Slider
            onChange={(nextValues) => {
              props.onVolumeChange(nextValues as number);
            }}
            vertical
            value={props.volume}
            min={0}
            max={1}
            defaultValue={0.5}
            step={0.1}
            handleStyle={{
              backgroundColor: "#6185BB",
              border: "none",
              opacity: 1,
            }}
            trackStyle={{ backgroundColor: "#3B5780" }}
            railStyle={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          />
        </div>
      </div>
      <button onClick={onClickBack} className={styles.back}>
        back to home
      </button>
    </div>
  );
};

export default Controls;
