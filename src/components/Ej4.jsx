import React from "react";
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
const Ej4 = () => {
    const [tarea, setTarea]=useState('');
    const [listaTareas, setListaTareas]=useState([]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setListaTareas([...listaTareas, tarea]);
        setTarea('');
    }
  return (
    <div className="">
      <Container className="border border-2 border-danger text-center">
        <h1>Bienvenido</h1>
        <h3>Ingresa tus tareas</h3>
        <div className="text-start">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 d-flex">
            
            <Form.Control className="me-3" type="text" placeholder="Ingrese la tarea" onChange={(e)=>{
                setTarea(e.target.value.trimStart())
            }} value={tarea}/>   
            <Button variant="dark" type="submit">
            Guardar
          </Button>         
          </Form.Group>         
        </Form>
        <ListaTareas listaTareas={listaTareas}></ListaTareas>       
        </div>
      </Container>
    </div>
  );
};

export default Ej4;
