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
import WhatshotIcon from "@material-ui/icons/Whatshot";
import Topbar from "./topbar";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { useHistory } from "react-router-dom";

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
  const location = document.location.pathname;
  //const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selected, ChangeSelect] = React.useState(location);

  const [destintion, setDestination] = React.useState("dashboard2");

  /*const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };*/

  const history = useHistory();

  const routeChange = (p) => {
    let path = `${p}`;
    ChangeSelect(`${p}`);
    console.log({ selected });
    history.push(path);
  };
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
            <ListItem button selected={selected === "/BestSeller" ? 1 : 0} onClick={() => routeChange("/BestSeller")}>
              <ListItemIcon>
                <WhatshotIcon />
              </ListItemIcon>
              <ListItemText primary="Top Seller" />
            </ListItem>
            <ListItem button selected={selected === "/Adventure" ? 1 : 0} onClick={() => routeChange("/Adventure")}>
              <ListItemIcon>
                <DirectionsBikeIcon />
              </ListItemIcon>
              <ListItemText primary="Adventure" />
            </ListItem>
            <ListItem button selected={selected === "/Fiction" ? 1 : 0} onClick={() => routeChange("/Fiction")}>
              <ListItemIcon>
                <FlashOnIcon />
              </ListItemIcon>
              <ListItemText primary="Fiction" />
            </ListItem>
            <ListItem button selected={selected === "/Biography" ? 1 : 0} onClick={() => routeChange("/Biography")}>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Biography" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Template;
