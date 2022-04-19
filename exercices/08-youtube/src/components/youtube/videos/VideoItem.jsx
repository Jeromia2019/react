import React from "react";
import style from "../styles/videoItem.module.css";

function VideoItem({ video, handleVideoSelect }) {
  return (
    <div onClick={() => handleVideoSelect(video)} className={style}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header ">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default VideoItem;
