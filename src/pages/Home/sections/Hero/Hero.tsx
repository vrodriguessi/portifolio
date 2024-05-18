import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/avatar.png";
import { Container, Grid, Typography } from "@mui/material";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const StyledHero = styled("div")(() => ({
    backgroundColor: 'black',
    padding: '20px 0'
  }));

  const StyledImg = styled("img")(() => ({
    width: "30%",
    borderRadius: "50%"
  }));

  return (
    <StyledHero>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={8}>
            <Typography color="primary" variant="h4">
              Hello, I'm Verônica França
            </Typography>
            <Typography color="primary" variant="h5">
              <TypeAnimation
                sequence={[
                  'A Software Engineer',
                  1000,
                  'A Frontend Developer',
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
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
}

export default Hero;
