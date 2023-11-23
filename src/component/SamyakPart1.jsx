import React, { useEffect } from "react";
import "./syk.scss";
import image1 from "./images/images.jpeg";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

function SamyakPart1() {
  const controls = useAnimation();

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    console.log(scrollYProgress);
  });

  useEffect(() => {
    // Calculate the dynamic width based on scroll progress
    const dynamicWidth = 80 + scrollYProgress.current * 20;

    // Set the width with the controls
    controls.start({ width: `${dynamicWidth}vw` });
  }, [scrollYProgress, controls]);

  return (
    <>
      {/* Strategy */}
      <motion.div
        className="syk-main-container"
        style={{
          width: "80vw",
          borderRadius: "80px 80px 0 0",
        }}
        animate={controls}
      >
        <div className="syk-left-side">
          <div className="syk-main-text">
            Speed up development and innovation with product team
          </div>
          <div className="syk-strategy">
            <div className="syk-medium-text">Strategy</div>
            <div className="syk-small-text">
              We create responsive websites and apps that look and work great on
              computers, tablets and mobile devices. We develop rich internet
              applications in iOS, Android and Windows
            </div>
            <div className="syk-medium-text syk-textmargin syk-gray-text">
              Design
            </div>
            <div className="syk-medium-text syk-textmargin syk-gray-text">
              &lt;/Develop&gt;
            </div>
          </div>
        </div>
        <div className="syk-right-side">
          <div className="syk-image-container">
            <img src={image1} />
          </div>
        </div>
      </motion.div>

      {/* Design */}
      <div className="syk-main-container">
        <div className="syk-left-side">
          <div className="syk-main-text">
            Speed up development and innovation with product team
          </div>
          <div className="syk-strategy">
            <div className="syk-medium-text syk-gray-text">Strategy</div>
            <div className="syk-medium-text syk-textmargin">Design</div>
            <div className="syk-small-text">
              We create responsive websites and apps that look and work great on
              computers, tablets and mobile devices. We develop rich internet
              applications in iOS, Android and Windows
            </div>
            <div className="syk-medium-text syk-textmargin syk-gray-text">
              &lt;/Develop&gt;
            </div>
          </div>
        </div>
        <div className="syk-right-side">
          <div className="syk-image-container">
            <img src={image1} />
          </div>
        </div>
      </div>

      {/* Develop */}
      <div className="syk-main-container">
        <div className="syk-left-side">
          <div className="syk-main-text ">
            Speed up development and innovation with product team
          </div>
          <div className="syk-strategy">
            <div className="syk-medium-text syk-gray-text">Strategy</div>
            <div className="syk-medium-text syk-textmargin syk-gray-text">
              Design
            </div>
            <div className="syk-medium-text syk-textmargin">
              &lt;/Develop&gt;
            </div>
            <div className="syk-small-text">
              We create responsive websites and apps that look and work great on
              computers, tablets and mobile devices. We develop rich internet
              applications in iOS, Android and Windows
            </div>
          </div>
        </div>
        <div className="syk-right-side">
          <div className="syk-image-container">
            <img src={image1} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SamyakPart1;
