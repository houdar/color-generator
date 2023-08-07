import React, { useState } from "react";
import Values from "values.js";
new Values("#c27a90").all(10);
const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form " onSubmit={handleSubmit}>
        <input
          type="color"
          value="#c27a90"
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          placeholder="#f15025"
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
