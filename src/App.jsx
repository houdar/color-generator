import { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [colors, setCOlors] = useState(new Values("#c27a90").all(3));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(3);
      setCOlors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
