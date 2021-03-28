import React from "react";
import style from "../css/Header.module.scss";

function Header() {
  return <h1 className={style.title}>CustomVideoPlayer</h1>;
}

export default React.memo(Header);
