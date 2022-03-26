import React from "react";

import { useToaster } from "./toast";
export const Input = () => {
  const { toast } = useToaster();
  const currentId = React.useRef<number>(0);
  return (
    <div>
      <button
        onClick={() => {
          currentId.current = currentId.current + 1;
          const id = currentId.current;
          toast({
            id: id.toString(),
            message: "Hello"
          });
        }}
      >
        Toast
      </button>
    </div>
  );
};
