// import './App.css';
// import axios from "axios"
// import React, {useState} from 'react';
// import {Query} from "./components/query"
// import {Card} from "./components/card"
// import {CardArea} from "./components/cards-area"
// import {RestSignUp} from "./components/rest-signup"
// import {UserSignIn} from "./components/user-signin"
// import {UserSignUp} from "./components/user-signup"
// import {RestoPage} from "./components/resto-page"
// import {QueryBundel} from "./components/query-bundel"
// import HomePage from "./components/home-page"
// import Resto_page from "./components/resto-page1"



// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

// function App() {

//   const restoFinder = (name) => {
//     console.log("from front->",name)
//     axios.post("http://localhost:9002/query", name)
//     .then(res => {
//         alert(res.data.message['rname'])
//         alert(res.data.message.radd)

//         let sno = restos[restos.length - 1].sno + 1;
        
//         const myResto = {
//           sno: sno,
//           rname:res.data.message['rname'],
//           radd:res.data.message.radd,
//           rph:res.data.message.rph,
//           remail:res.data.message.remail,
//           desc:res.data.message.desc,
//           oname:res.data.message.oname,
//           oph:res.data.message.oph,
//           open:res.data.message.open,
//           close:res.data.message.close,
//         }

//         // setRestos([...restos, myResto]);
//         setResto({...resto, sno:sno});
//         setResto({...resto, 
//           rname:res.data.message.rname,
//           radd:res.data.message.radd,
//           rph:res.data.message.rph,
//           remail:res.data.message.remail,
//           desc:res.data.message.desc,
//           oname:res.data.message.oname,
//           oph:res.data.message.oph,
//           open:res.data.message.open,
//           close:res.data.message.close,
//         })
//         // setResto({...resto, radd:res.data.message.radd})
//         // setResto({...resto, rph:res.data.message.rph})
//         // setResto({...resto, remail:res.data.message.remail})
//         // setResto({...resto, desc:res.data.message.desc})
//         // setResto({...resto, oname:res.data.message.oname})
//         // setResto({...resto, oph:res.data.message.oph})
//         // setResto({...resto, open:res.data.message.open})
//         // setResto({...resto, close:res.data.message.close})
//         // resto = myResto
//         console.log(myResto);
//         localStorage.setItem("resto", JSON.stringify(myResto));
//         var abc = localStorage.getItem('resto');
//         console.log(abc)
//     })
//     console.log(restos)
//   }
  
//   const [resto,setResto] = useState({
//           sno: 0,
//           rname:'',
//           radd:'',
//           rph:'',
//           remail:'',
//           desc:'',
//           oname:'',
//           oph:'',
//           open:'',
//           close:'',
//   })
//   // var resto = {}
//   const [restos,setRestos] = useState([
//     {
//       sno:1,
//       rname:"Subway",
//       radd:"Orion Mall, 26 1,Food Counter #A5, SaucePa",
//       rph:" 080 2268 2117",
//       remail:"subway@gmail.com",
//       desc:"Subway is an American multinational fast food restaurant franchise that specializes in submarine sandwiches, wraps, salads and drinks.",
//       oname:"Rohan",
//       oph:"9922222727",
//       open:"11 am",
//       close:"10:30 pm"

//     },
//     {
//       sno:2,
//       rname:"Dominos' Pizza",
//       radd:"Orion Mall, 26 1,Food Counter #A5, SaucePan",
//       rph:" 080 2268 2117",
//       remail:"dominospizza@gmail.com",
//       desc:"Domino's Pizza, Inc., trading as Domino's, is an American multinational pizza restaurant chain founded in 1960",
//       oname:"Rajesh",
//       oph:"9922222728",
//       open:"11 30am",
//       close:"12 pm"

//     },
//     {
//       sno:3,
//       rname:"Pizza Hut",
//       radd:"No 87, Chord Rd ",
//       rph:" 080 2268 2117",
//       remail:"PizzaHut@gmail.com",
//       desc:"Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas ",
//       oname:"aditya",
//       oph:"9922222729",
//       open:"11 30am",
//       close:"12 pm"

//     }
//   ])




