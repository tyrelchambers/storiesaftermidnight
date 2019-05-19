import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './GetStats.scss';
export default function GetStats() {
  const [stats, setStats] = useState({
    subs: "",
    views: "",
    videoCount: ""
  });

  useEffect(() => {
    getStats(setStats);
  }, [])
  return (
    <div className="stats-wrapper">
     <ul className="stats">
      <li className="stat">
        <i className="fas fa-heart"></i>
        <h2 className="numbers">{stats.subs}</h2>
        <p>Subscribers</p>
      </li>

      <li className="stat">
        <i className="fas fa-tv"></i>
        <h2 className="numbers">{stats.views}</h2>
        <p>Total Views</p>
      </li>

      <li className="stat">
        <i className="fas fa-video"></i>
        <h2 className="numbers">{stats.videoCount}</h2>
        <p>Videos</p>
      </li>
     </ul>
    </div>
  )
}

const getStats = async (setStats) => {
  const link = `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${process.env.REACT_APP_CHANNEL_ID}&key=${process.env.REACT_APP_YOUTUBE_API}`
  const stats = await Axios.get(link).then(res => res.data.items[0].statistics);
  setStats({
    subs: stats.subscriberCount,
    views: stats.viewCount,
    videoCount: stats.videoCount
  });
}