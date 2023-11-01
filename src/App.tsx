// @ts-nocheck
import { css } from "@emotion/css";
import React, { useRef, useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { Container, Title, Frame, Content, toggle } from "./styles";
import * as Icons from "./icons";
import NavBar from "./components/NavBar";

const divStyle = css`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  @media (min-width: 630px) {
    height: 120px;
    position: relative;
    width: 550px;
  }
`;

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

const Tree = React.memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    name: string | JSX.Element;
  }
>(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });
  // @ts-ignore
  const Icon =
    Icons[`${children ? (isOpen ? "Minus" : "Plus") : "Close"}SquareO`];
  return (
    <Frame>
      <Icon
        style={{ ...toggle, opacity: children ? 1 : 0.3 }}
        onClick={() => setOpen(!isOpen)}
      />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? "auto" : height,
        }}
      >
        <a.div ref={ref} style={{ y }} children={children} />
      </Content>
    </Frame>
  );
});

export default function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Tree name="main" defaultOpen>
          <Tree name="hello world" />
          <Tree name={<span>welcome to my portfolio website 👋</span>} />
          <Tree name="click to see some really some really cool stuff">
            {/* <Tree name="nice, keep clicking" /> */}
            <Tree name="things I made with my bare hands">
              <Tree name="here are some apps 👇" style={{ color: "#950808" }} />
              <Tree name="hinge will happen [React]">
                <div className={divStyle}>
                  <div
                    style={{
                      whiteSpace: "normal",
                    }}
                  >
                    A{" "}
                    <a
                      href="https://hinge-will-happen.vercel.app"
                      rel="noreferrer"
                      target="_blank"
                    >
                      website
                    </a>{" "}
                    showing a visual representation of your Hinge data and
                    interactions, built using React and Chart JS. Saw this on
                    the Tik Tok and thought yeah I could do that. No data is
                    stored because.... GDPR.
                  </div>

                  {/* <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "black",
                      borderRadius: 5,
                    }}
                  /> */}
                </div>
              </Tree>
              {/* <Tree name="hinge will happen [React]">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 300,
                    padding: 10,
                  }}
                >
                  <img
                    alt="gallery"
                    src="https://media.giphy.com/media/WiKqkqPYYLrJxExq0d/giphy.gif"
                  />
                </div>
              </Tree> */}
              <Tree name="trade runner [Python, Django & MySql]">
                <div className={divStyle}>
                  <div
                    style={{
                      whiteSpace: "normal",
                    }}
                  >
                    Built this{" "}
                    <a
                      href="https://github.com/Odrakes1992/CRYP-3PO"
                      rel="noreferrer"
                      target="_blank"
                    >
                      project
                    </a>{" "}
                    during my coding bootcamp; a crypto trading bot connected to
                    the Binance exchange which automates the trading of
                    cryptocurrencies in your wallet based on preset strategies.
                  </div>

                  {/* <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "black",
                      borderRadius: 5,
                    }}
                  /> */}
                </div>
              </Tree>
              <Tree name="studio augusto [Typescript, HTML & Css]">
                <div className={divStyle}>
                  <div
                    style={{
                      whiteSpace: "normal",
                    }}
                  >
                    A{" "}
                    <a
                      href="https://www.studioaugusto.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      website
                    </a>{" "}
                    for the visual arts studio, Studio Augusto, showcasing a
                    gallery of their beautiful and artistic shoots.
                  </div>

                  {/* <div
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "black",
                      borderRadius: 5,
                    }}
                  /> */}
                </div>
              </Tree>
              {/* <Tree
                name="[insert other website here]"
                style={{ color: "#37ceff" }}
              /> */}
            </Tree>
            {/* <Tree name="welcome" /> */}
          </Tree>
        </Tree>
      </Container>
    </>
  );
}
