import { useState } from "react";

 function ColorBox() {
  // const color = "red";
  const [color, setColor] = useState("orange");
  const styles = {
    fontSize: "24px",
    background: color
  };
  return (
    <div>
      <input
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter a color" />
    </div>
  );
}

export default ColorBox;