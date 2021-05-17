import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TableList from "./components/TableList";
import { Col, Row, Container, Button } from "react-bootstrap";
import AddContact from "./components/AddContact";

function App() {
  
  return (
    <div className="App">
      
      <Container fluid>
        <Row >
          <Col className="left" xl={3} md={4}>
          <AddContact />
          </Col>
          <Col xl={9} md={8}>
            <TableList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
