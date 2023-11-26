import React, { useEffect, useRef, useState } from "react";
import "./syk.scss";
import image1 from "./images/images.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

function SamyakPart1() {
  const [activeTitle, setActiveTitle] = useState("strategy");

  // const { scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  //   console.log(scrollYProgress);
  // });

  // useEffect(() => {
  //   // Calculate the dynamic width based on scroll progress
  //   const dynamicWidth = 80 + scrollYProgress.current * 20;

  //   // Set the width with the controls
  //   controls.start({ width: `${dynamicWidth}vw` });
  // }, [scrollYProgress, controls]);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const borderProgress = useTransform(scrollYProgress, [0, 1], [160, -1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    // console.log(scrollYProgress);
  });

  const transition = { duration: 0.5, ease: "easeInOut" };

  return (
    <>
      {/* Strategy */}
      <motion.div
        ref={ref}
        className="syk-main-container"
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
          borderRadius: borderProgress,
        }}
      >
        <div className="syk-left-side">
          <div className="syk-main-text">
            Speed up development and innovation with product team
          </div>
          <div className="syk-strategy">
            {activeTitle === "strategy" && (
              <>
                <motion.div
                  className="syk-medium-text syk-blue-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={transition}
                >
                  Strategy
                </motion.div>
                <motion.div
                  className="syk-small-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={transition}
                >
                  We create responsive websites and apps that look and work
                  great on computers, tablets and mobile devices. We develop
                  rich internet applications in iOS, Android and Windows
                </motion.div>
              </>
              // ) : (
            )}
            <>
              <div
                className="syk-medium-text"
                onClick={() => setActiveTitle("strategy")}
              >
                Strategy
              </div>
            </>
            {/* )} */}

            {activeTitle === "design" ? (
              <>
                <div className="syk-medium-text syk-textmargin syk-blue-text">
                  Design
                </div>
                <div className="syk-small-text">
                  We create responsive websites and apps that look and work
                  great on computers, tablets and mobile devices. We develop
                  rich internet applications in iOS, Android and Windows
                </div>
              </>
            ) : (
              <>
                <div
                  className="syk-medium-text syk-textmargin"
                  onClick={() => setActiveTitle("design")}
                >
                  Design
                </div>
              </>
            )}
            {activeTitle === "develop" ? (
              <>
                <div className="syk-medium-text syk-textmargin syk-blue-text">
                  &lt;/Develop&gt;
                </div>
                <div className="syk-small-text">
                  We create responsive websites and apps that look and work
                  great on computers, tablets and mobile devices. We develop
                  rich internet applications in iOS, Android and Windows
                </div>
              </>
            ) : (
              <>
                <div
                  className="syk-medium-text syk-textmargin"
                  onClick={() => setActiveTitle("develop")}
                >
                  &lt;/Develop&gt;
                </div>
              </>
            )}
          </div>
        </div>
        <div className="syk-right-side">
          <div className="syk-image-container">
            {activeTitle === "strategy" ? (
              <img src={image1} />
            ) : activeTitle === "design" ? (
              <img src={image2} />
            ) : (
              <img src={image3} />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SamyakPart1;
