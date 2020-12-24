import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "./HeroCards.scss";
import Teplate from "../../../assets/template.svg";
const useStyles = makeStyles((theme) => ({
  main: {
    flexGrow: 1,
    marginTop: "7%",
    background: "#F0F0F1",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  img: {
    width: "70%",
  },
}));

export default function HeroCard() {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.main} justify="center" spacing={12}>
        <Grid item md={6}>
          <Container>
            <div className="wrapper-description">
              <h2>Krijoni CV Profesionale dhe e bukura brenda pak minutash</h2>
              <p>
                Përmes kësaj platforme ju mund të krijoni CV profesionale për
                vetëm 15 minuta në gjuhën shqipe. Krijimi i CV-së është shumë i
                thjeshtë përmes platformës tonë, e po ashtu platforma ka pjesë
                të cilat ju ndihmojnë të plotësoni përshkrimet e punëve që keni
                kryer.
              </p>
            </div>
            <div className="sub-main">
              <button className="button-two">
                <span>Shiko Shembujt</span>
              </button>
            </div>
          </Container>
        </Grid>
        <Grid item md={6}>
          <img src={Teplate} className={classes.img} />
        </Grid>
      </Grid>
    </>
  );
}
