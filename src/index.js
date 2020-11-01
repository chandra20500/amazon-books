import React from "react";
import ReactDOM from "react-dom";
import ComplexGrid from "./book";
/* material UI */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <Grid container spacing={3}>
          <Grid item xs={4}>
            <ComplexGrid></ComplexGrid>
          </Grid>
          <Grid item xs={4}>
            <ComplexGrid className={classes.paper}></ComplexGrid>
          </Grid>
          <Grid item xs={4}>
            <ComplexGrid className={classes.paper}></ComplexGrid>
          </Grid>
          <Grid item xs={4}>
            <ComplexGrid className={classes.paper}></ComplexGrid>
          </Grid>
    </Grid>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
