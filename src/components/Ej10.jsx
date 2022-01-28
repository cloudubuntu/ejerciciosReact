import React from 'react';
import { Button, Card, Container, Form, CardGroup } from 'react-bootstrap';

const Ej10 = () => {
    return (
        <div>
            <h2 className='text-center mb-5'>Alta de Peliculas</h2>
            <Container>
                <Form>
                    <Form.Group className='mb-3' controlId='name'>
                        <Form.Label>Nombre de la pelicula</Form.Label>
                        <Form.Control type='text' minLength={3} maxLength={30} placeholder='The Lord of Rings'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='description'>
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type='text' as='textarea' rows={5} minLength={3} maxLength={500} placeholder='Ciencia Ficcion'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='select'>
                        <Form.Label>Categorias</Form.Label>
                        <Form.Select>
                            <option>Seleccione una categoria</option>
                            <option value="1">Comedia</option>
                            <option value="2">Drama</option>
                            <option value="3">Infantil</option>
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
                    <Card className=''>
                        <Card.Body>
                            <Card.Title>Nombre Pelicula</Card.Title>
                            <Card.Subtitle>Categoria</Card.Subtitle>
                            <Card.Text>Descripcion</Card.Text>
                        </Card.Body>
                        <Card.Footer className='text-end'>
                            <Button type='button' variant='danger'>Borrar</Button>
                        </Card.Footer>
                    </Card>
                    <Card className=''>
                        <Card.Body>
                            <Card.Header>Nombre Pelicula</Card.Header>
                            <hr />
                            <Card.Subtitle>Categoria:</Card.Subtitle>
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