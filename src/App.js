import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import styled from "styled-components";

function App() {
  

  return (
    <div className="App">
      <MainContentStyled>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
        </Routes>
      </MainContentStyled>
      
    </div>
      
  );
}

const MainContentStyled = styled.main`


`

export default App;