//   return (
//     <>
//       {/* <Query restoFinder={restoFinder}/> */}
//       {/* <CardArea restos={restos}/> */}
//       <Router>
//         <Routes>
//             <Route exact path="/" element={<HomePage/>}/>
//             <Route exact path="/restopage/:id" element={<Resto_page restos={restos}/>}/>
//             <Route exact path="/user/signin" element={<UserSignIn/>}/>
//             <Route exact path="/user/signup" element={<UserSignUp/>}/>
//             <Route exact path="/resto/signup" element={<RestSignUp/>}/>
//             <Route exact path="/query" element={<QueryBundel restoFinder={restoFinder} restos={restos} resto={resto}/>}/>
//             <Route path="/books/:id" element={<RestoPage restos={restos} resto={localStorage.getItem('resto')}/>}/>
//         </Routes>
//       </Router>
//       {/* <UserSignIn/> */}
//     </>
//   );
// }

// export default App;


import './App.css';
import axios from "axios"
import React, {useState} from 'react';
import {Query} from "./components/query"
import {Card} from "./components/card"
import {CardArea} from "./components/cards-area"
import {RestSignUp} from "./components/rest-signup"
import {UserSignIn} from "./components/user-signin"
import {UserSignUp} from "./components/user-signup"
import {RestoPage} from "./components/resto-page"
import {QueryBundel} from "./components/query-bundel"
import HomePage from "./components/home-page"
import Resto_page from "./components/resto-page1"



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {

  const restoFinder = (name) => {
    console.log("from front->",name)
    axios.post("http://localhost:9002/query", name)
    .then(res => {
        // alert(res.data.message['rname'])
        // alert(res.data.message.radd)

        let sno = restos[restos.length - 1].sno + 1;
        
        const myResto = {
          sno: sno,
          rname:res.data.message['rname'],
          radd:res.data.message.radd,
          rph:res.data.message.rph,
          remail:res.data.message.remail,
          desc:res.data.message.desc,
          oname:res.data.message.oname,
          oph:res.data.message.oph,
          open:res.data.message.open,
          close:res.data.message.close,
          rimg:res.data.message.rimg,
          menu:res.data.message.menu
        }

        setRestos([...restos, myResto]);
        setResto({...resto, sno:sno});
        setResto({...resto, 
          rname:res.data.message.rname,
          radd:res.data.message.radd,
          rph:res.data.message.rph,
          remail:res.data.message.remail,
          desc:res.data.message.desc,
          oname:res.data.message.oname,
          oph:res.data.message.oph,
          open:res.data.message.open,
          close:res.data.message.close,
        })
        // setResto({...resto, radd:res.data.message.radd})
        // setResto({...resto, rph:res.data.message.rph})
        // setResto({...resto, remail:res.data.message.remail})
        // setResto({...resto, desc:res.data.message.desc})
        // setResto({...resto, oname:res.data.message.oname})
        // setResto({...resto, oph:res.data.message.oph})
        // setResto({...resto, open:res.data.message.open})
        // setResto({...resto, close:res.data.message.close})
        // resto = myResto
        console.log(myResto);
        localStorage.setItem("resto", JSON.stringify(myResto));
        var abc = localStorage.getItem('resto');
        console.log(abc)
    })
    console.log(restos)
  }
  
  const [resto,setResto] = useState({
          sno: 0,
          rname:'',
          radd:'',
          rph:'',
          remail:'',
          desc:'',
          oname:'',
          oph:'',
          open:'',
          close:'',
  })
  // var resto = {}
  const [restos,setRestos] = useState([
    {
      sno:1,
      rname:"Subway",
      radd:"Orion Mall, 26 1,Food Counter #A5, SaucePa",
      rph:" 080 2268 2117",
      remail:"subway@gmail.com",
      desc:"Subway is an American multinational fast food restaurant franchise that specializes in submarine sandwiches, wraps, salads and drinks.",
      oname:"Rohan",
      oph:"9922222727",
      open:"11 am",
      close:"10:30 pm",
      rimg:"https://drive.google.com/uc?export=view&id=107BduI7CLDvCrVWo_ZsJ06vdT0CnG13q",
      menu:"https://drive.google.com/uc?export=view&id=1NZW0LNpwPQ7Nq9K8VIfgs3sk5mxBvUHy"
    },
    {
      sno:2,
      rname:"Dominos' Pizza",
      radd:"Orion Mall, 26 1,Food Counter #A5, SaucePan",
      rph:" 080 2268 2117",
      remail:"dominospizza@gmail.com",
      desc:"Domino's Pizza, Inc., trading as Domino's, is an American multinational pizza restaurant chain founded in 1960",
      oname:"Rajesh",
      oph:"9922222728",
      open:"11 30am",
     close:"12 pm",
     rimg:"https://drive.google.com/uc?export=view&id=107BduI7CLDvCrVWo_ZsJ06vdT0CnG13q",
     menu:"https://drive.google.com/uc?export=view&id=1NZW0LNpwPQ7Nq9K8VIfgs3sk5mxBvUHy"

    },
    {
      sno:3,
      rname:"Pizza Hut",
      radd:"No 87, Chord Rd ",
      rph:" 080 2268 2117",
      remail:"PizzaHut@gmail.com",
      desc:"Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas ",
      oname:"aditya",
      oph:"9922222729",
      open:"11 30am",
      close:"12 pm",
      rimg:"https://drive.google.com/uc?export=view&id=107BduI7CLDvCrVWo_ZsJ06vdT0CnG13q",
      menu:"https://drive.google.com/uc?export=view&id=1NZW0LNpwPQ7Nq9K8VIfgs3sk5mxBvUHy"
    },
    {
      sno:4,
      rname:"Papa Johns",
      radd:"No 87, Chord Rd ",
      rph:" 080 2268 2117",
      remail:"PapaJohns@gmail.com",
      desc:"It is the fourth largest pizza delivery restaurant chain in the United States, with headquarters in Louisville, Kentucky.",
      oname:"aditya",
      oph:"9922222729",
      open:"11 30am",
      close:"12 pm",
      rimg:"https://drive.google.com/uc?export=view&id=107BduI7CLDvCrVWo_ZsJ06vdT0CnG13q",
      menu:"https://drive.google.com/uc?export=view&id=1NZW0LNpwPQ7Nq9K8VIfgs3sk5mxBvUHy"
    },
    {
      sno:5,
      rname:"Toscano",
      radd:"No 87, Chord Rd ",
      rph:" 080 2268 2117",
      remail:"PizzaHut@gmail.com",
      desc:"Fusing the best of old and new world Italian cuisine, Toscano offers an eclectic menu from gourmet pizzas to multi-course dinners.",
      oname:"Bharat",
      oph:"9922222689",
      open:"11 30am",
      close:"12 pm",
      rimg:"https://drive.google.com/uc?export=view&id=107BduI7CLDvCrVWo_ZsJ06vdT0CnG13q",
      menu:"https://drive.google.com/uc?export=view&id=1NZW0LNpwPQ7Nq9K8VIfgs3sk5mxBvUHy"
    },
    {
      sno:6,
      rname:"Pasta street",
      radd:"whitefield",
      rph:" 080 2268 2117",
      remail:"PastaStreet@gmail.com",
      desc:"Pasta Street delivers Corporate Lunch Box to your doorstep",
      oname:"Jagdeesh",
      oph:"9923332729",
      open:"11 30am",
      close:"12 pm",
      rimg:"https://drive.google.com/uc?export=view&id=107BduI7CLDvCrVWo_ZsJ06vdT0CnG13q",
      menu:"https://drive.google.com/uc?export=view&id=1NZW0LNpwPQ7Nq9K8VIfgs3sk5mxBvUHy"
  }

  ])




  return (
    <>
      {/* <Query restoFinder={restoFinder}/> */}
      {/* <CardArea restos={restos}/> */}
      <Router>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/restopage/:id" element={<Resto_page restos={restos}/>}/>
            <Route exact path="/user/signin" element={<UserSignIn/>}/>
            <Route exact path="/user/signup" element={<UserSignUp/>}/>
            <Route exact path="/resto/signup" element={<RestSignUp/>}/>
            <Route exact path="/query" element={<QueryBundel restoFinder={restoFinder} restos={restos} resto={resto}/>}/>
            <Route path="/books/:id" element={<RestoPage restos={restos} resto={localStorage.getItem('resto')}/>}/>
        </Routes>
      </Router>
      {/* <UserSignIn/> */}
    </>
  );
}

export default App;