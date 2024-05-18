import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/avatar.png";
import { Button, Container, Grid, Typography } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

function Hero() {
  const StyledHero = styled("div")(() => ({
    backgroundColor: 'black',
    height: "100vh"
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%"
  }));

  return (
    <StyledHero>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4}>
            <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <Typography color="primary" variant="h1" textAlign="center">
              Hello, I'm Verônica França
            </Typography>
            <Typography color="primary" variant="h2" textAlign="center">
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
                style={{ display: 'inline-block', color: '#1976d2', fontWeight: 'bold' }}
              />
            </Typography>
            <Grid container>
              <Grid item xs={12} sm={6} md={4}>
                <Button>
                  <DownloadIcon></DownloadIcon>
                  Download CV
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button>
                  <EmailIcon></EmailIcon>
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
