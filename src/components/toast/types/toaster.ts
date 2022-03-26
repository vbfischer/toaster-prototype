import React from "react";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export interface ToasterType {
  position?: ToastPosition;
}

export interface ToastType {
  id: string;
  message: string;
  position?: ToastPosition;
}

export interface ToasterContextType {
  toasts: ToastType[];
  setToasts: React.Dispatch<React.SetStateAction<ToastType[]>>;
}