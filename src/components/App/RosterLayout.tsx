import { Box, Grid } from "@mui/material"
import React, { FC, FunctionComponent, ReactNode } from "react"

interface IRosterLayout {
  calendar: ReactNode;
  modal: ReactNode;
}

export const RosterLayout: FC<IRosterLayout> = ({
  calendar,
  modal,
}) => {

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          {calendar}
        </Grid>
        <Grid item xs={12}>
          {modal}
        </Grid>
      </Grid>
    </Box>
  )
}