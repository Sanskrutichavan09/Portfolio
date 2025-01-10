/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { throttle } from "lodash"; // Import throttle function
import styles from "./SparkingCurser.module.css"; // Ensure correct import of styles

const SparklingCursor = () => {
  useEffect(() => {
    const handleMouseMove = throttle((e) => {
      const sparkle = document.createElement("div");
      sparkle.classList.add(styles.sparkle); // Use styles from module CSS
      sparkle.style.left = `${e.pageX}px`;
      sparkle.style.top = `${e.pageY}px`;

      document.body.appendChild(sparkle);

      // Remove the sparkle after animation ends
      setTimeout(() => {
        sparkle.remove();
      }, 1200); // Make sure the timeout is a little longer than the animation duration
    }, 30); // Throttled to run at most once every 30ms

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null; // This component only adds effects, no visual UI
};

export default SparklingCursor;
