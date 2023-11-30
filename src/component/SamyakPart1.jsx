import React, { useEffect, useRef, useState } from "react";
import "./syk.scss";
import image1 from "./images/images.jpeg";
import image2 from "./images/img2.jpeg";
import image3 from "./images/img3.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

function SamyakPart1() {
  const [activeTitle, setActiveTitle] = useState("strategy");

  const ref = useRef(null);
  const ref2 = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const { scrollYProgress } = useScroll({
    target: document.body,
    // offset: [0, "100%"],
    offset: ["start start", "end start"],
  });

  // const { scrollYProgress2 } = useScroll({
  //   target: ref2,
  // });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
  const borderProgress = useTransform(scrollYProgress, [0, 0.15], [160, 0]);

  // useEffect(() => {
  //   console.log(scrollYProgress2);
  // }, [scrollYProgress2]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (latest > 0.2964724534284582 && latest < 1) {
      setIsSticky(true);
      if (latest < 0.7) {
        setActiveTitle("strategy");
      } else if (latest > 0.7 && latest <= 0.9) {
        setActiveTitle("design");
      } else if (latest > 0.9) {
        setActiveTitle("develop");
      }
    } else {
      setIsSticky(false);
    }
    console.log(scrollYProgress.current);
  });

  const transition = { duration: 0.5, ease: "easeInOut" };

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    console.log(isSticky);
  }, [isSticky]);

  return (
    <motion.div ref={ref}>
      <motion.div
        className={`syk-main-container ${isSticky ? "sticky" : ""}`}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
          borderRadius: borderProgress,
        }}
      >
        {/* <div className={`syk-main-content ${isSticky ? "sticky" : ""}`}> */}
        <div className="syk-left-side">
          <div className="syk-main-text">
            Speed up development and innovation with the product team
          </div>
          <div className="syk-strategy">
            {activeTitle === "strategy" ? (
              <>
                <div className="syk-medium-text syk-textmargin syk-blue-text">
                  Strategy
                </div>
                <motion.div
                  className="syk-small-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={transition}
                >
                  We create responsive websites and apps that look and work
                  great on computers, tablets, and mobile devices. We develop
                  rich internet applications in iOS, Android, and Windows
                </motion.div>
              </>
            ) : (
              <>
                <div
                  className="syk-medium-text syk-textmargin"
                  onClick={() => setActiveTitle("strategy")}
                >
                  Strategy
                </div>
              </>
            )}

            {activeTitle === "design" ? (
              <>
                <div className="syk-medium-text syk-textmargin syk-blue-text">
                  Design
                </div>
                <motion.div
                  className="syk-small-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={transition}
                >
                  We create responsive websites and apps that look and work
                  great on computers, tablets, and mobile devices. We develop
                  rich internet applications in iOS, Android, and Windows
                </motion.div>
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
                <motion.div
                  className="syk-small-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={transition}
                >
                  We create responsive websites and apps that look and work
                  great on computers, tablets, and mobile devices. We develop
                  rich internet applications in iOS, Android, and Windows
                </motion.div>
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
          <div
            className="syk-image-container"
            // data-aos="zoom-in"
          >
            <img
              src={
                activeTitle === "strategy"
                  ? image1
                  : activeTitle === "design"
                  ? image2
                  : image3
              }
            />
          </div>
        </div>
        {/* </div> */}
      </motion.div>
      {/* <div className="syk-extra-bottom"></div> */}
    </motion.div>
  );
}

export default SamyakPart1;
