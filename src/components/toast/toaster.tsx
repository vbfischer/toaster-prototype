import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
  ToasterType,
  ToasterContextType,
  ToastType,
  ToastOptions
} from "./types";

import { ToasterContainer } from "./styles";
import { Toast } from "./toast";

const ToasterContext = React.createContext<ToasterContextType | undefined>(
  undefined
);
ToasterContext.displayName = "ToasterContext";

export const useToaster = () => {
  const toasterCtx = React.useContext(ToasterContext);

  if (!toasterCtx) {
    throw new Error(
      "Unable to find Toaster!. Ensure your component is wrapped in a <Toaster/>"
    );
  }

  const { toasts, setToasts } = toasterCtx;

  const toast = (newToast: ToastType, opts?: ToastOptions) => {
    console.log("OPTIONS", newToast);

    setToasts((t) => [...t, newToast]);
  };

  const dismissToast = (id: string) => {
    setToasts((t) => t.filter((i) => i.id === id));
  };

  return {
    toasts,
    toast,
    dismissToast
  };
};

export const Toaster = (props: React.PropsWithChildren<ToasterType>) => {
  const { position = "top-right", children } = props;

  const [toasts, setToasts] = React.useState<ToastType[]>([]);

  const wrapperProps = {
    position
  };

  const toasterCtxValue = {
    toasts,
    setToasts
  };

  const handleToastClick = (id: string) => {
    console.log(`DELETEING ${id}`);
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToasterContext.Provider value={toasterCtxValue}>
      <ToasterContainer {...wrapperProps}>
        <TransitionGroup>
          {toasts.map((t) => (
            <CSSTransition
              key={t.id}
              timeout={400}
              classNames="toast"
              unmountOnExit={true}
            >
              <Toast id={t.id} onClick={handleToastClick} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToasterContainer>
      {children}
    </ToasterContext.Provider>
  );
};
