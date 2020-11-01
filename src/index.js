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

const bookList = [
  {
    name : 'Ten Lessons for a Post-Pandemic world',
    price : '$19',
    author : 'Fareed Zakaria',
    genre : 'Hard Cover',
    rating : '3',
    image : "https://images-na.ssl-images-amazon.com/images/I/517czkIR4gL._AC_SX184_.jpg"
  },
  {
    name : 'The Deep End',
    price : '$16',
    author : 'Ina Garten',
    genre : 'Hard Cover',
    rating : '4',
    image : "https://m.media-amazon.com/images/I/81CTXWG01OL._AC_UY327_FMwebp_QL65_.jpg"
  }
]


function App() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <Grid container spacing={3}>
    {bookList.map((book) => {return (
        <Grid item xs={4}>
          <ComplexGrid book = {book} className={classes.paper}></ComplexGrid>
        </Grid>
    )})}
    </Grid>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
