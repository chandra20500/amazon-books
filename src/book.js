import React from "react";
import ReactDOM from "react-dom";

/* material UI */
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

function ComplexGrid() {
  const classes = useStyles();
  const [value] = React.useState(3);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://images-na.ssl-images-amazon.com/images/I/517czkIR4gL._AC_SX184_.jpg"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Ten Lessons for a Post-Pandemic World
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Fareed Zakaria
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  HardCover
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  $19.00
                </Typography>
              </Grid>
              <Grid item>
                <Rating name="read-only" value={value} readOnly />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default ComplexGrid;
