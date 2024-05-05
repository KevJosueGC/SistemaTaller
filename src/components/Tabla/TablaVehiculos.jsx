import { Button, ButtonGroup, Col, Row, Table } from "react-bootstrap";
import { useState, useEffect } from "react";
/* import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alerta } from "../../utils/funciones"; */
import axios from "axios";
import { CaretLeftFilled, CaretRightFilled } from "@ant-design/icons";

const TablaVehiculos = () => {
  let last;
  let first;
  let empty;
  let numberPage;

  const HandleNextRecord = (event) => {
    console.log(limite);
    console.log(pagina);
    console.log(vehiculos);
    if (pagina === 1) {
      return;
    }
  };
  const [vehiculos, setVehiculos] = useState([]);
 /*  const [pagina, setPagina] = useState(0);
  const [limite, setLimite] = useState(5); */
  let limite = 5;
  let pagina = 0;
  console.log("PAGINA 1= ", pagina);
  console.log("LIMITE 1= ", limite);
  const url = `http://localhost:8082/gp5/v1/vehicle?p=${pagina}&l=${limite}`;
  useEffect(() => {
  /*   setLimite(5);
    setPagina(0); */
    getVehiculos();
    console.log(vehiculos.pageable);
  }, []);

  const getVehiculos = async () => {
    console.log("PAGINA 2= ", pagina);
    console.log("LIMITE 2= ", limite);
    console.log(url);
    const respuesta = await axios.get(url);
    setVehiculos(respuesta.data.object.content);
    last = respuesta.data.object.last;
    first = respuesta.data.object.first;
    empty = respuesta.data.object.empty;
    numberPage = respuesta.data.object.number + 1;
    /* setLimite(); */
    console.log(last);
    console.log(first);
    console.log(empty);
    console.log(numberPage);
  };

  console.log("PAGINA 3= ", pagina);
  console.log("LIMITE 4= ", limite);
  return (
    <div>
      <Table
        striped
        bordered
        hover
        style={{
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
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
            <tr key={vehiculo.registrationCard}>
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
            <Button>
              <CaretLeftFilled />
            </Button>
            <input
              style={{ textAlign: "center", width: 50 }}
              value={numberPage}
              disabled
            ></input>
            <Button onClick={HandleNextRecord}>
              <CaretRightFilled />
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
};

export default TablaVehiculos;
