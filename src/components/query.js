import React, { useState } from "react"
import axios from "axios"


export const Query = (props) =>{

    const [name, setName] = useState("");

    /*
    const submit = (e) => {
        e.preventDefault();
        console.log("from front->",name)
        axios.post("http://localhost:9002/query", name)
        .then(res => {
            alert(res.data.message['rest_name'])
            alert(res.data.message.rest_addr)
        })
    }
    */

    const submit = (e) =>{
        e.preventDefault();
        props.restoFinder(name)
    }




    return(
        <>  
            <form onSubmit={submit}>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            <input type="submit"></input>
            </form>
        </>
    )
}