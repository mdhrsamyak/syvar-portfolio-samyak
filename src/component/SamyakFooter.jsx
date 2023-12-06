import { React, useRef, useEffect } from "react";
import "./footer.scss";

function SamyakFooter() {
  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress) => {
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(
      null,
      "d",
      `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
    );
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  };

  const manageMouseMove = (e) => {
    const { movementY, clientX } = e;
    console.log(movementY);
    console.log(clientX);
    const pathBound = path.current.getBoundingClientRect();
    x = (clientX - pathBound.left) / pathBound.width;
    progress += movementY;
    setPath(progress);
  };

  const manageMouseLeave = () => {
    animateOut();
  };

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  };

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  };

  return (
    <div className="syk-footer-main-container">
      <div className="syk-footer-content">
        <div className="syk-footer-title">Got a project?</div>

        <div className="syk-footer-string-line">
          <div
            onMouseEnter={() => {
              manageMouseEnter();
            }}
            onMouseMove={(e) => {
              manageMouseMove(e);
            }}
            onMouseLeave={() => {
              manageMouseLeave();
            }}
            className="syk-box"
          ></div>
          <svg>
            <path ref={path}></path>
          </svg>
        </div>

        <div className="syk-footer-mid-section">
          <div className="syk-footer-left-section">
            <div className="syk-footer-text" style={{ paddingRight: "88px" }}>
              +977 9843636520
            </div>
            <div className="syk-footer-text">info@syvartechnology.com.np</div>
          </div>
          <div className="syk-footer-right-section">
            <div className="syk-footer-right-button">Let's Work Together</div>
          </div>
        </div>
        <div className="syk-footer-bottom">
          <div className="syk-footer-bottom-left">
            @2024, T&C Privacy policy
          </div>
          <div className="syk-footer-bottom-right">LOGOS</div>
        </div>
      </div>
    </div>
  );
}

export default SamyakFooter;
