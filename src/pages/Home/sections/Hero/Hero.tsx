import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/avatar.png";
import { Container, Grid, Typography } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
function Hero() {
  const StyledHero = styled("div")(() => ({
    minHeight: "100vh",
    display: "flex",
    alignItems: "center"
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
    border: '1px solid #fff'
  }));

  const TypewriterContainer = styled("div")(() => ({
    height: "auto",
    "@media (max-width: 600px)": {
      height: "100px", // Altura do TypeWriter para telas pequenas
    },
    "@media (min-width: 601px) and (max-width: 960px)": {
      height: "130px", // Altura do TypeWriter para telas médias
    },
    "@media (min-width: 961px)": {
      height: "80px", // Altura do TypeWriter para telas grandes
    },
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography color="white" variant="h1" textAlign="center">
              Hello, I'm Verônica França
            </Typography>
            <Typography color="white" variant="h2" textAlign="center">
              <TypewriterContainer>
                <TypeAnimation
                  sequence={[
                    'A Software Engineer',
                    1000,
                    'A Web Developer',
                    1000,
                    'A Tech Enthusiast',
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ display: 'inline-block', color: "white", fontWeight: 'bold' }}
                />
              </TypewriterContainer>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
}

export default Hero;
