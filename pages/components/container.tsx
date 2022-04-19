import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import styles from "@/pages/index.module.css";

export default function container() {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container className={styles.container} fixed>
          <Box
            sx={{
              boxShadow: 3,
              width: "8rem",
              height: "5rem",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "#fff",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              p: 1,
              m: 1,
              borderRadius: 2,
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            boxShadow: 3
          </Box>

          <Box
            sx={{
              boxShadow: 3,
              width: "8rem",
              height: "5rem",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "#fff",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              p: 1,
              m: 1,
              borderRadius: 2,
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            boxShadow: 3
          </Box>

          <Box
            sx={{
              boxShadow: 3,
              width: "8rem",
              height: "5rem",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "#fff",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              p: 1,
              m: 1,
              borderRadius: 2,
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            boxShadow: 3
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
