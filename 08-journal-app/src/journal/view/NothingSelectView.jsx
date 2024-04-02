import { StartOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(97vh - 54px)",
        backgroundColor: "primary.main",
        padding: 4,
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StartOutlined sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white " variant="h5">
          selecciona o crea una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};