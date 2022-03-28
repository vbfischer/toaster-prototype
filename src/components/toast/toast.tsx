import React from 'react';

import { ToastWrapper } from './styles';
import { Id } from './types';

export interface ToastProps {
  id: Id;
  onClick?: (id: Id) => void;
}

export const Toast = (props: React.PropsWithChildren<ToastProps>) => {
  const { id, onClick, children } = props;
  return <ToastWrapper onClick={() => onClick?.(id)}>{children}</ToastWrapper>;
};
