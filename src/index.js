import React from "react";
import ReactDOM from "react-dom";
import Grid from "./grid";
import Topbar from "./appbar";

function Index() {
  return (
    <>
      <Topbar />
      <Grid />
    </>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
