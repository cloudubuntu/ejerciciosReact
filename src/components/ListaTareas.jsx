import React from 'react';
import { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <div>
            <ListGroup>
              {
                  props.listaTareas.map((value, index)=>
                    //   
                    <ListGroup.Item key={index}>{props.value}</ListGroup.Item>
                  )
              }
            </ListGroup>
        </div>
    );
};

export default ListaTareas;