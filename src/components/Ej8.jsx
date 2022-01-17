import React from "react";
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { useState } from "react";

const Ej8 = () => {
  // function FormExample() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");

  console.log(validated);

  const validateGral = () => {
    if (name !== "" && surName !== "") {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //let alertIn = document.getElementById("alertIn");
    //let alertVa = document.getElementById("alertVa");
    let alertIR = document.getElementById("alertIR");
    let alertVR = document.getElementById("alertVR");
    const form = event.currentTarget;

    if (form.checkValidity() !== false&&validateGral()) {
      
        // event.stopPropagation();
        // alert("Completar todos los datos");
        // //alertIn.className = "alert alert-danger";
        // alertIR.className = "alert alert-danger text-center mt-2";
        // console.log(validated);

        alert("Los datos fueron enviados con exito!");
        // alertIn.className = "d-none";
        alertIR.className = "d-none";
        //alertVa.className = "alert alert-success";
        alertVR.className = "alert alert-success text-center mt-2";
        console.log(validated);

      
    } else {
    //   alert("Los datos fueron enviados con exito!");
    //   // alertIn.className = "d-none";
    //   alertIR.className = "d-none";
    //   //alertVa.className = "alert alert-success";
    //   alertVR.className = "alert alert-success text-center mt-2";
    //   console.log(validated);

      event.stopPropagation();
      alert("Completar todos los datos");
      //alertIn.className = "alert alert-danger";
      alertIR.className = "alert alert-danger text-center mt-2";
      console.log(validated);



    }

    setValidated(true);
    console.log(validated);
  };

  return (
    <div>
      <Container>
        <div className="text-center bg-dark text-white">
          <h1>Formulario</h1>
        </div>
        <div className="bg-dark text-white py-5">
          <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nombre"
                    defaultValue=""
                    onChange={(e) => {
                      setName(e.target.value.trimStart());
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu Nombre
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Apellido"
                    defaultValue=""
                    onChange={(e) => {
                      setSurName(e.target.value.trimStart());
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu Apellido
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Nombre de Usuario</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Nombre de Usuario"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor ingresa un nombre de usuario
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control type="text" placeholder="Ciudad" required />
                  <Form.Control.Feedback type="invalid">
                    Por favor selecciona una ciudad
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>Provincia</Form.Label>
                  <Form.Control type="text" placeholder="Provincia" required />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa una Provincia
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Codigo Postal</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Codigo Postal"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa el Codigo Postal
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Estas de acuerdo con los terminos y condiciones?"
                  feedback="Debes dar tu concentimiento"
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit" variant="danger">
                Enviar Datos
              </Button>
            </Form>
          </Container>
        </div>
        {/* <div className="alert alert-danger d-none" id="alertIn">
          <h2>Debe completar todos los datos</h2>
        </div>
        <div className="alert alert-success d-none" id="alertVa">
          <h2>Los datos fueron enviados</h2>
        </div> */}
        <Alert variant="danger" className="d-none" id="alertIR">
          Debe completar todos los campos
        </Alert>
        <Alert variant="success" className="d-none" id="alertVR">
          Datos enviados correctamente
        </Alert>
      </Container>
    </div>
  );
};

export default Ej8;
