export const Color = ({ color, changeColor }) => {
  return (
    <div
      className="color"
      style={{ backgroundColor: color.hex }}
      onClick={() => changeColor(color.hex)}
    >
      {color.name}
    </div>
  );
};
