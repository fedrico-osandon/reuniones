import {useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Form, Button} from 'react-bootstrap'
import { getFirestore } from './firebase'
import firebase from 'firebase/app'
const Formulario = () =>  {

    const [formData, setFormData]= useState(null)
    const {id} = useParams()

    const handlerChange= (e) =>  {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log('e', formData)
    }

    const handlerSubmit = (e) => {
       e.preventDefault()
       console.log('enviar')

        const db = getFirestore()
        db.collection('personas').add({...formData, idreunion:id, fecha: firebase.firestore.Timestamp.fromDate(new Date())}).then(res=> setFormData(formData))
     }
    return(

    
        <Container>
            
                <form onChange={handlerChange} onSubmit={handlerSubmit}>
                    <Form.Control name="name" size="lg" type="text" required placeholder="Nombre y Apellido" />
                    <br />
                    <Form.Control name="email"size="lg" type="text" placeholder="email" />
                    <br />
                    <Form.Control name="tel" size="lg" type="text" placeholder="Telefono" />
                    <br />
                    {/* <Form.Control size="lg" type="text" placeholder="Cantidad de personas que asistiran" /> */}
                    <hr/>
                    <Button type="submit" >Enviar</Button>
                </form>
            
        </Container>
    )
}

export default Formulario