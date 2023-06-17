import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Search from "../../../assets/search.png";
import Resume from "../../../assets/resume.png";
import Review from "../../../assets/review.svg";
import Message from "../../../assets/message.jpg";

export default function Cards() {
  return (
    <>
      <Container>
        <Grid
          container
          flexGrow={1}
          marginTop="7%"
          justifyContent="center"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card
              style={{
                // maxWidth: 345,
                boxShadow:
                  " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: 300 }}
                  image={Search}
                  title="Kerkim i lehte"
                />
                <CardContent>
                  <h3 style={{ color: "#0000007a",fontSize:20 }}>
                    Kërkim i lehtë i punëve
                  </h3>
                  <p>
                    Shfleto mijëra punë. Përdorni filtra të avancuar për të
                    kufizuar kërkimin tuaj dhe për të gjetur përshtatjen e
                    përsosur.
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card
              style={{
                // maxWidth: 345,
                boxShadow:
                  " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: 300 }}
                  image={Resume}
                  title="Akses ne databaze"
                />
                <CardContent>
                  <h3 style={{ color: "#0000007a",fontSize:20 }}>
                    Akses ne databazën e kandidatit
                  </h3>
                  <p>
                    Hyni në një bazë të dhënash të gjerë të individëve të
                    talentuar që kërkojnë punësim në mënyrë aktive. Kërkoni,
                    filtroni dhe lidheni me lehtësi me kandidatët e mundshëm
                    bazuar në aftësitë, kualifikimet dhe përvojën e tyre.
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card
              style={{
                // maxWidth: 345,
                boxShadow:
                  " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: 300 }}
                  image={Message}
                  title="Komunikim pa probleme"
                />
                <CardContent>
                  <h3 style={{ color: "#0000007a",fontSize:20 }}>Komunikim pa probleme</h3>
                  <p>
                    Drejtoni procesin e punësimit me mjetet tona të integruara
                    të komunikimit. Shkëmbeni mesazhe   dhe qëndroni të organizuar, të gjitha brenda platformës sonë
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
