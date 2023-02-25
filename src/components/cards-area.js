import React, { useState } from "react"
import {Card} from "./card"

export const CardArea = (props) =>{
    return(
        <>
            <h3>resto List</h3>
            {  
                props.restos.map((rst)=>{
                    return (<Card rst={rst} key={rst.sno}/>)
                })
            }
        </>
    )
}


// import React, { useState } from "react"
// import {Card} from "./card"

// export const CardArea = (props) =>{
//     return(
//         <>
//             <h3>resto List</h3>
//             {  
//                 <Card rst={props.restos[props.restos.length]} key={props.restos.length}/>
//             }
//         </>
//     )
// }