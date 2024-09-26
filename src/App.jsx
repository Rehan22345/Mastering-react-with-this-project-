
import './App.css'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "./Components/Home.jsx"
import Edit from "./Components/Edit.jsx"
import Create from "./Components/Create.jsx"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
