import React, { useRef, useState } from "react";
import Carosel from "../../Components/Carosel/Carosel";
import Grid from "@material-ui/core/Grid";
import AdSense from "react-ssr-adsense";

export default function Create() {
  return (
    <Grid container>
      <Grid item md={3}>
        {/* <AdSense.Google client="ca-pub-7292810486004926" slot="7806394673" /> */}
        <AdSense
          client="ca-pub-7292810486004926"
          slot="7806394673"
          style={{ display: "block" }}
          format="auto"
          responsive="true"
          layoutKey="-gw-1+2a-9x+5c"
        />{" "}
      </Grid>
      <Grid item md={9}>
        <Carosel />
      </Grid>
    </Grid>
  );
}
