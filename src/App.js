import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import "./App.css";

const App = () => {
  const [currentColor, setCurrentColor] = useState("#FFCC33");
  const [defaultColors] = useState([
    { color: "RED", index: "#f20000" },
    { color: "YELLOW", index: "#f6ff00" },
    { color: "GREEN", index: "#00ff00" },
    { color: "BLUE", index: "#0080ff" },
  ]);

  const handleChange = (data) => {
    setCurrentColor(data);
  };

  return (
    <>
      <ColorPicker
        value={currentColor}
        onChange={handleChange}
        colors={defaultColors}
      />
    </>
  );
};

export default App;
