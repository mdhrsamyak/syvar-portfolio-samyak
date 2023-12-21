import { useRef } from "react";
import "./PrashantButton.scss";

const PrashantButton = () => {
  const ref = useRef();

  const handleHover = (e) => {
    const x = e.pageX - ref.current.offsetLeft;
    const y = e.pageY - ref.current.offsetTop;
    ref.current.style.setProperty("--x", x + "px");
    ref.current.style.setProperty("--y", y + "px");
  };

  return (
    <>
      <div ref={ref} onMouseMove={handleHover} className="syk-btn2">
        <span>Send</span>
      </div>
    </>
  );
};
export default PrashantButton;
