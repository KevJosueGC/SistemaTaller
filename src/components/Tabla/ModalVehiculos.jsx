/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Modal,
  Row,
} from "react-bootstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";

const showSwal = () => {
  withReactContent(Swal).fire({
    text: "Guardado exitosamente",
    icon: "success",
  });
};

function ModalVehiculos(props) {
  const { show, handleClose } = props;

  const [formData, setFormData] = useState({
    tarjetaCirculacion: "",
    dpiCliente: "",
    tipoTransmisionAutomatico: false,
    tipoTransmisionMecanico: false,
    tipoPlaca: "Tipo de placa",
    numeroPlaca: "",
    chasis: "",
    cilindros: "",
    linea: "",
    color: "",
  });

  const onChangeTransimision = (e) => {
    if(e.target.id === 'automatico'){
        console.log("TRANSMISION AUTOMATICA")
        setFormData({ ...formData, tipoTransmisionAutomatico: e.target.checked })
        setFormData({ ...formData, tipoTransmisionMecanico: false })
    }else if(e.target.id === 'mecanico'){
        console.log("TRANSMISION MECANICA")
        console.log(formData.tipoTransmisionAutomatico)
        console.log(formData.tipoTransmisionMecanico)
        console.log(e.target.checked)
        setFormData({ ...formData, tipoTransmisionMecanico: e.target.checked })
        setFormData({ ...formData, tipoTransmisionAutomatico: false })
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    showSwal();
  };

  return (
    <Modal show={show} onHide={handleClose} style={{ width: "105%" }} size="xl">
      <Card
        style={{ background: "#efeff8" }}
        onClickCapture={() => console.log("CLICKEASTE FUERA DEL CARD")}
      >
        <Card.Header style={{ textAlign: "center", color: "#001d66" }}>
          <Modal.Title>AGREGAR VEHÍCULO</Modal.Title>
        </Card.Header>
        <Form onSubmit={handleOnSubmit}>
          <Card.Body>
            <Modal.Body>
              <Row>
                <Col xs={3}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Tarjeta de circulación"
                    className="mb-3"
                  >
                    <Form.Control
                      className="outline-none"
                      placeholder=""
                      value={formData.tarjetaCirculacion}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tarjetaCirculacion: e.target.value,
                        })
                      }
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={3}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Cui propietario"
                    className="mb-3"
                  >
                    <Form.Control
                      className="outline-none"
                      placeholder=""
                      maxLength={13}
                      required
                      value={formData.dpiCliente}
                      onChange={(e) =>
                        setFormData({ ...formData, dpiCliente: e.target.value })
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      El campo de cilindros es requerido.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs={3}>
                  <Form.Label htmlFor="radioTransmision">
                    Tipo de transmisión
                  </Form.Label>
                  <Form.Check
                    inline
                    label="Automático"
                    name="group1"
                    type="radio"
                    id={"automatico"}
                    onChange={onChangeTransimision}
                    required
                  />
                  <Form.Check
                    inline
                    label="Mecánico"
                    name="group1"
                    type="radio"
                    id={"mecanico"}
                    onChange={onChangeTransimision}
                    required
                  />
                </Col>
                <Col xs={3}>
                  <Form.Select
                    size="lg"
                    className="outline-none"
                    aria-label="TipoPlaca"
                    value={formData.tipoPlaca}
                    onChange={(e) =>
                        setFormData({ ...formData, tipoPlaca: e.target.value })}
                  >
                    <option value="0">Tipo de placa</option>
                    <option value="1">P</option>
                    <option value="2">A</option>
                    <option value="3">C</option>
                    <option value="4">U</option>
                    <option value="5">M</option>
                    <option value="6">TCR</option>
                    <option value="7">TC</option>
                    <option value="7">O</option>
                    <option value="8">CD</option>
                    <option value="9">CC</option>
                    <option value="9">MI</option>
                  </Form.Select>
                </Col>
                <Col xs={3}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Número de placa"
                    className="mb-3"
                  >
                    <Form.Control
                      className="outline-none"
                      placeholder=""
                      value={formData.numeroPlaca}
                      onChange={(e) =>
                        setFormData({ ...formData, numeroPlaca: e.target.value })}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col xs={3}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Chasis"
                    className="mb-3"
                  >
                    <Form.Control
                      className="outline-none"
                      placeholder=""
                      value={formData.chasis}
                      onChange={(e) =>
                        setFormData({ ...formData, chasis: e.target.value })}
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={3}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Cilindros"
                    className="mb-3"
                  >
                    <Form.Control
                      className="outline-none"
                      placeholder=""
                      type="number"
                      min={1}
                      required
                      value={formData.cilindros}
                      onChange={(e) =>
                        setFormData({ ...formData, cilindros: e.target.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      El campo de cilindros es requerido.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
                <Col xs={3}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Línea"
                    className="mb-3"
                  >
                    <Form.Control
                      className="outline-none"
                      placeholder=""
                      required
                      value={formData.linea}
                      onChange={(e) =>
                        setFormData({ ...formData, linea: e.target.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      El campo de cilindros es requerido.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
                <Col xs={3}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Color"
                    className="mb-3"
                  >
                    <Form.Control
                      className="outline-none"
                      placeholder=""
                      required
                      value={formData.color}
                      onChange={(e) =>
                        setFormData({ ...formData, color: e.target.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      El campo de cilindros es requerido.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Col>
              </Row>
            </Modal.Body>
          </Card.Body>
          <Card.Footer>
            <Container style={{ alignContent: "flex-end" }}>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" style={{ marginLeft: 5 }} type="submit">
                Save Changes
              </Button>
            </Container>
          </Card.Footer>
        </Form>
      </Card>
    </Modal>
  );
}

export default ModalVehiculos;
