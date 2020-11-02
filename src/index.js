import React from "react";
import ReactDOM from "react-dom";
import Grid from "./grid";
import Template from "./template";

function Index() {
  return (
    <>
      <Template />
      <Grid />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
