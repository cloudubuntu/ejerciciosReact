import React from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import ico from './icon.ico';
import { useState, useEffect } from "react";
import CardsVet from "./CardsVet";
class Paciente{
    constructor(mascota, dueño, fecha, hora, sintomas){
        this.mascota=mascota;
        this.dueño=dueño;
        this.fecha=fecha;
        this.hora=hora;
        this.sintomas=sintomas;
    }
}
const RegVet = () => {
    const [mascota, setMascota]=useState('');
    const [dueño, setDueño]=useState('');
    const [fecha, setFecha]=useState('');
    const [hora, setHora]=useState('');
    const [sintomas, setSintomas]=useState('');
    const [citas, setCitas]=useState(JSON.parse(localStorage.getItem('citas'))||[]);
   
    
    const handleSubmit=(e)=>{
        let alertDg=document.getElementById('alertDg');
        let alertSc=document.getElementById('alertSc');
        let paciente;
        e.preventDefault();
        if(mascota!==''&&dueño!==''&&fecha!==''&&hora!==''&&sintomas!==''){
            paciente=new Paciente(mascota, dueño, fecha, hora, sintomas);
            console.log(paciente);
            //console.log(citas);
            setCitas([...citas, paciente]);        
            alertSc.className='text-center alert alert-success';
            setMascota('');
            setDueño('');
            setFecha('');
            setHora('');
            setSintomas('');
            
    }else{
            alertDg.className='text-center alert alert-danger';
    }
    

    }

    useEffect(()=>{
        console.log('desde el montaje');
        console.log(citas);
        localStorage.setItem('citas', JSON.stringify(citas));
    },[citas])

    useEffect(()=>{
        let noCitas=document.getElementById('noCitas');
        console.log(noCitas);
        if(citas.length>0){
            noCitas.className='d-none';
        }else{
            noCitas.className='border border-2 text-center';
        }
    },[citas]);

    const errase=(indexCita)=>{
        let newCitas=citas.filter((index)=>index!==citas[indexCita]);
        setCitas(newCitas);
    }
    
  return (
    <div>
      <Container className="border border-2">
        <h1 className="text-center">Administrador de pacientes Veterinaria</h1>

        <Row className="py-3">
          <h4 className="mb-3 border border-1">
            Llenar el formulario para crear una cita
          </h4>

          <Form onSubmit={handleSubmit}>
            <div className="bg-info p-2">
              <Form.Group className="my-2" controlId="nameMasc">
                <Row>
                  <Col md="4">
                    <Form.Label>Nombre de la mascota</Form.Label>
                  </Col>
                  <Col md="8">
                    <Form.Control
                      required
                      type="text"
                      maxLength={50}
                      placeholder="Rocky"
                      onChange={(e)=>{
                          setMascota(e.target.value.trimStart().toUpperCase());
                      }}
                      value={mascota}
                    ></Form.Control>
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group className="my-2" controlId="nameDueño">
                <Row>
                  <Col md="4">
                    <Form.Label>Nombre del dueño</Form.Label>
                  </Col>
                  <Col md="8">
                    <Form.Control
                      required
                      type="text"
                      maxLength={50}
                      placeholder="Dueño"
                      onChange={(e)=>{
                          setDueño(e.target.value.trimStart().toUpperCase());
                      }}
                      value={dueño}
                    ></Form.Control>
                  </Col>
                </Row>
              </Form.Group>

              <Row>
                <Col md="6" className="d-flex">
                  <Col md="4">
                    <Form.Label>Fecha:</Form.Label>
                  </Col>
                  <Col md="8">
                    <Form.Control required type="date" onChange={(e)=>{
                        setFecha(e.target.value.trimStart());
                    }} value={fecha}></Form.Control>
                  </Col>
                </Col>

                <Col md="6" className="d-flex">
                  <Col md="4">
                    <Form.Label>Hora:</Form.Label>
                  </Col>
                  <Col md="8">
                    <Form.Control required type="time" onChange={(e)=>{setHora(e.target.value.trimStart())}} value={hora}></Form.Control>
                  </Col>
                </Col>
              </Row>

              <Form.Group controlId="sintomas" className="my-2">
                <Row>
                  <Col md="4">
                    <Form.Label>Sintomas</Form.Label>
                  </Col>
                  <Col md="8">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      required
                      maxLength={200}
                      onChange={(e)=>{setSintomas(e.target.value.trimStart().toUpperCase())}}
                      value={sintomas}
                    ></Form.Control>
                  </Col>
                </Row>
              </Form.Group>
            </div>
            <div className="d-flex justify-content-center my-2">
              <Button
                type="submit"
                variant="primary"
                className="d-flex justify-content-center"
              >
                Agregar nueva cita
              </Button>
            </div>
            <div>
                <Alert variant='danger' className="text-center d-none" id="alertDg">Debe completar todos los campos</Alert>
            </div>
            <div>
                <Alert variant='success' className="text-center d-none" id="alertSc">La cita se cargo con exito</Alert>
            </div>
          </Form>
        </Row>
      </Container>
      <Container className="my-5 border border-2 py-3">
        <h2 className="text-center">Citas</h2>
        <h4 className="border border-2 text-center" id="noCitas">
          No hay citas
        </h4>
        <hr />
        <div className="">
        {/* <Card style={{ width: "18rem" }}>
            <Row className="my-2">
                <Col md='4' className="text-center"><Card.Img variant="ico" src={ico} alt='icono' width={50}/></Col>
                <Col md='8'><Card.Title className="">Mascota: Rocky</Card.Title>
            <Card.Subtitle className="">Dueño: Alan</Card.Subtitle></Col>
            </Row>          
          <Card.Body>            
            <Card.Text>
              Fecha: prueba
            </Card.Text>
            <Card.Text>Hora: prueba</Card.Text>
            <Card.Text>Sintomas: prueba</Card.Text>
            <div className="text-end">
            <Button variant="primary">Borrar Cita</Button>
            </div>
          </Card.Body>
        </Card> */}
        <CardsVet citas={citas} errase={errase}></CardsVet>
        </div>
      </Container>
    </div>
  );
};

export default RegVet;
