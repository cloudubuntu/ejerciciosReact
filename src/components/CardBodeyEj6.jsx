import React from "react";
import { Card, Button, Col,Row } from "react-bootstrap";
const CardBodeyEj6 = (props) => {
  return (
    <div className=" col-sm-12 col-md-4 my-3">
        
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.color}</Card.Title>
          <Card.Text style={{ width: "18rem" }} className="">
            Aqui va el color
          </Card.Text>
          <Button variant="danger" onClick={()=>{
              props.erase(props.color)
          }}>Borrar</Button>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default CardBodeyEj6;
