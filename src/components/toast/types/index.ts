import React from "react";

export type Id = number | string;

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export interface ToasterOptions {
  duration?: number;
  position?: ToastPosition;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  newestOnTop?: boolean;
}

export interface ToastOptions extends ToasterOptions {
  id?: Id;
}

export interface ToastState extends ToastOptions {
  id: Id;
  timer?: NodeJS.Timeout;
  component: React.ReactNode
}

type TimerFn = typeof setTimeout;

export interface ToasterContextType {
  toasts: ToastState[];
  setToasts: React.Dispatch<React.SetStateAction<ToastState[]>>;
}
