export const ListarVehiculos = () => {
  fetch("http://localhost:8082/gp5/v1/vehicle")
    .then((response) => response.json())
    .then((rsp) => console.log(rsp));
};

