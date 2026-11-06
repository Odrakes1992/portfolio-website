import * as Icons from "../icons";

import {
  AnimatePresence as FMAnimatePresence,
  AnimatePresenceProps,
  MotionConfig,
  Variants,
  motion,
} from "framer-motion";
import { Container, Content, Frame, Row, Tech, Title, toggle } from "../styles";
import React, { createContext, useContext, useReducer, useState } from "react";

import { NavBar } from "../components";
import { css } from "@emotion/css";

// TS < 5.1 rejects components typed as returning `undefined`; re-type it.
const AnimatePresence = FMAnimatePresence as unknown as React.FC<
  React.PropsWithChildren<AnimatePresenceProps>
>;

const divStyle = css`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  white-space: normal;
  @media (min-width: 630px) {
    position: relative;
    width: 550px;
  }
`;

// Project data
const projects = [
  {
    name: "hinge will happen",
    tech: "React",
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
    name: "government information filing tool",
    tech: "Typescript, Python, FastApi, Xml",
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
    name: "trade runner",
    tech: "Python, Django & MySql",
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
    name: "studio augusto",
    tech: "Typescript, HTML & Css",
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
    name: "otis tax",
    tech: "Typescript, Node.js",
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

// The tree is centred, so its width changing (a row opening or finishing
// closing) shifts it sideways. A layout animation smooths that out, but it
// only runs when the wrapper re-renders — so trees "nudge" it whenever their
// size is about to change.
const LayoutNudge = createContext<() => void>(() => {});

const layoutTransition = { type: "spring", bounce: 0, duration: 0.4 } as const;

// Height animates to "auto" natively in framer-motion — no measuring needed.
// Children stagger in on open and out (in reverse) on close.
const contentVariants: Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { type: "spring", bounce: 0, duration: 0.4 },
      opacity: { duration: 0.2 },
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { type: "spring", bounce: 0, duration: 0.3 },
      opacity: { duration: 0.2 },
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

// Each row inherits "open"/"closed" from its parent Content.
const rowVariants: Variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -8 },
};

interface TreeProps {
  name: React.ReactNode;
  tech?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  defaultOpen?: boolean;
  /** Pass isOpen + onToggle to control the tree from a parent. */
  isOpen?: boolean;
  onToggle?: () => void;
}

const Tree: React.FC<TreeProps> = ({
  children,
  name,
  tech,
  style,
  defaultOpen = false,
  isOpen,
  onToggle,
}) => {
  const [localOpen, setLocalOpen] = useState(defaultOpen);
  const open = isOpen ?? localOpen;
  const toggleOpen = onToggle ?? (() => setLocalOpen((o) => !o));
  const expandable = children != null;
  const nudgeLayout = useContext(LayoutNudge);

  const handleClick = () => {
    toggleOpen();
    nudgeLayout();
  };

  const Icon = !expandable
    ? Icons.CloseSquareO
    : open
      ? Icons.MinusSquareO
      : Icons.PlusSquareO;

  const label = (
    <>
      <motion.span
        style={{ display: "inline-flex" }}
        animate={{ rotate: open ? 180 : 0 }}
        whileTap={expandable ? { scale: 0.85 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Icon style={{ ...toggle, opacity: expandable ? 1 : 0.3 }} />
      </motion.span>
      <Title data-title style={style}>
        {name}
        {tech && <Tech>[{tech}]</Tech>}
      </Title>
    </>
  );

  return (
    <Frame variants={rowVariants}>
      {expandable ? (
        <Row
          as="button"
          type="button"
          aria-expanded={open}
          onClick={handleClick}
        >
          {label}
        </Row>
      ) : (
        <Row>{label}</Row>
      )}
      <AnimatePresence initial={false} onExitComplete={nudgeLayout}>
        {open && expandable && (
          <Content
            key="content"
            variants={contentVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {children}
          </Content>
        )}
      </AnimatePresence>
    </Frame>
  );
};

const ProjectList: React.FC = () => {
  // Only one project open at a time
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <>
      {projects.map((project) => (
        <Tree
          key={project.name}
          name={project.name}
          tech={project.tech}
          isOpen={openProject === project.name}
          onToggle={() =>
            setOpenProject((current) =>
              current === project.name ? null : project.name,
            )
          }
        >
          <motion.div variants={rowVariants} className={divStyle}>
            {project.description}
          </motion.div>
        </Tree>
      ))}
    </>
  );
};

export default function Home() {
  const [, nudgeLayout] = useReducer((n: number) => n + 1, 0);

  return (
    // Respects the OS "reduce motion" setting
    <MotionConfig reducedMotion="user">
      <NavBar />
      <Container>
        <LayoutNudge.Provider value={nudgeLayout}>
          <motion.div layout="position" transition={layoutTransition}>
            <Tree name="main" defaultOpen>
              <Tree name="hello world" />
              <Tree name={<span>welcome to my portfolio website 👋</span>} />
              <Tree name="click to see some really some really cool stuff">
                <Tree name="things I made with my bare hands" defaultOpen>
                  <Tree
                    name="here are some apps 👇"
                    style={{ color: "#950808" }}
                  />
                  <ProjectList />
                </Tree>
              </Tree>
            </Tree>
          </motion.div>
        </LayoutNudge.Provider>
      </Container>
    </MotionConfig>
  );
}
