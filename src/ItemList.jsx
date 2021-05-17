import React from 'react'
import Card from './Card'
import {Row} from 'react-bootstrap'
import './Card.css'
const ItemList = ({data}) => {

    console.log('itemList data', data)
    

    return (        
        <Row className="ml-3">
            {data.map(dato => <Card key={dato.id} datos={dato} />)}
        </Row>
    )
}

export default ItemList