import React from "react";
import style from "../styles/youtube.module.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Veuillez saisir votre recherche...</h1>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div className={style}>
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className={style}>
        <h4 className={style}>{video.snippet.title}</h4>
        <p className={style}>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetail;
