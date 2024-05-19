import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/avatar.png";
import { Button, Container, Grid, Typography } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

function Hero() {
  const StyledHero = styled("div")(( ) => ({
    backgroundColor: '#1d181a',
    height: "100vh"
}));

  const StyledImg = styled("img")(() => ({
  width: "100%",
  borderRadius: "50%",
  }));

  const TypewriterContainer = styled("div")(() => ({
  height: "auto",
  "@media (max-width: 600px)": {
    height: "100px", // Altura do TypeWriter para telas pequenas
  },
  "@media (min-width: 601px) and (max-width: 960px)": {
    height: "130px", // Altura do TypeWriter para telas médias e grandes
    }
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} >
          <Grid item xs={12} sm={4} >
            <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={12} sm={8} >
            <Typography color="secondary" variant="h1" textAlign="center">
              Hello, I'm Verônica França
            </Typography>
            <Typography color="secondary" variant="h2" textAlign="center">
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
                  style={{ display: 'inline-block', color: "secondary", fontWeight: 'bold' }}
                />
              </TypewriterContainer>
            </Typography>
            <Grid container display="flex" justifyContent="center">
              <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                <Button color="secondary" variant="outlined">
                  <DownloadIcon/>
                  Download CV
                </Button >
              </Grid>
              <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                <Button color="secondary" variant="outlined">
                  <EmailIcon/>
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
}


export default Hero;
