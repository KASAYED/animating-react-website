import React from "react";
import "./App.css";
import black from "./black.png";
import blue from "./blue.png";
import { Card, CardGrid, Container, Header } from "./Elements";
import green from "./green.png";
import Menu from "./Menu";
import purp from "./purp.png";

function App() {
  return (
    <div>
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </div>
  );
}

export default App;
