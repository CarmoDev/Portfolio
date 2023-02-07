import {useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { Container, Loading } from "./styles";

import {ReactComponent as Logo} from "../../assets/icons/logo.svg";

import Menu from "../Menu";
import Footer from "../Footer";
import Paths from "../../Routes";

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <BrowserRouter>
      {isLoading ? ( 
        <Loading>
          <Logo/>
        </Loading>
      ) : (
        <Container>
          <Menu />
          <Paths />
          <Footer />
        </Container>
      )}
    </BrowserRouter>
  );
}

export default App;

