import {AppBar, Box, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import * as React from "react";
import {useContext} from "react";
import {Brightness4} from "@mui/icons-material";
import {Brightness7} from "@mui/icons-material";
import {ColorModeContext} from "../App";

export default function TopBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext)

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position={"static"} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FugitiveSnail: A Super Snail Helper
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  )

}