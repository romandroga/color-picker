import React, { useState, useEffect } from "react";
import * as styles from "./ColorSlider.module.css";
import { hexToRgb, rgbToHex } from "../../utilities/utilities";

const ColorSlider = ({ value, onSubmit }) => {
  const [color, setColor] = useState(hexToRgb(value));

  const preview = document.querySelector(".slider-menu-button");

  useEffect(() => {
    setColor(hexToRgb(value));

    setColor({
      red: color[0],
      green: color[1],
      blue: color[2],
    });
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setColor((prevState) => ({ ...prevState, [name]: +value }));
    preview.style.backgroundColor = `rgb(${color.red},${color.green}, ${color.blue})`; //Переделать
  };

  return (
    <div className={`${styles.wrapper} color-slider`}>
      <label>
        R
        <input
          onChange={handleChange}
          name="red"
          type="range"
          min={0}
          max={255}
          value={color.red}
        />
      </label>
      <label>
        G
        <input
          onChange={handleChange}
          name="green"
          type="range"
          min={0}
          max={255}
          value={color.green}
        />
      </label>
      <label>
        B
        <input
          onChange={handleChange}
          name="blue"
          type="range"
          min={0}
          max={255}
          value={color.blue}
        />
      </label>
      <div className={styles.buttonsWrapper}>
        <button
          className={styles.cancelButton}
          onClick={() => (preview.style.backgroundColor = value)}
        >
          Cancel
        </button>
        <button
          className={styles.okButton}
          onClick={() => {
            onSubmit(rgbToHex(...Object.values(color)));
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default ColorSlider;
