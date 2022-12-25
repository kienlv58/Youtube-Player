import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import videoSlice from "src/redux/features/videosSlice";
import { RootState } from "src/redux/reducer";
import { AppDispatch } from "src/redux/store";
import Controls from "../Controls";

import styles from "./CustomPlayer.module.scss";

const CustomPlayer = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState({
    isPlaying: false,
    playedSeconds: 0,
    muted: false,
    volume: 0.5,
    visibleControl: true,
  });

  const playerRef = useRef<ReactPlayer | null>(null);

  const video = useSelector((state: RootState) =>
    state.videos.recommendationsList.find((item) => item.metadata?.sid === id),
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (video && video.id && !video.isPlayed) {
      dispatch(videoSlice.actions.markPlayed(video.id));
    }
  }, [video?.id]);

  useEffect(() => {
    if (!player.isPlaying && !player.visibleControl) {
      setPlayer((prev) => ({ ...prev, visibleControl: true }));
    }
  }, [player.isPlaying]);

  const handleOnPlayPause = () => {
    setPlayer((prev) => ({ ...prev, isPlaying: !prev.isPlaying }));
  };

  const handleSeek = (position: number) => {
    playerRef.current?.seekTo(position);
    setPlayer((prev) => ({ ...prev, playedSeconds: position }));
  };

  const handleOnMute = () => {
    setPlayer((prev) => ({
      ...prev,
      muted: !prev.muted,
      volume: !prev.muted ? 0 : prev.volume > 0 ? prev.volume : 0.5,
    }));
  };

  const handleOnVolumeChange = (vol: number) => {
    setPlayer((prev) => ({
      ...prev,
      volume: vol,
      muted: vol > 0 ? false : true,
    }));
  };

  const handleOnMouseMove = () => {
    setPlayer((prev) => ({ ...prev, visibleControl: true }));
  };

  const handleOnMouseLeave = () => {
    if (player.isPlaying)
      setPlayer((prev) => ({ ...prev, visibleControl: false }));
  };

  return (
    <div
      className={styles.player}
      onMouseMove={handleOnMouseMove}
      onMouseLeave={handleOnMouseLeave}
    >
      {!video || !video?.metadata?.sid ? (
        <>
          <h2>Video not found</h2>
          <Link className={styles["btn-back"]} to={"/"}>
            Go back Home
          </Link>
        </>
      ) : (
        <>
          <ReactPlayer
            ref={playerRef}
            url={`https://www.youtube.com/watch?v=${video?.metadata?.sid}`}
            playing={player.isPlaying}
            muted={player.muted}
            volume={player.volume}
            onProgress={(data) => {
              setPlayer((prev) => ({
                ...prev,
                playedSeconds: data.playedSeconds,
              }));
            }}
            onEnded={() => {
              setPlayer((prev) => ({ ...prev, isPlaying: false }));
            }}
            onPause={() => {
              if (player.isPlaying) {
                setPlayer((prev) => ({ ...prev, isPlaying: false }));
              }
            }}
            onPlay={() => {
              if (!player.isPlaying) {
                setPlayer((prev) => ({ ...prev, isPlaying: true }));
              }
            }}
          />

          <Controls
            className={
              player.visibleControl ? styles.control : styles["in-active"]
            }
            muted={player.muted}
            volume={player.volume}
            onVolumeChange={handleOnVolumeChange}
            onMute={handleOnMute}
            onPlayPause={handleOnPlayPause}
            onSeek={handleSeek}
            playing={player.isPlaying}
            duration={video?.metadata?.duration || 0}
            playedSeconds={player.playedSeconds}
          />
        </>
      )}
    </div>
  );
};

export default CustomPlayer;
