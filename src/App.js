import Skills from "./components/Skills";
import Contact from "./components/Contact";
// import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills />
      <Portfolio />
      {/* <Experience /> */}
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
