import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Search from "../../../assets/search.png";
import Resume from "../../../assets/resume.png";
import Review from "../../../assets/review.svg";
const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    marginTop: "7%",
  },
  root: {
    maxWidth: 345,
    boxShadow:
      " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
  },
  media: {
    height: 300,
  },
  cardTitle: {
    color: "#0000007a",
  },
}));
export default function Cards() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container>
        <Grid container justifyContent="center" className={classes.main} spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Search}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <h3 className={classes.cardTitle}>Zgjidh template</h3>
                  <p>Zgjidh template ne formation EuroPass ose CV Moderne</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Resume}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <h3 className={classes.cardTitle}>Ploteso te dhenat</h3>
                  <p>Ploteso te dhenat, pjesen tjeter na i lini ne</p>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Review}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <h3 className={classes.cardTitle}>Modifiko Formatin e Cv</h3>
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
