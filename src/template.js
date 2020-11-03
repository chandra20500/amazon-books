import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Topbar from "./topbar";
import ComputerIcon from '@material-ui/icons/Computer';
import FunctionsIcon from '@material-ui/icons/Functions';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function Template() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Topbar />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
           <ListItem button>
             <ListItemIcon>
               <WhatshotIcon />
             </ListItemIcon>
             <ListItemText primary="Top Seller"/>
           </ListItem>
           <ListItem button>
             <ListItemIcon>
               <ComputerIcon />
             </ListItemIcon>
             <ListItemText primary="Computer Science"/>
           </ListItem>
           <ListItem button>
             <ListItemIcon>
               <FunctionsIcon />
             </ListItemIcon>
             <ListItemText primary="Mathematics"/>
           </ListItem>
           <ListItem button>
             <ListItemIcon>
               <AcUnitIcon />
             </ListItemIcon>
             <ListItemText primary="Others"/>
           </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Template;
