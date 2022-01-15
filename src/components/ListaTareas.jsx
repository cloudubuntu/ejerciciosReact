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
                    // <ListGroup.Item key={index}>{value}</ListGroup.Item>
                    <ItemTarea key={index} value={value} errase={props.errase} index={index}></ItemTarea>
                  )
              }
            </ListGroup>
        </div>
    );
};

export default ListaTareas;