import React from "react";
import style from "../styles/youtube.module.css";

function VideoItem({ video, handleVideoSelect }) {
  return (
    <div onClick={() => handleVideoSelect(video)} className={style}>
      <h4 className={style}>{video.snippet.title}</h4>
      <img
        className={style}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
    </div>
  );
}

export default VideoItem;
