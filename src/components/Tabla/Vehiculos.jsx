import {
  InfoCircleFilled,
  PlusCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import TablaVehiculos from "./TablaVehiculos";
import ModalVehiculos from "./ModalVehiculos";

function Vehiculos() {
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
                <FloatingLabel
                  controlId="floatingInput"
                  label="Tarjeta de circulación"
                  className="mb-3"
                >
                  <Form.Control
                    className="outline-none"
                    placeholder="Buscar tarjeta de circualción"
                    aria-label="Tarjeta de circulación"
                    aria-describedby="basic-addon2"
                    onChange={HandleEventInputName}
                    value={name}
                  />
                </FloatingLabel>
                <Button
                  variant="primary"
                  onClick={HandleClickSearch}
                  className="mb-3"
                >
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
      </Container>
      {/* MOSTRAR MODAL PARA AGREGAR UN NUEVO VEHICULO */}
      <ModalVehiculos show={show} handleShow={handleShow} handleClose={handleClose} />
    </>
  );
}

export default Vehiculos;
