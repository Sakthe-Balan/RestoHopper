import React, { useState } from "react"
import axios from "axios"


export const RestSignUp = (props) =>{

    const [rname, setRname] = useState("")
    const [radd, setRadd] = useState("")
    const [desc, setDesc] = useState("")
    const [rph, setRph] = useState("")
    const [remail, setRemail] = useState("")

    const [oname, setOname] = useState("")
    const [oph, setOph] = useState("")

    const [open, setOpen] = useState("")
    const [close, setClose] = useState("")

    const [rimg, setRimg] = useState("")
    const [menu, setMenu] = useState("")

    const submit = (e) =>{
      e.preventDefault();
      /*var markedCheckbox = document.getElementsByName('rest-type')
      for (var checkbox of markedCheckbox){  
          alert(checkbox.value)  
      }*/
      console.log("from front->",rname)
      console.log("from front->",radd)
      var msg = {rname:rname, radd:radd, desc:desc, rph:rph, remail:remail, oname:oname, oph:oph, open:open, close:close, rimg:rimg, menu:menu}
      axios.post("http://localhost:9002/restosignup", msg)
      .then((res) =>{
        alert(res.data.message)
      })
    }



    return(
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bootstrap demo</title>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        {/* 
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.0.0/mdb.min.css" rel="stylesheet"/> */}
        <div className="container w-50 shadow-lg p-3 mb-5 bg-white rounded">
          <form onSubmit={submit}>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <div className="container shadow p-3 mb-5 bg-white rounded">
              <h3>Restaurant details</h3>
              <div className="container">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={rname} onChange={(e) => setRname(e.target.value)}/>
                  <label htmlFor="floatingInput">Enter the restaurant name</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '100px', width: '230px'}} value={radd} onChange={(e) => setRadd(e.target.value)}/>
                  <label htmlFor="floatingTextarea">Enter the restaurant address</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: '100px', width: '260px'}} value={desc} onChange={(e) => setDesc(e.target.value)}/>
                  <label htmlFor="floatingTextarea">Enter the restaurant description</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={rph} onChange={(e) => setRph(e.target.value)}/>
                  <label htmlFor="floatingInput">Enter the restaurant pnone number</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={remail} onChange={(e) => setRemail(e.target.value)}/>
                  <label htmlFor="floatingInput">Enter the restaurant email address</label>
                </div>
              </div>
            </div>
            <div className="container shadow p-3 mb-5 bg-white rounded">
              <h3>Restaurant owner credentials</h3>
              <div className="container">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={oname} onChange={(e) => setOname(e.target.value)}/>
                  <label htmlFor="floatingInput">Outlet owner full name</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={oph} onChange={(e) => setOph(e.target.value)}/>
                  <label htmlFor="floatingInput">Outlet owner phone number</label>
                </div>
              </div>
            </div>
            <div className="container shadow p-3 mb-5 bg-white rounded">
              <h3>Outlet type and timings</h3>
              <div className="container">
                <h5>Select option(s) which best describe your outlet</h5>
                <div className="container mb-0" style={{width: '500px'}}>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-type"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Cafe
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-type"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Fast food
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-type"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          backery
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-type"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Food court
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-type"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Fine dine
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-type"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Chinese
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-type"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          North Indian
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-type"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          South Indian
                        </label>
                      </div>
                    </div>
                    <div className="col">
                    </div>
                  </div>
                </div>
                <h5>Restaurant operational hours</h5>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Opens at" aria-label="Opens at" value={open} onChange={(e) => setOpen(e.target.value)}/>
                  <span className="input-group-text">to</span>
                  <input type="text" className="form-control" placeholder="Closes at" aria-label="Closes at" value={close} onChange={(e) => setClose(e.target.value)}/>
                </div>
                <h5>Mark the holidays</h5>
                <div className="container" style={{width: '500px'}}>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-off"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Monday
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-off"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Tuesday
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-off"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          wednesday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-off"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Thursday
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-off"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Friday
                        </label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-off"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Saturday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" name="rest-off"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Sunday
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container shadow p-3 mb-5 bg-white rounded">
              <h3>Upload images</h3>
              <div className="container">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={rimg} onChange={(e) => setRimg(e.target.value)}/>
                  <label htmlFor="floatingInput">Enter the drive link for restaurant images</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={menu} onChange={(e) => setMenu(e.target.value)}/>
                  <label htmlFor="floatingInput">Enter the drive link for menu images</label>
                </div>
              </div>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
}