import React, { useEffect, useRef, useState } from "react";
import "./RippleButton.scss";

const RippleButton = () => {
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const handleRipple = (e) => {
    const button = buttonRef.current;
    const buttonRect = button.getBoundingClientRect();
    const size = Math.max(buttonRect.width, buttonRect.height);
    const x = e.clientX - buttonRect.left;
    const y = e.clientY - buttonRect.top;

    const newRipple = {
      x,
      y,
      size,
    };

    setRipples((prevRipples) => [...prevRipples, newRipple]);
  };

  useEffect(() => {
    const clearRipples = () => {
      setRipples([]);
    };

    const timeoutId = setTimeout(clearRipples, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [ripples]);

  return (
    <>
      <button
        ref={buttonRef}
        className="btn btn--ripple"
        onMouseOver={handleRipple}
        onMouseOut={() => setRipples([])}
      >
        {ripples.map((ripple, index) => (
          <span
            key={index}
            style={{
              left: ripple.x + "px",
              top: ripple.y + "px",
              width: ripple.size + "px",
              height: ripple.size + "px",
            }}
          />
        ))}
        Send
      </button>
    </>
  );
};

export default RippleButton;
