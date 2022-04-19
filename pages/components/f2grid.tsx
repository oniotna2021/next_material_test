import * as React from "react";
import Grid from "@mui/material/Grid";

import styles from "@/pages/index.module.css";

//create our styles
const classes = {
  root: {
    flexGrow: 1
  },
};
export default function f2grid () {
  return (
    <div style={classes.root}>
      <Grid container spacing={3}>
        {/*Create items with different breakpoints */}
        {/*For example,This item will be 12 units wide on extra small screens */}
        <Grid item xs={12}>
          <p className={styles.bgcolorb}>xs12</p>
        </Grid>
        {/*This item will be 12 units on extra small screens */}
        {/*But will be 6 units on small screens */}
        <Grid item xs={12} sm={6}>
          <p className={styles.bgcolorb}>xs12 sm6</p>
        </Grid>
        <Grid item xs={12} sm={6}>
        <p className={styles.bgcolorg}>xs12 sm6</p>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
        <p className={styles.bgcolorb}>xs6 sm4 md3</p>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
        <p className={styles.bgcolorg}>xs6 sm4 md3</p>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
        <p className={styles.bgcolorb}>xs6 sm4 md3</p>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
        <p className={styles.bgcolorg}>xs6 sm4 md3</p>
        
        </Grid>
      </Grid>
    </div>
  );
}