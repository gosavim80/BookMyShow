import { useState } from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import Register from './pages/register/Register';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
