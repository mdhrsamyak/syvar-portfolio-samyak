import { React, useRef, useEffect, useState } from "react";
import "./footer.scss";
import { easeInOut, motion, useAnimationControls } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import FramerMagnetic from "./framer";
import Test from "./Test";

function SamyakFooter() {
  const [showForm, setShowForm] = useState(false);

  const path = useRef(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress) => {
    const width = window.innerWidth * 0.85;
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

  function handleRightButton() {
    setShowForm(true);
  }
  // const controls = useAnimationControls();
  const [TransformX, setTransformX] = useState("0");
  function handleMouseEnter() {
    setTransformX("50px");
    // controls.start({
    //   x: "0px",
    // });
  }

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
            <div className="syk-footer-left-top">
              <div className="syk-footer-text" style={{ paddingRight: "88px" }}>
                <motion.div
                  className="text-only-number"
                  whileHover={{ scale: 1.2, originX: 0 }}
                >
                  +977 9843636520
                </motion.div>
              </div>
              <motion.div className="syk-footer-text">
                <motion.div
                  className="text-only-mail"
                  whileHover={{ scale: 1.2, originX: 0 }}
                >
                  info@syvartechnology.com.np
                </motion.div>
              </motion.div>
            </div>
            <div className="syk-footer-left-bottom">
              <FramerMagnetic>
                <RiInstagramFill />
              </FramerMagnetic>
              <FramerMagnetic>
                <FaFacebookF />
              </FramerMagnetic>
              <FramerMagnetic>
                <FaLinkedinIn />
              </FramerMagnetic>
            </div>
          </div>
          {showForm ? (
            <motion.div className="syk-footer-right-form">
              <div className="syk-input-bar">
                <input type="text" placeholder="name"></input>
              </div>
              <div className="syk-input-bar">
                <input type="email" placeholder="email"></input>
              </div>
              <div className="syk-input-bar">
                <input type="number" placeholder="phone"></input>
              </div>
              <div className="syk-input-bar">
                <input
                  type="text"
                  placeholder="tell us about your project"
                ></input>
              </div>
              <div className="syk-form-submit">
                <button>Send</button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="syk-footer-right-section"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => {
                setTransformX("0");
              }}
              whileHover={{ scale: 1.1 }}
              onClick={handleRightButton}
            >
              <div className="syk-footer-right-button">
                Let's Work Together{" "}
                <div>
                  <GoArrowRight
                    style={{
                      transform: `translateX(${TransformX})`,
                      transition: "0.5s ease-in-out",
                    }}
                  />
                </div>
              </div>
              {/* <motion.div animate={controls}></motion.div> */}
            </motion.div>
          )}
        </div>
        <div className="syk-footer-bottom">
          <div className="syk-footer-bottom-left">
            @2024, T&C Privacy policy
          </div>
          <div className="syk-footer-bottom-right">LOGOS</div>
        </div>
      </div>

      <Test>
        <div style={{ color: "white" }}>Hello from test</div>
      </Test>
    </div>
  );
}

export default SamyakFooter;
