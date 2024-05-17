import styled from "@emotion/styled"

function Hero() {

    const StyledHero = styled("div")(()=>({
        backgroundColor: 'black'
    }))

    return (
      <>
        <StyledHero>
            Olá
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  