import React, { useState } from "react";
import style from '../youtube/styles/youtube.module.css'
import Searchbar from "../searchbars/Searchbar";
import YoutubeApi from "../apis/youtube-api";
import VideoList from "./videos/VideoList";
import VideoDetail from "./videos/VideoDetail";

function Youtube() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSubmit = async (search) => {
    const response = await YoutubeApi.get('/search', {
        params: {
            q: search
        }
    })

    setVideos(response.data.items)

    console.log("this is resp",response);
};

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }


  return (
    <div className={style}>
      <Searchbar handleFormSubmit={handleSubmit} />
          <div className={style}>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className={style}>
            <VideoList
              handleVideoSelect={handleVideoSelect}
              videos={videos}
            />
          </div>
    </div>
  );
}

export default Youtube;
