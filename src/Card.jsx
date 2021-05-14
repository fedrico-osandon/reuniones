import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Card.css';
import {Link} from 'react-router-dom'

const Cards = ({datos}) => {
    
    console.log('info Card', datos)
    return(
        <Card className="card">
            <Card.Header className="card-header">{datos.fecha}</Card.Header>
            <Card.Body className="card-body">
            <Card.Title>{datos.titulo}</Card.Title>
                <Card.Title>{datos.hora}</Card.Title>
                <Card.Text>
                Cupos {datos.cupo}
                </Card.Text>

                
            </Card.Body>
            <Link to={`/reuniones/${datos.id}`}>
                <Card.Footer className="card-footer">anotarse</Card.Footer>
            </Link>
        </Card>
    )
}

export default Cards