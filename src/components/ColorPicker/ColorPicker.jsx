import React, { useState, useEffect } from "react";
import * as styles from "./ColorPicker.module.css";
import ColorMenu from "../ColorMenu/ColorMenu";
import ColorSlider from "../ColorSlider/ColorSlider";

const ColorPicker = ({ value, onChange, colors }) => {
  const [colorSliderFlag, setColorSliderFlag] = useState(false);
  const [colorMenuFlag, setColorMenuFlag] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleChange);

    return () => document.removeEventListener("click", handleChange);
  }, [value, colorMenuFlag, colorSliderFlag]);

  const handleChange = ({target}) => {
    if (target.classList.contains("color-menu-button") || colorMenuFlag) {
      setColorMenuFlag(!colorMenuFlag);
    }
    if (target.classList.contains("slider-menu-button")) {
      setColorSliderFlag(!colorSliderFlag);
    }
    if (
      target.classList.contains("color-slider") ||
      target.tagName === "LABEL" ||
      target.tagName === "INPUT"
    ) {
      return;
    }
    if (colorSliderFlag) {
      setColorSliderFlag(!colorSliderFlag);
    }
  };

  return (
    <div className={styles.appWrapper}>
      <div className={styles.wrapper}>
        <p className={styles.colorIndex}>{value}</p>
        <button
          className={`${styles.colorSlider} slider-menu-button`}
          style={{ backgroundColor: value }}
        ></button>
        <button className={`${styles.colorMenu} color-menu-button`}>
          &#9660;
        </button>
      </div>

      {colorMenuFlag && (
        <ColorMenu data={colors} onChange={onChange} onClick={handleChange} />
      )}
      {colorSliderFlag && <ColorSlider value={value} onSubmit={onChange} />}
    </div>
  );
};

export default ColorPicker;
