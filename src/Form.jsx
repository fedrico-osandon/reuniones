import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Form, Button, NavLink} from 'react-bootstrap'
import { getFirestore } from './firebase'
import firebase from 'firebase/app'
import NavBar from './Navbar'

const Formulario = () =>  {

    const [formData, setFormData]= useState(initialValueForm)
    const {id} = useParams()
    const [vacantes, setVacantes] = useState()
    const [loading, setLoading] = useState(true)

    const handlerChange= (e) =>  {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }
                //*************************************
    // hago la llamada a la base de datos para verificar vacantes
                //*************************************

    useEffect(() => {
        
        const db = getFirestore()
        const queryReuniones = db.collection('reuniones')


        queryReuniones.doc(id)               
        .get()
        .then(res => {
            console.log(res.data().cantidadPersonas);
        
            setVacantes(res.data().cantidadPersonas)
            setLoading(false)    

        
        })
        
    }, [])

    
    const handlerSubmit = (e) => {
       e.preventDefault()
       
        const db = getFirestore()

        const queryReuniones= db.collection('reuniones')
        
        queryReuniones.doc(id)               
        .get()
        .then(res => {
            console.log(res.data().cantidadPersonas);
            const cantPersonas = (res.data().cantidadPersonas) 
            setVacantes =  (res.data().cantidadPersonas) 


            if (cantPersonas > 0) {                
                queryReuniones.doc(id).update({
                cantidadPersonas: cantPersonas-1
                })            
                db.collection('personas')
                .add({...formData, idreunion:id, fechaCreacion: firebase.firestore.Timestamp.fromDate(new Date())})
                .then(res=> {
                    setFormData(initialValueForm)
                })
                alert('Se a agregado exitósamente')

                if (vacantes == 0 ){
                    <h1>hola </h1>
                }
            }else{
                alert('Plantilla completa, lo sentimos')

            }
            
        })
    }
    
    console.log('cantidad de vacantes',vacantes)
    return(
        <>
        <NavBar /> 
        {loading ? <h1> .... espere un momento por favor</h1> 
        
             : 
    
            
            <Container className="w-50 mt-5" >
            <h1 className="text-center">COMPLETE EL FORMULARIO</h1>
            <Form onChange={handlerChange} onSubmit={handlerSubmit} className="mt-5">
                <Form.Control
                    className="mt-3" 
                    name="nombre" 
                    size="lg" 
                    type="text" 
                    required 
                    placeholder="Nombre y Apellido" 
                    value={formData.nombre}
                />
                
                <Form.Control 
                    className="mt-3" 
                    name="email"
                    size="lg" 
                    type="text" 
                    placeholder="email" 
                    value={formData.email}
                />
                
                <Form.Control 
                    className="mt-3" 
                    name="tel" 
                    size="lg" 
                    type="text" 
                    placeholder="Telefono" 
                    value={formData.tel}
                />
                
                <button className="btn btn-primary btn-lg btn-block mt-3 boton-submit" type="submit" >Enviar</button>
            </Form>                
        </Container>}
            
        
       
        
    </>
)

}
const initialValueForm = {
    nombre: '',
    email: '',
    tel: '', 
idreunion: '',
asiste:2
//fechaCreacion:

}

export default Formulario