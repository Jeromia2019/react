import React, { useState } from "react";
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
    <div className="ui container" style={{ marginTop: "1em" }}>
      <Searchbar handleFormSubmit={handleSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              handleVideoSelect={handleVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Youtube;
