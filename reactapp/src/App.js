import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Contact from './pages/Contact';
import UserList from './components/UserList';


function App() {
  const users = [
    {
      id: 1,
      username: 'Leman',
      Age: 23
    },
    {
      id: 2,
      username: 'Nicat',
      Age: 21
    },
    {
      id: 3,
      username: 'Seid',
      Age: 17
    }
  
   
  ]
  
  return (
    <div className="App">
       
      <BrowserRouter>
      
      <Header />
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/users' element={<UserList userlist={users}/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
