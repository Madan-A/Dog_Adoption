import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage2'; 
import Signup from './components/Signup';
import Login from './components/login';
import VeterinaryServices from './components/VeterinaryServices';
import Adoption from './components/Adoption';
import DogProfile from './components/DogProfile';
import FinalAdoption from './components/finalAdoption';
import Grooming from './components/grooming';
import GroomingForm from './components/groomingForm';

const App: React.FC = () => {
  return (
    <div>     
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/veterinary" element={<VeterinaryServices/>} />
            <Route path="/adoption" element={<Adoption/>} />
            <Route path="/dog-profile/:id" element={<DogProfile />} />
            <Route path="/personalinfo" element={< FinalAdoption/>} />
            <Route path="/grooming" element={< Grooming/>} />
            <Route path="/groomingForm" element={< GroomingForm/>} />
        </Routes>       
    </div>
  );
};

export default App;
 


