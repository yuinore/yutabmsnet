import * as React from "react";
import { hydrate, render } from "react-dom";
import Hello from "./Hello";

const rootElement = document.getElementById("main");
if (rootElement.hasChildNodes()) {
  hydrate(<Hello />, rootElement);
} else {
  render(<Hello />, rootElement);
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
