import Hero from "./sections/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import About from "./sections/About/About"

function Home() {


    return (
      <>
      <Navbar />
      <div className="container">
        <Hero/>
        <About/>
        </div>
      </>
    )
  }
  
  export default Home
  