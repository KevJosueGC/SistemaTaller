import { Button, ButtonGroup, Col, Row, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

const TablaVehiculos = () => {

  const [vehiculos, setVehiculos] = useState([]);
  const [page, setPage] = useState(0);
  const [last, setLast] = useState(false);
  const [first, setFirst] = useState(false);
  let pagina = 0;
  let limite = 5;
  let ultimo = false;
  let primero = false;
  
  useEffect(() => {
    getVehiculos();
  }, []);

  const handleNextPage = () => {
    pagina = page;
    getVehiculos();
  }
  const handlePrevPage = () => {
    pagina = page - 2;
    getVehiculos();
  }
  
  const getVehiculos = async () => {
    const url = `http://localhost:8082/gp5/v1/vehicle?p=${pagina}&l=${limite}`;
    const respuesta = await axios.get(url);
    const datos = await respuesta.data.object;
    setVehiculos(datos.content);
    pagina = datos.number + 1;
    ultimo = datos.last;
    primero = datos.first;
    setPage(pagina);
    setLast(ultimo);
    setFirst(primero);
  }

  return (
    <div>
      <Table
        striped
        bordered
        hover
      >
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>Tarjeta de circulación</th>
            <th>Propietario</th>
            <th>Transimición</th>
            <th>Línea</th>
            <th>Color</th>
            <th>Fecha creación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo, id) => (
            <tr key={id}>
              <td>{vehiculo.registrationCard}</td>
              <td>Kevin Gonzalez</td>
              <td>{vehiculo.transmition}</td>
              <td>{vehiculo.vehicleLine}</td>
              <td>{vehiculo.color}</td>
              <td>{vehiculo.dateCreate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row style={{ alignContent: "center" }}>
        <Col>
          <ButtonGroup style={{ textAlign: "center" }}>
            <Button onClick={handlePrevPage} disabled={first ? true : false}>
              <CaretLeftFilled />
            </Button>
            <input
              style={{ textAlign: "center", width: 50 }}
              value={page}
              disabled
            ></input>
            <Button onClick={handleNextPage} disabled={last ? true: false} >
              <CaretRightFilled />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default TablaVehiculos;
