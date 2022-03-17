import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import Shoesdata from "./data";
import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import ItemDetail from "./Detail";

function App() {
  let [shoes, shoesChange] = useState(Shoesdata);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoesSHop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <Jumbotron />
          <ItemContainer shoes={shoes} />
        </Route>

        <Route path="/detail">
          <ItemDetail />
        </Route>

        <Route path="/:id">
          <div>dasdasd</div>
        </Route>
      </Switch>
    </div>
  );
}

function Jumbotron() {
  return (
    <div className="Jumbo">
      <div className="Jumbo-div">
        <h1>20% Season Off</h1>
        <p>
          신발 할인합니다. 개쌉니다 진짜로 안사면 개손해임 근데 퀄리티는
          기대하지마셈 나도 돈있으면 이런건 안삼 대신 싸긴 개싸니까 돈없으면
          이거나사셈
        </p>
        <p>
          <Button variant="primary" size="lg" disabled>
            Primary button
          </Button>{" "}
        </p>
      </div>
    </div>
  );
}
function ItemContainer(props) {
  const tmp = props.shoes;
  return (
    <div className="container">
      <div className="row">
        {tmp.map((a, i) => {
          return (
            <div className="col-md-4" key={i}>
              <img src={a.src} alt="" className="shoe" />
              <h4>{a.title}</h4>
              <p>
                {a.content} & {a.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
