import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const IItemTarea = (props) => {
    return (
        <div className=''>
            <ListGroup.Item className='my-2 d-flex justify-content-between'>{props.value}<Button variant='dark' onClick={()=>{props.errase(props.index)}}>Borrar</Button></ListGroup.Item>
            
        </div>
    );
};

export default IItemTarea;