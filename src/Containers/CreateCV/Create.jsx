import React from "react";
import Carosel from "../../Components/Carosel/Carosel";
import Grid from '@mui/material/Grid';
// import AdSense from "react-ssr-adsense";

export default function Create() {
  return (
    <Grid container>
      <Grid item md={3}>
        {/* <AdSense.Google client="ca-pub-7292810486004926" slot="7806394673" /> */}
        {/* <AdSense
          client="ca-pub-7292810486004926"
          slot="7806394673"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
          layoutKey="-gw-1+2a-9x+5c"
        />{" "} */}
        {/* <AdSense.Google
          client="ca-pub-6835959278488464"
          slot="7806394673"
          style={{ display: "block" }}
          layout="in-article"
          format="fluid"
        /> */}
      </Grid>
      <Grid item md={9}>
        <Carosel />
      </Grid>
    </Grid>
  );
}
