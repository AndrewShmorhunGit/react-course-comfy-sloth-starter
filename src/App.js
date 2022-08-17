import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";

// const Button = styled.button`
//   background: green;
//   color: white;
//   margin: 5% 5%;
// `;

// const Container = styled.div`
//   background: green;
//   color: red;

//   .hero {
//     color: orange;
//     font-size: 4rem;
//     text-transform: uppercase;
//   }
// `;

function App() {
  return (
    <div>
      comfy sloth starter
      <Button>Click me</Button>
      <Container>
        <div>
          <h3>Hi!</h3>
        </div>
        <div className="hero">
          <p>Hero text</p>
        </div>
      </Container>
    </div>
  );
}

export default App;
