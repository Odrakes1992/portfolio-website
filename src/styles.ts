import styled from "styled-components";
import { animated } from "@react-spring/web";

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
  --webkit-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 630px) {
    font-size: 18px;
  }
`;

export const Frame = styled("div")`
  white-space: normal;

  @media (min-width: 630px) {
    position: relative;
    padding: 4px 0px 0px 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
    vertical-align: middle;
    color: #24292e;
    fill: #24292e;
  }
`;

export const Title = styled("span")`
  vertical-align: middle;
`;

export const Content = styled(animated.div)`
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  margin-left: 6px;
  overflow: hidden;
  will-change: transform, opacity, height;

  @media (min-width: 450px) {
    padding: 0px 0px 0px 14px;
  }
`;

export const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle",
};
