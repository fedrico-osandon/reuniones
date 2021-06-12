import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Spinner, Form, Button, NavLink, Alert, Modal} from 'react-bootstrap'
import { getFirestore } from './firebase'
import firebase from 'firebase/app'
import NavBar from './Navbar'
import './Form.css'

const Formulario = () =>  {

    const [formData, setFormData]= useState(initialValueForm)
    //const [cantPersonas, setCantPersonas] = useState()
    const [loading, setLoading] = useState(true)
    const [loadingForm, setLoadingForm] = useState(true)
    const [vacantes, setVacantes] = useState(true)
    const {id} = useParams()
    console.log(id);
    const db = getFirestore()
    const queryReuniones = db.collection('reuniones').doc(id)

    const handlerChange= (e) =>  {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    

    //queryReuniones.doc(id)
                //*************************************
    // hago la llamada a la base de datos para verificar vacantes
                //*************************************

    useEffect(() => {
        
     queryReuniones               
        .get()
        .then(res => {
            if(res.data().cantidadPersonas == 0 ){
                setVacantes(false)
            }
            
            setLoading(false)    
            
        })
        
    })

    
    const handlerSubmit = (e) => {
        e.preventDefault()
        setLoadingForm(false)
        queryReuniones             
        .get()
        .then(res => {    
            const cantPersonas = (res.data().cantidadPersonas) 
            setLoadingForm(true)
            if (cantPersonas >= 1) { 
                queryReuniones.update({
                    cantidadPersonas: cantPersonas-1                  
                })            
                db.collection('personas')
                .add({...formData, idreunion:id, fechaCreacion: firebase.firestore.Timestamp.fromDate(new Date())})
                .then(res=> {
                    setFormData(initialValueForm)
                }).catch(err => console.log(err))
                
            }else{
                setVacantes(false)
            }
            
            
        })
    }

    
    if(loading){
        return <h1>cargando</h1>
    }
    return(
        <>
        <NavBar /> 
        {
            //loading  ? <h1>...Cargando</h1> :
            
            vacantes ? 
            <>
            <Form onChange={handlerChange} onSubmit={handlerSubmit} className="mt-5 formulario">
            <h1 className="text-center">COMPLETE EL FORMULARIO</h1>
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
                { loadingForm ? 
                <button className="btn btn-primary btn-lg btn-block mt-3 boton-submit" type="submit" >
                    Enviar
                </button> :
                <Spinner animation="border" variant="success" /> 
                
                }
                
                
            </Form>                
        </>
        
             : 
             <div><Alert className="mt-4" variant="danger"  >
             Esta Reunión ya no cuenta con disponibilidad!!!
            </Alert></div>
            
           }
            
        
       
        
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