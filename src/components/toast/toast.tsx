import React from "react";
import styled, { keyframes } from "styled-components";

export const bounceOutRight = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;

export const bounceInRight = keyframes`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const ToastWrapper = styled.div`
  box-shadow: 0px 0px 6px #97999b;
  padding: 12px;

  &.toast-enter {
    opacity: 0;
  }

  &.toast-enter-active {
    opacity: 1;
    /* transition: opacity 500ms ease-in; */
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

export interface ToastProps {
  id: string;
  onClick?: (id: string) => void;
}

export const Toast = (props: ToastProps) => {
  const { id, onClick } = props;
  return <ToastWrapper onClick={() => onClick?.(id)}>Toast {id}</ToastWrapper>;
};
