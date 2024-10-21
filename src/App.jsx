
import './App.css'
import { useState } from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';
import Register from './pages/register/Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import Admin from "./pages/Admin/index"

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route exact path="/admin" element={<ProtectedRoute><Admin/></ProtectedRoute>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
