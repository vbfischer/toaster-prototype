import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

import {
  ToasterOptions,
  ToasterContextType,
  ToastState,
  ToastOptions,
  Id,
} from './types';

import { ToasterContainer } from './styles';
import { Toast } from './toast';

const ToasterContext = React.createContext<ToasterContextType | undefined>(
  undefined
);
ToasterContext.displayName = 'ToasterContext';

export const useToaster = () => {
  const toasterCtx = React.useContext(ToasterContext);

  if (!toasterCtx) {
    throw new Error(
      'Unable to find Toaster!. Ensure your component is wrapped in a <Toaster/>'
    );
  }

  const { toasts, setToasts } = toasterCtx;

  const toast = (component: React.ReactNode, options: ToastOptions) => {
    const { id = uuidv4(), newestOnTop = false, duration } = options;

    const newToastState: ToastState = {
      ...options,
      newestOnTop,
      id,
      component,
      timer: duration
        ? setTimeout(() => dismissToast(id), duration)
        : undefined,
    };

    if (newestOnTop) {
      setToasts((t) => [newToastState, ...t]);
    } else {
      setToasts((t) => [...t, newToastState]);
    }
  };

  const dismissToast = (id: Id) => {
    console.log('DISMISSING TOAST....');
    setToasts((t) => t.filter((i) => i.id !== id));
  };

  return {
    toasts,
    toast,
    dismissToast,
  };
};

export const Toaster = (props: React.PropsWithChildren<ToasterOptions>) => {
  const { position = 'top-right', children } = props;

  const [toasts, setToasts] = React.useState<ToastState[]>([]);

  const wrapperProps = {
    position,
  };

  const toasterCtxValue = {
    toasts,
    setToasts,
  };

  const handleToastClick = (id: Id) => {
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
              <Toast id={t.id} onClick={handleToastClick}>
                {t.component}
              </Toast>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToasterContainer>
      {children}
    </ToasterContext.Provider>
  );
};
