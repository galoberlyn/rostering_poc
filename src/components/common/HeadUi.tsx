import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const HeadUi = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Rostering Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}