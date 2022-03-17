import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import Shoesdata from "./data";
import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoesChange] = useState(Shoesdata);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
      <Route exact path="/">
        <Jumbotron />
        <ItemContainer shoes={shoes} />
      </Route>

      <Route path="/detail">
        <ItemDetail />
      </Route>
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
function ItemDetail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default App;
