import React from 'react';
import { Button, Card, Container, Form, CardGroup } from 'react-bootstrap';
import { useState } from 'react';
const Ej10 = () => {
    const [titulo, setTitulo]=useState('');
    const [categoria, setCategoria]=useState('');
    const [descripcion, setDescripcion]=useState('');

    const validate=(titulo, descripcion, categoria)=>{
        if(titulo!==''&&descripcion!==''&&categoria!=='Seleccione una categoria'&&categoria!==''){
            console.log('se valido exitosamente'+ titulo + descripcion + categoria);
            
        }else{
            console.log('no se valido correctamente')
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        validate(titulo, descripcion, categoria);
    }
    return (
        <div>
            <h2 className='text-center mb-5'>Alta de Peliculas</h2>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='name'>
                        <Form.Label>Nombre de la pelicula</Form.Label>
                        <Form.Control type='text' minLength={3} maxLength={30} placeholder='The Lord of Rings' onChange={(e)=>{setTitulo(e.target.value.trimStart())}} required></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='description'>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type='text' as='textarea' rows={5} minLength={3} maxLength={500} placeholder='Ciencia Ficcion' onChange={(e)=>{setDescripcion(e.target.value.trimStart())}} required></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='select'>
                        <Form.Label>Categorias</Form.Label>
                        <Form.Select onChange={(e)=>{setCategoria(e.target.value)}}>
                            {/* no hace falta agregar el option asi no tome ese valor en el state */}
                            <option>Seleccione una categoria</option>                            
                            <option value="Comedia">Comedia</option>
                            <option value="Drama">Drama</option>
                            <option value="Infantil">Infantil</option>
                        </Form.Select>
                    </Form.Group>
                    <div className='text-end'>
                    <Button type='submit' variant='dark' className=''>Guardar</Button>
                    </div>
                </Form>
                <hr className='my-5' />
                <h3 className='text-center'> Lista de Peliculas</h3>
                <hr />
                <CardGroup>
                    
                    <Card className='mx-2 border border-1 border-secondary'>
                        <Card.Body>
                            <Card.Title>Titulo: </Card.Title>                            
                            <Card.Subtitle className=''>Categoria:</Card.Subtitle>
                            <hr />
                            <Card.Text><span className='lead'>Descripcion:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos minima eum neque labore. Saepe labore ipsa eaque. Explicabo necessitatibus ad, totam illo similique nam recusandae deserunt accusantium voluptatem minus quis in neque porro sit nesciunt a dignissimos! Animi maiores odio eaque cupiditate placeat eos eveniet voluptatem molestias ab culpa ducimus laudantium, corrupti minima nulla. Quasi autem esse suscipit sapiente pariatur, aliquid dolores quis qui ratione doloremque, voluptatum magnam natus nostrum officiis minus porro saepe repellat eaque! Deserunt quidem nesciunt repudiandae dolore nihil blanditiis, aperiam totam? Neque, mollitia exercitationem officiis necessitatibus, assumenda fuga nesciunt veritatis consectetur nisi saepe ratione quos quia!</Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-end'>
                            <Button type='button' variant='danger'>Borrar</Button>
                        </Card.Footer>
                    </Card>
                    <Card className='mx-2 border border-1 border-secondary'>
                        <Card.Body>
                            <Card.Title>Titulo:</Card.Title>                            
                            <Card.Subtitle className=''>Categoria:</Card.Subtitle>
                            <hr />
                            <Card.Text> Descripcion: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos minima eum neque labore. Saepe labore ipsa eaque. Explicabo necessitatibus ad, totam illo similique nam recusandae deserunt accusantium voluptatem minus quis in neque porro sit nesciunt a dignissimos! Animi maiores odio eaque cupiditate placeat eos eveniet voluptatem molestias ab culpa ducimus laudantium, corrupti minima nulla. Quasi autem esse suscipit sapiente pariatur, aliquid dolores quis qui ratione doloremque, voluptatum magnam natus nostrum officiis minus porro saepe repellat eaque! Deserunt quidem nesciunt repudiandae dolore nihil blanditiis, aperiam totam? Neque, mollitia exercitationem officiis necessitatibus, assumenda fuga nesciunt veritatis consectetur nisi saepe ratione quos quia!</Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-end'>
                            <Button type='button' variant='danger'>Borrar</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Ej10;