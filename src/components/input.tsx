import React from 'react';

import { useToaster } from './toast';
export const Input = () => {
  const { toast } = useToaster();
  const currentId = React.useRef<number>(0);

  currentId.current = currentId.current + 1;
  return (
    <div>
      <button onClick={() => toast(<div>Hello {currentId.current}</div>, {
        newestOnTop: true,
        duration: 5000
      })}>Toast</button>
    </div>
  );
};
