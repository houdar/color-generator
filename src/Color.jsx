import { toast } from "react-toastify";

const Color = ({ index, color }) => {
  const { hex, weight } = color;
  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`#${hex}`);
      toast.success("clipboard saved");
    } else {
      toast.error("clipboard is not available");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light " : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipBoard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default Color;
