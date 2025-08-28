import * as React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import Hello from "./Hello";

const rootElement = document.getElementById("main");
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <Hello />);
} else {
  createRoot(rootElement).render(<Hello />);
}

/*import * as React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById("main")
);*/
