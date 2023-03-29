import React from "react";
import RoutesComponent from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <RoutesComponent />
    </>
  );
}

export default App;
