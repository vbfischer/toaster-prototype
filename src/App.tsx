import React from "react";
import { Toaster, Input } from "./components";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Toaster>
        <h1>Hello CodeSandbox</h1>
        <Input />
      </Toaster>
    </div>
  );
};

export default App;
