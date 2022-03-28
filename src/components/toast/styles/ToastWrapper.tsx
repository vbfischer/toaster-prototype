import styled from "styled-components";
import { bounceOutRight, bounceInRight } from "../../animations";

export const ToastWrapper = styled.div`
  box-shadow: 0px 0px 6px #97999b;
  padding: 12px;

  &.toast-enter {
    opacity: 0;
  }

  &.toast-enter-active {
    opacity: 1;
    animation: ${bounceInRight} 700ms;
  }

  &.toast-exit {
    opacity: 1;
  }

  &.toast-exit-active {
    opacity: 0;
    animation: ${bounceOutRight} 700ms;
  }
`;
