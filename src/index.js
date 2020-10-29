import React from "react";
import ReactDOM from "react-dom";
import ComplexGrid from "./book";
/* material UI */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

function App() {
  return <ComplexGrid />;
}

ReactDOM.render(<App />, document.getElementById("root"));
