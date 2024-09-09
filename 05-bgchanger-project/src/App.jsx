import { useState } from "react";
import { Color } from "./Color";

function App() {
  const [bgColor, setBgColor] = useState("#000");
  const colors = [
    { name: "Purple", hex: "#8B5CF6" },
    { name: "Pink", hex: "#EC4899" },
    { name: "Green", hex: "#34D399" },
    { name: "Amber", hex: "#F59E0B" },
    { name: "Sky Blue", hex: "#3B82F6" },
    { name: "Red", hex: "#F87171" },
    { name: "Orchid", hex: "#A855F7" },
    { name: "Emerald", hex: "#10B981" },
    { name: "Yellow Orange", hex: "#FBBF24" },
    { name: "Indigo", hex: "#6366F1" },
  ];

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <div className="colors">
        {colors.map((color) => (
          <Color color={color} changeColor={changeColor} />
        ))}
      </div>
    </div>
  );
}

export default App;
