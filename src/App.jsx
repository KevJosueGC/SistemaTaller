import {
  InfoCircleFilled,
  PlusCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  OverlayTrigger,
  Row,
  Stack,
  Tooltip,
} from "react-bootstrap";
import TablaVehiculos from "./components/Tabla/TablaVehiculos";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const tooltip = (
    <Tooltip id="tooltip">Solo debe ingresar valor numéricos</Tooltip>
  );
  const HandleEventInputName = (event) => {
    setName(event.target.value);
  };

  const HandleClickSearch = () => {
    console.log(name);
    setName("");
  };
  const [name, setName] = useState("");

  return (
    <>
      <Container className="fondo-componente">
        {/* FILA PARA EL TITULO */}
        <Row
          style={{
            textAlign: "center",
            color: "#001d66",
            fontFamily: "Segoe UI",
          }}
        >
          <Col>
            <h1>MANTENIMIENTO DE VEHICULOS</h1>
          </Col>
        </Row>

        {/* FILA PARA EL CONTROL DE BUSQUEDA Y CREAR UN NUEVO VEHICULO */}
        <Row>
          <Col xs={3}>
            <Form>
              <InputGroup className="mb-3">
                <Form.Control
                  className="outline-none"
                  placeholder="Buscar tarjeta de circualción"
                  aria-label="Tarjeta de circulación"
                  aria-describedby="basic-addon2"
                  onChange={HandleEventInputName}
                  value={name}
                />
                <Button variant="primary" onClick={HandleClickSearch}>
                  <SearchOutlined />
                </Button>
              </InputGroup>
            </Form>
          </Col>
          {/* COLUMNA PARA MOSTRAR EL ICONO DE INFORMACIÓN*/}
          <Col style={{ margin: 0, padding: 0, alignContent: "flex-start" }}>
            <OverlayTrigger placement="right" overlay={tooltip}>
              <InfoCircleFilled style={{ color: "green" }} />
            </OverlayTrigger>
          </Col>
          <Col xs={8}>
            <Button variant="primary" onClick={handleShow}>
              <PlusCircleFilled />
            </Button>
          </Col>
        </Row>

        {/* FILA PARA MOSTRAR LOS DATOS UTILIZANDO UNA TABLA */}
        <Row>
          <Col>
            <TablaVehiculos />
          </Col>
        </Row>
        {/* FILA PARA MOSTRAR LOS DATOS UTILIZANDO UNA TABLA */}
      {/*   <Row>
          <Col>
            <Container>
              <h1>AQUI VA A IR LA PAGINACIÓN</h1>
            </Container>
          </Col>
        </Row> */}
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ width: "100%" }}
        size="xl"
      >
        <Card>
          <Card.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Card.Header>
          <Card.Body>
            <Modal.Body>
              Woohoo, you are reading this text in a modal!
            </Modal.Body>
          </Card.Body>
          <Card.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={handleClose}
              style={{ marginLeft: 5 }}
            >
              Save Changes
            </Button>
          </Card.Footer>
        </Card>
      </Modal>
    </>
  );
}

export default App;
