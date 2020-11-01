import React from "react";
import ReactDOM from "react-dom";
import ComplexGrid from "./book";

import data from "./file";

/* material UI */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {data.map((book) => {
          return (
            <Grid item xs={4}>
              <ComplexGrid book={book} className={classes.paper}></ComplexGrid>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
