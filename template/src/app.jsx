import React, { useEffect, useState } from "react";
import "./App.css";
import VideoItem from "./components/video_item/video_item";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAVodH078vO0Yr8v0OXXV0gW5-HiS1yR-E', requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);
  return <VideoList videos = {videos} />;
}

export default App;
