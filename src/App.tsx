import "./App.css";
import { ThemeProvider } from "styled-components";
import { Apptheme } from "./utils/Theme";
import NavBar from "./components/NavBar";
import Hero from "./components/coverpage";
import Skills from "./components/skills";
import Education from "./components/education";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Body, Wrapper } from "./AppStyle";
import Experience from "./components/experience";
import Project from "./components/project";
import Certificate from "./components/certificate";

const App = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  return (
    <ThemeProvider theme={darkTheme ? Apptheme["dark"] : Apptheme["light"]}>
      <BrowserRouter>
        <NavBar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
            <Certificate />
          </Wrapper>

          <Project />
          <Education />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
