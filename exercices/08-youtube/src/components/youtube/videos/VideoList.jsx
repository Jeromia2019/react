import React from "react";
import VideoItem from "./VideoItem";
import style from "../styles/youtube.module.css";

function VideoList({ videos, handleVideoSelect }) {
  
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return <div className={style}>{renderedVideos}</div>;
}

export default VideoList;
