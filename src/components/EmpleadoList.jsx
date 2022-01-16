import React from 'react';
import { ListGroup } from 'react-bootstrap';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = (props) => {
    return (
        <div>
            <ListGroup>
                {props.empleados.map((valor, posicion)=><EmpleadoRow key={posicion} empleado={valor}></EmpleadoRow>)}
            </ListGroup>
        </div>
    );
};

export default EmpleadoList;