import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Card.css';
import {Link} from 'react-router-dom'

const Cards = ({datos}) => {
    
    
    return(
        <Card className="card">
            <p className="header">Fecha: {datos.fecha.slice(0, 10)}{datos.cantidadPersonas<1 && ' No Hay Lugar'}</p>
            <Card.Body className="card-body">
            <Card.Title>{datos.nombre}</Card.Title>
                <Card.Text className="info">Fecha: {datos.fecha.slice(0, 10)}{datos.cantidadPersonas<1 && ' No Hay Lugar'} </Card.Text>
                <Card.Text className="info">
                    Disponibilidad de lugares {datos.cantidadPersonas>0 
                                        ? datos.cantidadPersonas 
                                        : <label className="alert alert-danger">No hay lugar</label>
                                      }
                </Card.Text>               
            </Card.Body>
            {datos.cantidadPersonas>0 && 
                <Link to={`/reuniones/${datos.id}`} className="footer">
                    <p className="inscripcion">Anotarse</p>
                </Link>
            }
            
        </Card>
    )
}

export default Cards