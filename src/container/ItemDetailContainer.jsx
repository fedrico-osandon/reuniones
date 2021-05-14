import {useState, useEffect} from 'react'
//import getItem from '../GetItem'
import ItemList from '../ItemList'
import {getFirestore} from '../firebase'
import { useParams } from 'react-router-dom'

const ItemDetailContainer =() =>{

    const [data, setData]=useState([])

    const [data, setData]=useState([])
    const {idReunion = undefined} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection('reuniones')

        const query = idReunion ? itemCollection.where('idReunion', '==', idReunion) : itemCollection

        query.get().then((querySnap) => {
            if(querySnap.size === 0){
                console.log("no existen reuniones disponibles");
            }

            setData(querySnap.docs.map( doc => ({...doc.data(), id: doc.id})));
        })
        
    }, [idReunion])

    return(
        <ItemList data={data}/>
    )
}

export default ItemDetailContainer