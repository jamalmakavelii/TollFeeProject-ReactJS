import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import { useEffect, useState } from "react";
import Logout from './components/Logout';
import axios from "axios";
import AddTollgate from './components/AddTollgate';
import Tollgates from './components/Tollgates';
import EditTollgate from './components/EditTollgate';
import DeleteTollgate from './components/Deletetollgate';


function App() {
  const [role, setRole] = useState('')

  axios.defaults.withCredentials = true;
  useEffect (() => {
    axios.get('http://localhost:3001/auth/verify')
    .then(res => {
     if(res.data.login) {
       setRole(res.data.role)  
     } else {
      setRole('')
     }
     console.log(res)
    }).catch(err => console.log(err))
  }, [])

  return (
   <BrowserRouter>
   <Navbar role = {role} />
   <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/tollgates" element={<Tollgates role = {role}/>}></Route>
     <Route path="/login" element={<Login setRoleVar = {setRole} />}></Route>
     <Route path="/dashboard" element={<Dashboard />}></Route>
     <Route path="/adduser" element={<AddUser />}></Route>
     <Route path="/logout" element={<Logout setRole = {setRole} />}></Route>
     <Route path="/addtollgate" element={<AddTollgate />}></Route>
     <Route path="/tollgate/:id" element={<EditTollgate />}></Route>
     <Route path="/delete/:id" element={<DeleteTollgate />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
