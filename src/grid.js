import React from "react";
import ComplexGrid from "./book";
import Toolbar from "@material-ui/core/Toolbar";
import FictionData from "./fiction";
import TopSellerData from "./file";
import BiographyData from "./biography"
import AdventureData from "./adventure"

/* material UI */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    left: "20%",
    width: "75%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function renderComponent(props) {
  const name = props.GridType;
  console.log(props.GridType);
  if (name === 'Adventure') {
    return AdventureData;
  } 
  if(name === 'Fiction') {
    return FictionData;
  }
  if(name === 'BestSeller') {
    return TopSellerData;
  }
  if(name === 'Biography') {
    return BiographyData;
  }
}

function App(props) {
  const classes = useStyles();
  const data = renderComponent(props);
  return (
    <div className={classes.root}>
      <Toolbar />
      <Toolbar />
      <Grid container spacing={3}>
        {data.map((book,index) => {
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

export default App;
