import React, { useCallback, useRef, useState } from "react";
import Controller from "./Controller";
import Header from "./Header";
import Video from "./Video";

function CustomVideoPlayer() {
  const videoRef = useRef();
  const [volume, setvolume] = useState(0.5);

  const handlePlay = useCallback(() => {
    videoRef.current.play();
  }, []);

  const handelPause = useCallback(() => {
    videoRef.current.pause();
  }, []);

  const ref1 = useRef(setvolume);
  const ref2 = useRef(handlePlay);
  const ref3 = useRef(handelPause);

  console.log(ref1.current === setvolume);
  console.log(ref2.current === handlePlay);
  console.log(ref3.current === handelPause);

  return (
    <div>
      <Header></Header>
      <Video videoRef={videoRef} volume={volume}></Video>
      <Controller
        handlePlay={handlePlay}
        handelPause={handelPause}
        setvolume={setvolume}
      ></Controller>
    </div>
  );
}

export default CustomVideoPlayer;
