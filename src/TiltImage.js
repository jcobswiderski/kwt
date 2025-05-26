import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltImage = ({ src, alt }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.1,
      });
    }
  }, []);

  return (
    <div ref={tiltRef} style={{ width: "300px" }}>
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
    </div>
  );
};

export default TiltImage;
