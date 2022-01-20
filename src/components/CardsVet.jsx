import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import ico from "./icon.ico";

const CardsVet = (props) => {
  return (
    <div className="d-flex justify-content-evenly">
      {props.citas.map((value, key) => (
        <Card style={{ width: "18rem" }} key={key} className="m-2">
          <Row className="my-2">
            <Col md="4" className="text-center">
              <Card.Img variant="ico" src={ico} alt="icono" width={50} />
            </Col>
            <Col md="8">
              <Card.Title className="">Mascota: {value.mascota}</Card.Title>
              <Card.Subtitle className="">Dueño: {value.dueño}</Card.Subtitle>
            </Col>
          </Row>
          <Card.Body>
            <Card.Text>Fecha: {value.fecha}</Card.Text>
            <Card.Text>Hora: {value.hora}</Card.Text>
            <Card.Text>Sintomas: {value.sintomas}</Card.Text>
            <div className="text-end">
              <Button variant="primary" onClick={()=>{props.errase(key)}}>Borrar Cita</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CardsVet;
