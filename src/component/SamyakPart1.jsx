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
  const [currentImage, setCurrentImage] = useState("");

  const { scrollYProgress } = useScroll({
    target: document.body,
    // offset: [0, "100%"],
    offset: ["start start", "end start"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.15], [0.8, 1]);
  const borderProgress = useTransform(scrollYProgress, [0, 0.15], [160, 0]);

  const popOutAnimation = {
    scale: [0.8, 1.2, 1],
    opacity: [0, 1],
    transition: { duration: 0.1, ease: "easeInOut" },
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.3197754749568221) {
      setActiveTitle("strategy");
    } else if (latest > 0.3197754749568221 && latest < 0.4346286701208981) {
      setActiveTitle("design");
      console.log("design");
    } else if (latest > 0.4346286701208981) {
      setActiveTitle("develop");
    } else {
    }
    console.log("Page scroll: ", latest);
    console.log(scrollYProgress.current);
  });

  const transition = { duration: 1, ease: "easeInOut" };

  useEffect(() => {
    Aos.init();
  }, []);

  // switch (activeTitle) {
  //   case "strategy":
  //     setCurrentImage(image1);
  //     break;
  //   case "design":
  //     setCurrentImage(image2);
  //     break;
  //   case "develop":
  //     setCurrentImage(image3);
  //     break;
  //   default:
  //     setCurrentImage("");
  //     break;
  // }

  useEffect(() => {
    if (activeTitle === "strategy") {
      setCurrentImage(image1);
    } else if (activeTitle === "design") {
      setCurrentImage(image2);
    } else {
      setCurrentImage(image3);
    }
  }, [activeTitle]);

  return (
    <div ref={ref} className="background-scroll">
      <motion.div
        className="syk-main-container"
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
          borderRadius: borderProgress,
        }}
      >
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
          <motion.div
            className={`syk-image-container ${currentImage ? "pop-out" : ""}`}
          >
            {currentImage && <img src={currentImage} />}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default SamyakPart1;
