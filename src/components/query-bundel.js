// import React from 'react'
// import {Query} from "./query"
// import {Card} from "./card"
// import {CardArea} from "./cards-area"

// export const QueryBundel = (props) => {
//     return (
//         <>
//             <Query restoFinder={props.restoFinder}/>
//             <CardArea restos={props.restos}/> 
//             {/* <Card rst={props.resto} key={props.resto.sno}/> */}
//         </>
//     )
// }


import React from 'react'
import {Query} from "./query"
import {Card} from "./card"
import {CardArea} from "./cards-area"

export const QueryBundel = (props) => {

    console.log("query->",props.resto)
    return (
        <>
            <Query restoFinder={props.restoFinder}/>
            {/* <CardArea restos={props.restos}/>  */}
            {/* <div className='container w-50 shadow-lg rounded p-100'> */}
            <Card rst={props.resto} key={props.resto.sno}/>
            {/* </div> */}
        </>
    )
}
