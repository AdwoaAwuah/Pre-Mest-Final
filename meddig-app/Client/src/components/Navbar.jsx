import React from 'react';
import { makeStyles } from "@material-ui/core/styles"

import {
   Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

function Navbar() {
  const classes = useStyles();
  const [state, setState]= React.useState(false)
const toggleDrawer = (open) =>( event) =>{
  setState(open)
}

  return (
   
      <div style={{ display: 'flex' }}>
         <button onClick={toggleDrawer(true)}><MenuIcon  color="primary"/> </button>
        <Drawer
          style={{ width: '220px' }}
          variant="temporary"
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/Aboutcovid" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About Covid19"} />
              </ListItem>
            </Link>
          </List>
          <Link to="/assessment" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AssessmentIcon/>
                </ListItemIcon>
                <ListItemText primary={"Check Symptoms"} />
              </ListItem>
            </Link>
            <Link to="/hospital" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <LocalHospitalIcon />
                </ListItemIcon>
                <ListItemText primary={"Search Hospitals"} />
              </ListItem>
            </Link>
            <Link to="/login" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItem>
            </Link>
            <Link to="/signup" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={"Signup"} />
              </ListItem>
            </Link>
          
        </Drawer>
        </div>
  );
}
export default Navbar;