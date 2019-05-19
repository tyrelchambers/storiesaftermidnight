import React from 'react'
import YouTube from 'react-youtube';

export default function GetVideo(props) {
  
  return (
    <div>
      <YouTube 
        id={process.env.REACT_APP_CHANNEL_ID}
        videoId={props.video}
      />
    </div>
  )
}

