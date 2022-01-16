import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import CardsEj6 from "./CardsEj6";
import CardBodeyEj6 from "./CardBodeyEj6";

const Ej6 = () => {
  const [color, setColor] = useState("");
  const [listColor, setListColor] = useState(
    JSON.parse(localStorage.getItem("listColor")) || []
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde el submit");
    setListColor([...listColor, color]);
    setColor('');
  };

  const erase=(color)=>{
    let listCol=listColor.filter((colorCard)=>colorCard!==color);
    setListColor(listCol);
  };

  useEffect(()=>{
      console.log('desde el effect')
      localStorage.setItem('listColor', JSON.stringify(listColor))
  },[listColor])

  return (
    <div className="container  py-5">
      <h4>Administar Colores</h4>
      <Container>
        <Row>
          <Col sm="12" md="4" className="">
            Aqui va el color
          </Col>
          <Col sm="12" md="8" className="">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un color"
                  onChange={(e) => {
                    setColor(e.target.value.trimStart());
                  }}
                  value={color}
                ></Form.Control>
              </Form.Group>
              <div className="d-flex justify-content-end mt-3">
                <Button type="submit" variant="dark" className="">
                  Guardar
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <div className="">
          <CardsEj6 listColor={listColor} erase={erase}></CardsEj6>
        </div>
      </Container>
    </div>
  );
};

export default Ej6;
