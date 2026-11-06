import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled("div")`
  padding: 20px;
  font-size: 12px;
  width: 100%;
  height: 100%;
  margin: 0;

  padding-bottom: 30px;
  overflow: hidden;
  font-family: ui-monospace, monospace;
  line-height: 21px;
  -webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 630px) {
    font-size: 18px;
  }
`;

export const Frame = styled(motion.div)`
  white-space: normal;
  color: #24292e;
  fill: #24292e;

  @media (min-width: 630px) {
    position: relative;
    padding: 4px 0px 0px 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    vertical-align: middle;
  }
`;

// Shared look for both clickable (button) and static (span) rows
export const Row = styled("span")`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  max-width: 100%;
  padding: 0;
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
  text-align: left;

  &[aria-expanded] {
    cursor: pointer;
  }

  &[aria-expanded]:hover span[data-title] {
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 4px;
  }

  &:focus-visible {
    outline: 2px solid #950808;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export const Title = styled("span")`
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tech = styled("span")`
  opacity: 0.45;
  margin-left: 0.5em;
`;

export const Content = styled(motion.div)`
  border-left: 1px dashed rgba(36, 41, 46, 0.25);
  margin-left: 6px;
  overflow: hidden;

  @media (min-width: 450px) {
    padding: 0px 0px 0px 14px;
  }
`;

export const toggle = {
  width: "1em",
  height: "1em",
  flexShrink: 0,
  verticalAlign: "middle",
};
