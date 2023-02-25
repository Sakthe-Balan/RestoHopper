import React, {useState} from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"



export const RestoPage = (props) => {

    const { id } = useParams()
    let a = ''
    // const [resto,setResto] = useState([])


    console.log(localStorage.getItem('resto'))
    var store = JSON.parse(localStorage.getItem("resto"));
    console.log(store.rname)
    for(var i in props.restos){
        console.log(props.restos[i])
        if(props.restos[i].sno == id){
            a = props.restos[i].rname
        }
    }



    return (
        <>
            <h1>Book {id}</h1>
            <h1>name {a}</h1>
            <h1>store {store.rname}</h1>
        </>
    )
}
