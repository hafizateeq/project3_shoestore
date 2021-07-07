import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="appBar">
        <Toolbar variant="dense">

          <Typography variant="h6" color="inherit">
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="about"><li>About</li></Link>
              <Link to="products"><li>Products</li></Link>

            </ul>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
