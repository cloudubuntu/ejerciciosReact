import React from "react";
import {Card, Button, Col, Row} from "react-bootstrap";
import CardBodeyEj6 from "./CardBodeyEj6";

const CardsEj6 = (props) => {
  return (
    <div className="">
        <Row>
        {props.listColor.map((value, index)=>
            <CardBodeyEj6 key={index} color={value} erase={props.erase}></CardBodeyEj6>
        )}   
        </Row>   
    </div>
    
  );
};

export default CardsEj6;
