import React from "react";
import * as styles from "./ColorMenu.module.css";
import ColorMenuItem from "../ColorMenuItem/ColorMenuItem";

const ColorMenu = ({ data, onChange, onClick }) => {
  return (
    <div className={`${styles.wrapper} menu`} onClick={onClick}>
      {data.map((elem) => (
        <ColorMenuItem
          key={Date.now() * Math.random()}
          data={elem}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default ColorMenu;
