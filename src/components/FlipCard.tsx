import { css } from "@emotion/css";
import React, { useState } from "react";
import { useSpring, a } from "@react-spring/web";

const cStyle = css`
  position: absolute;
  max-width: 500px;
  max-height: 500px;
  width: 350px;
  height: 200px;
  cursor: pointer;
  will-change: transform, opacity;
`;

const frontStyle = css`
  background-image: url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop);
  background-size: cover;
`;

const backStyle = css`
  background-image: url(https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop);
  background-size: cover;
`;

const containerStyle = css`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
`;

export default function FlipCard() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className={containerStyle} onClick={() => set((state) => !state)}>
      <a.div
        className={`${cStyle} ${backStyle}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />
      <a.div
        className={`${cStyle} ${frontStyle}`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      />
    </div>
  );
}
