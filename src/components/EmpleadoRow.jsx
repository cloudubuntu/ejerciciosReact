import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = (props) => {
  return (
    <div className="">
        <ListGroup.Item>
      <Row>
        <Col md="4">
          <EmpleadoAvatar pic={props.empleado.pic}></EmpleadoAvatar>
        </Col>
        <Col md="8">
          
            <h4 className="">{props.empleado.fullName}</h4>
            <div className="d-flex">
            <h5>{props.empleado.title}</h5>
            <button className="mx-3 btn btn-primary">{props.empleado.department}</button>
            </div>          
         
        </Col>
      </Row>
      </ListGroup.Item>
    </div>
  );
};

export default EmpleadoRow;
