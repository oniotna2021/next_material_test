import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

export default function spinners() {
  return (
    <div>
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
    </div>
  );
}
