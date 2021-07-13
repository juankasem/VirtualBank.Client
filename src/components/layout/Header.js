import React from "react";
import { AppBar, Toolbar, Typography, Grid, InputBase, IconButton, Badge } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import PowerSettingNewIcon from "@material-ui/icons/PowerSettingNew";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./../../Styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center"></Typography>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase placeholder="Search" startAdornment={<SearchIcon fontSize="small" />} />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingNewIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
