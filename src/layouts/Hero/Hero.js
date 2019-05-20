import React, { useEffect, useState } from 'react'
import './Hero.scss';
import bgImg from '../../assets/videos/bgimg.jpg';
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
  }, []);

  return (
    <div className="hero">
      <img src={bgImg} alt="" id="heroVideo"/>
      <div className="hero-body">
        <div className="hero-title is-animate">
          <h1>Stories After Midnight</h1>
        </div>
        <div className="yt-callout is-animate">
           <a href="https://youtube.com/storiesaftermidnight" target="_blank"  rel="noopener noreferrer">
            <p>Check me out on </p>
            <i className="fab fa-youtube"></i>
           </a>
        </div>
        <div className="hero-latest is-animate">
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
