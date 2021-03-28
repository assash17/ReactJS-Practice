import React, { useEffect, useRef } from "react";
import video from "../resource/video.mp4";

function Video({ videoRef, volume }) {
  useEffect(() => {
    videoRef.current.volume = volume;
    return () => {};
  }, [videoRef, volume]);
  return (
    <div>
      <video src={video} width="600px" ref={videoRef}></video>
    </div>
  );
}

export default Video;
