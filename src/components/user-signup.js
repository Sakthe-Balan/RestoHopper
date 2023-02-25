import React, { useState } from "react"
import axios from "axios"

export const UserSignUp = (props) =>{

    const [uname, setName] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState({
        name:uname,
        email:email
    })

    const submit = (e) =>{
        e.preventDefault();
        console.log("from front->",uname)
        console.log("from front->",email)
        var msg = {name:uname, email:email}
        axios.post("http://localhost:9002/signup", msg)
        .then((res) => {alert(res.data.message)})
    }



    return(
        <div className="container w-50 shadow-lg p-3 mb-5 bg-white rounded">
        <form onSubmit={submit}>
          <h1>Sign up</h1>
          <div className="container shadow p-3 mb-5 bg-white rounded">
            <div className="container">
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="uname" placeholder="name@example.com" value={uname} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="uname">Enter your name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="uname" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="uname">Enter your email id</label>
              </div>
            </div>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    )
}