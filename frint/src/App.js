import React, { useState } from 'react'
import ShowApi from './ShowApi'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header'
import AddApi from './AddApi'
import UpdateApi from './UpdateApi'
function App() {
  const [handle,setHandle]=useState("")
  //state for editing the data
const [getData, setGetData]= useState("")
  const handler=(e)=>{
    const {name,value}=e.target;
    setHandle({...handle,[name]:value});
    console.log(handle)
        }
 //for Editing Api
 async function editApi(id){
  var data=await fetch( `http://localhost:5000/edit/${id}`)
data= await data.json()
setHandle(data)
setGetData(id)
console.log(getData)

}
async function updateApi(){
  await fetch( `http://localhost:5000/update/${getData}`,{
    method:"PUT",
    headers:{
        "content-type":" application/json"
    },
    body:JSON.stringify(handle)
  })
}


// for updating Api
 
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
        <Route path="/show" element={<ShowApi editApi={editApi}/>}/>
        <Route path="/add" element={<AddApi/>}/>
        <Route path="/update" element={<UpdateApi getData={getData} handler={handler}  updateApi={updateApi}   handle={handle}/>}/>

        </Routes>

      </Router>
      
    </div>
  )
}

export default App