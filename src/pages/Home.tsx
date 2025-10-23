import * as Icons from "../icons";

import { Container, Content, Frame, Title, toggle } from "../styles";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { a, useSpring } from "@react-spring/web";

import { NavBar } from "../components";
import { css } from "@emotion/css";
import useMeasure from "react-use-measure";

const divStyle = css`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  @media (min-width: 630px) {
    position: relative;
    width: 550px;
  }
`;

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

// Context for managing single open tree
interface TreeContextType {
  openTree: string | null;
  setOpenTree: (id: string | null) => void;
}

const TreeContext = createContext<TreeContextType | null>(null);

// Project data
const projects = [
  {
    name: "hinge will happen [React]",
    description: (
      <>
        A{" "}
        <a
          href="https://hinge-will-happen.vercel.app"
          rel="noreferrer"
          target="_blank"
        >
          website
        </a>{" "}
        showing a visual representation of your Hinge data and interactions,
        built using React and Chart JS. Saw this on the Tik Tok and thought yeah
        I could do that. No data is stored because.... GDPR.
      </>
    ),
  },
  {
    name: "government information filing tool [Typescript, Python, FastApi, Xml]",
    description: (
      <>
        A{" "}
        <a
          href="https://government-information-filing-tool.vercel.app"
          rel="noreferrer"
          target="_blank"
        >
          platform
        </a>{" "}
        built to replace HMRC shutting down their own corporate accounts
        submission system. Didn't fancy paying for an alternative so built one
        instead. God bless everyone who ever had to work with xml and ixbrl
        because that has been painful as hell.
      </>
    ),
  },
  {
    name: "trade runner [Python, Django & MySql]",
    description: (
      <>
        Built this{" "}
        <a
          href="https://github.com/Odrakes1992/CRYP-3PO"
          rel="noreferrer"
          target="_blank"
        >
          project
        </a>{" "}
        during my coding bootcamp; a crypto trading bot connected to the Binance
        exchange which automates the trading of cryptocurrencies in your wallet
        based on preset strategies.
      </>
    ),
  },
  {
    name: "studio augusto [Typescript, HTML & Css]",
    description: (
      <>
        A{" "}
        <a
          href="https://www.studioaugusto.com"
          rel="noreferrer"
          target="_blank"
        >
          website
        </a>{" "}
        for the visual arts studio, Studio Augusto, showcasing a gallery of
        their beautiful and artistic shoots.
      </>
    ),
  },
  {
    name: "otis tax [Typescript, Node.js]",
    description: (
      <>
        Built this{" "}
        <a href="https://otistax.co.uk" rel="noreferrer" target="_blank">
          platform
        </a>{" "}
        for mtd (making tax digital for non tax folks), allowing users to submit
        returns directly to HMRC. NodeJs backend deployed on render and next on
        vercel with some oauth sprinkled in.
      </>
    ),
  },
];

interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultOpen?: boolean;
  name: string | JSX.Element;
  id?: string;
}

const Tree = React.memo<TreeProps>(
  ({ children, name, style, defaultOpen = false, id }) => {
    const [isOpen, setOpen] = useState(defaultOpen);
    const previous = usePrevious(isOpen);
    const [ref, { height: viewHeight }] = useMeasure({
      scroll: false,
      debounce: { scroll: 0, resize: 0 },
    });
    const context = useContext(TreeContext);

    // Handle exclusive opening for siblings
    useEffect(() => {
      if (context && id && isOpen) {
        context.setOpenTree(id);
      }
    }, [isOpen, id, context]);

    useEffect(() => {
      if (
        context &&
        id &&
        context.openTree !== id &&
        context.openTree !== null
      ) {
        setOpen(false);
      }
    }, [context?.openTree, id, context]);

    const { height, opacity, y } = useSpring({
      from: { height: 0, opacity: 0, y: 0 },
      to: {
        height: isOpen ? viewHeight : 0,
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : 10,
      },
      config: {
        mass: 1,
        tension: 280,
        friction: 36,
        clamp: false,
        precision: 0.01,
      },
      immediate: false,
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
            willChange: "height, opacity",
          }}
        >
          <a.div
            ref={ref}
            style={{ y, willChange: "transform" }}
            children={children}
          />
        </Content>
      </Frame>
    );
  }
);

const ProjectTree: React.FC<{
  name: string;
  description: React.ReactNode;
  id: string;
}> = ({ name, description, id }) => (
  <Tree name={name} id={id}>
    <div className={divStyle}>
      <div style={{ whiteSpace: "normal" }}>{description}</div>
    </div>
  </Tree>
);

export default function Home() {
  const [openTree, setOpenTree] = useState<string | null>(null);

  return (
    <>
      <NavBar />
      <Container>
        <Tree name="main" defaultOpen>
          <Tree name="hello world" />
          <Tree name={<span>welcome to my portfolio website 👋</span>} />
          <Tree name="click to see some really some really cool stuff">
            <Tree name="things I made with my bare hands">
              <Tree name="here are some apps 👇" style={{ color: "#950808" }} />
              <TreeContext.Provider value={{ openTree, setOpenTree }}>
                {projects.map((project, index) => (
                  <ProjectTree
                    key={index}
                    id={`project-${index}`}
                    name={project.name}
                    description={project.description}
                  />
                ))}
              </TreeContext.Provider>
            </Tree>
          </Tree>
        </Tree>
      </Container>
    </>
  );
}
