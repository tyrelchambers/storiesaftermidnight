import React, { useEffect, useState } from 'react'
import './Hero.scss';
import videoBG from '../../assets/videos/traffic.mp4';
import GetVideo from '../../components/GetVideo/GetVideo';
import Axios from 'axios';

export default function Hero() {
  const [ video, setVideo ] = useState("");

  const getLatestVideo = async () => {
    try {
      const link = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${process.env.REACT_APP_CHANNEL_ID}&key=${process.env.REACT_APP_YOUTUBE_API}`;
  
      const vid = await Axios.get(link).then(res => res.data.items[0].id.videoId);
  
      setVideo(vid);
    }
  
    catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    
    getLatestVideo();
  }, [])

  
  return (
    <div className="hero">
      <video autoPlay muted loop id="heroVideo">
        <source src={videoBG} type="video/mp4" />
      </video>
      <div className="hero-body">
        <div className="hero-title">
          <h1>Stories After Midnight</h1>
        </div>
        <div className="yt-callout">
           <a href="https://youtube.com/storiesaftermidnight" target="_blank"  rel="noopener noreferrer">
            <p>Check me out on </p>
            <i className="fab fa-youtube"></i>
           </a>
        </div>
        <div className="hero-latest">
          <h2 className="hero-latest-title">Latest Video</h2>
          <div className="hero-Video" id="latestVideo">
            <GetVideo 
              video={video}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
