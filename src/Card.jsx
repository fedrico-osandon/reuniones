import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './Card.css';
import {Link} from 'react-router-dom'

const Cards = ({datos}) => {
    
    console.log("hora: ", datos.hora)
    return(
        <Card className="card">
            <p className="header">{datos.fecha.slice(0, 10)}</p>
            <Card.Body className="card-body">
            <Card.Title>  <strong>  {datos.nombre} </strong></Card.Title>
                
                <Card.Text className="card-text">
                    <strong> Lugares disponibles: </strong> {datos.cantidadPersonas
                                      }                            
                </Card.Text>
                <Card.Text className="card-text">
                    <strong> Día:</strong> {datos.dia} {datos.hora}                            
                </Card.Text>           
                    
            </Card.Body>
            {datos.cantidadPersonas>0 ? 
                <Link to={`/reuniones/${datos.id}`} className="footer bg-success">
                    
                    <p className="inscripcion">Anotarse</p>
                </Link>
            :<div className="bg-danger footer">
                    
            <p className="">No hay lugar</p>
        </div>}
            
        </Card>
    )
}

export default Cards