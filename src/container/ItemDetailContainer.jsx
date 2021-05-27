import {useState, useEffect} from 'react'
//import getItem from '../GetItem'
import ItemList from '../ItemList'
import {getFirestore} from '../firebase'
import {Container} from 'react-bootstrap'
import '../Card.css'
const ItemDetailContainer =() =>{


    const [data, setData]=useState([])
    const [loading, setLoading] = useState(true)
    //const {id } = useParams()


    useEffect(() => {
        const db = getFirestore()
        const reunionesCollection = db.collection('reuniones')
        const query = reunionesCollection.get()

        query.then((respuesta) => {
            setData(respuesta.docs.map((doc)=> 
                ({...doc.data(), id: doc.id,fecha: doc.data().fecha.toDate().toISOString()})
            ))
            setLoading(false)    
        })
        
        
    },[])
    
//
    return(
        loading ? <h2>Cargando...</h2>: 
            <Container className="contenedorCard">
                <ItemList data={data}/>        
            </Container>
    )
}

export default ItemDetailContainer