import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Service from './Components/Service';
import Login from './Components/Login';
import Decide from './Components/Decide';
import Register from './Components/Register';
import Election from './Components/Election';
import Page from './Components/Page';
import Login2 from './Components/Login2';
import Voter from './Components/Voter';
import Details from './Components/Details';
import PageTable from './Components/PageTable';
import PageUpdate from './Components/PageUpdate';
function App() {
  return (
    <div>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path="/service" element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/voter' element={<Voter />} />
        <Route path="/page" element={<Page/>}/>
        <Route path='/decide' element={<Decide/>}/>
        <Route path='/election' element={<Election/>}/>
        <Route path='/login2' element={<Login2/>}/>
        <Route path="/pagetable" element={<PageTable/>}/>
        <Route path="/pageupdate" element={<PageUpdate/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;



