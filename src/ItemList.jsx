import React from 'react'
import Card from './Card'
import {Row, Col} from 'react-bootstrap'
//import './Card.css'
const ItemList = ({data}) => {
    

    return (        
        <Row>
            
                {data.map(dato => <Card key={dato.id} datos={dato}/>)}
            
        </Row>

        
    )
}

export default ItemList