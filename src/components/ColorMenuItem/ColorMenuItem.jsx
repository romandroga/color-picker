import React from "react";
import * as styles from "./ColorMenuItem.module.css";

const ColorMenuItem = ({ data: { color, index }, onChange}) => {
  return (
    <div onClick={() => onChange(index)} className={`${styles.wrapper} menu-item`}>
      <p>{color}</p>
      <div  className={styles.colorPreview} style={{ backgroundColor: index }}></div>
    </div>
  );
};

export default ColorMenuItem;
