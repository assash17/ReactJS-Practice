import React from "react";
import style from "../css/Controller.module.scss";

function Controller({ handlePlay, handelPause, setvolume }) {
  return (
    <div className={style.box}>
      <button onClick={handlePlay}>play</button>
      <button onClick={handelPause}>Pause</button>
      <input
        type="range"
        onInput={(e) => {
          setvolume(e.target.value / 100);
        }}
      ></input>
    </div>
  );
}

export default Controller;
