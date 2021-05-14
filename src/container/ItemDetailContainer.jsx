import {useState, useEffect} from 'react'
import getItem from '../GetItem'
import ItemList from '../ItemList'
const ItemDetailContainer =() =>{

    const [data, setData]=useState([])

    useEffect(() => {
        getItem().then(res=>{
            setData(res)
            console.log("data", data)
        })
        
    })

    return(
        <ItemList data={data}/>
    )
}

export default ItemDetailContainer