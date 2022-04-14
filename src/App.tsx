import { useMenu } from "./context/menuContext";

import Header from "./components/Header";
import Menu from "./components/Menu";

import Presentation from "./pages/Presentation";
import About from "./pages/About";
import Slides from "./pages/Slides";
import Unidades from "./pages/Unidades";
import Contato from "./pages/Contato";

import { GlobalStyle, Wrapper } from "./globalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    orange: '#f15924',
    black: '#333',
    background: '#191919'
  }
}

function App() {
  const { isOpen } = useMenu()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle isOpen={isOpen}/>
      <Header />
      {isOpen ? <Menu /> : ""}
      <Wrapper>
        <Presentation />
        <About />
        <Slides />
        <Unidades />
        <Contato />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
