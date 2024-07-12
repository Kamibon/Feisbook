
import { useState } from 'react';
import './App.css';
import Friends from './components/pages/friends.tsx';
import Home from './components/pages/home.tsx';
import Login from './components/pages/login.tsx';
import Searchbar from './components/searchbar.tsx'
import Register from './components/pages/register.tsx'
import { 
  Route,
  Outlet, Routes} from 'react-router-dom'
  import {BrowserRouter} from 'react-router-dom';
   import {people} from './constants/people.js'

  
  

function App() {

  

 

  return (
  
    <div className="App h-[100%] w-[100%]">
      
        <BrowserRouter>
    
     <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home/>}/>
         </Routes>
     <Outlet />
    
    </BrowserRouter>
    
    </div>
  );
}

export default App;
