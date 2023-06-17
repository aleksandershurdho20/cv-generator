import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Teplate from "../../../assets/template.svg";
import "./HeroCards.scss";
import { useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function HeroCard() {
  const navigate = useNavigate();

  return (
    <>
      <Grid
         marginTop="7%"
        background="#F0F0F1"
        flexGrow={1}
        container
        justifyContent="center"
        spacing={12}
      >
        <Grid item md={6}>
          <Container>
            <div className="wrapper-description">
              <Fade bottom>
                <h2>
                  Krijoni CV Profesionale  brenda pak minutash
                </h2>
              </Fade>
              <p>
                Përmes kësaj platforme ju mund të krijoni CV profesionale për
                vetëm 5 minuta në gjuhën shqipe. Krijimi i CV-së është shumë i
                thjeshtë përmes platformës tonë, gjithashtu platforma ka pjesë
                të cilat ju ndihmojnë të plotësoni përshkrimet e punëve që keni
                kryer.
              </p>
            </div>
            {/* <div className="sub-main">
              <button
                className="button-two"
                onClick={() => navigate("/Cv/shembuj")}
              >
                <span>Shiko Shembujt</span>
              </button>
            </div> */}
          </Container>
        </Grid>
        <Grid item md={6}>
          <img src={Teplate} style={{ width: "70%" }} />
        </Grid>
      </Grid>
    </>
  );
}
