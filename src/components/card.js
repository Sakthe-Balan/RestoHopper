// import React from 'react'

// export const Card = ({rst}) => {
//     return (
//         <>
//             <div>
//                 <h4>{rst.rname}</h4>
//                 <h4>{rst.radd}</h4>
//                 <h4>{rst.rph}</h4>
//                 <h4>{rst.remail}</h4> 
//             </div>
//         </>
//     )
// }

import React from 'react'
import { Link } from "react-router-dom";

export const Card = ({ rst }) => {
    return (
        <>
            <div className="card container" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title"><Link to='/restopage/query'>{rst.rname}</Link></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{rst.remail}</h6>
                    <p className="card-text">{rst.desc}</p>
                </div>
            </div>
        </>
    )
}
