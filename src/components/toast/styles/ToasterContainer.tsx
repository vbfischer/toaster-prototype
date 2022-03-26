import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";

import { ToastPosition } from "../types";

export const ToasterContainer = styled.div<{ position: ToastPosition }>`
  position: fixed;
  z-index: 9999;
  box-sizing: border-box;
  padding: 4px;
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  ${switchProp("position", {
    "top-right": css`
      top: 1em;
      right: 1em;
    `,
    "top-left": css`
      top: 1em;
      left: 1em;
    `,
    "top-center": css`
      top: 1em;
      left: 50%;
      transform: translateX(-50%);
    `,
    "bottom-right": css`
      bottom: 1em;
      right: 1em;
    `,
    "bottom-left": css`
      bottom: 1em;
      left: 1em;
    `,
    "bottom-center": css`
      bottom: 1em;
      left: 50%;
      transform: translateX(-50%);
    `
  })}
`;
