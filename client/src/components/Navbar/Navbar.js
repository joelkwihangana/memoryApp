import React from "react";
import { AppBar, Avatar, Button, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";
import memories from "../../assets/memories.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          onClick={() => navigate("/")}
          className={classes.heading}
          variant="h2"
          align="center"
        >
          MemoryLane
        </Typography>
        <img className={classes.image} src={memories} alt="" height="60" />
      </div>
      <Toolbar className={classes.Toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.username} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              Logout
            </Button>
          </div>
        ) : (
          <>
            {/* <Link to="/auth"> */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/auth")}
            >
              Sign In
            </Button>
            {/* </Link> */}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
