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
                maxWidth: 345,
                boxShadow:
                  " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: 300 }}
                  image={Search}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <h3 style={{ color: "#0000007a" }}>Zgjidh template</h3>
                  <p>Zgjidh template ne formation EuroPass ose CV Moderne</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card
              style={{
                maxWidth: 345,
                boxShadow:
                  " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: 300 }}
                  image={Resume}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <h3 style={{ color: "#0000007a" }}>Ploteso te dhenat</h3>
                  <p>Ploteso te dhenat, pjesen tjeter na i lini ne</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card
              style={{
                maxWidth: 345,
                boxShadow:
                  " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
              }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: 300 }}
                  image={Review}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <h3 style={{ color: "#0000007a" }}>Modifiko Formatin e Cv</h3>
                  <p>Bejeni tuajen, vetem me disa klikime larg</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
