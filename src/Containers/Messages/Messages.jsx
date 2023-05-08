import React from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  CssBaseline,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
} from "@mui/material";


import MoreIcon from "@mui/icons-material/MoreVert"; 


const drawerWidth = 250;

const Messages = () => {
  return (
    <Box marginTop="50px">
      {/* <CssBaseline /> */}
      <AppBar
        sx={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: drawerWidth,marginTop:50 }}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            #geheimorganisation
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          marginTop:50
        }}
        variant="permanent"
      >
        <AppBar position="static" sx={{marginTop:50}}>
          <Toolbar sx={{marginTop:50}}>
            <Typography sx={{ flexGrow: 1 }} variant="h6" noWrap>
              WeeChat
            </Typography>
            <IconButton color="inherit" edge="end">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <React.Fragment>
          <List
            dense
            subheader={<ListSubheader>WeeChat</ListSubheader>}
            style={{ padding: 0 }}
          >
            <ListItem button>
              <ListItemText primary="hackint" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="freenode" />
            </ListItem>
          </List>
          <List
            dense
            subheader={<ListSubheader>irc.hackint.org</ListSubheader>}
          >
            <ListItem button>
              <ListItemText primary="#geheimorganisation" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="#ccchh" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="#ffhh" />
            </ListItem>
          </List>
        </React.Fragment>{" "}
      </Drawer>
    </Box>
  );
};

export default Messages;
