import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Ensure path is correct
import Signup from './components/Signup';
import Login from './components/login';


const App: React.FC = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/signup" element={<Signup/>} /> */}
            <Route path="/home" element={<HomePage/>} />
            
        </Routes>
    </div>
  );
};

export default App;
 
// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./components/HomePage";
// import Login from "./components/login";
// import Signup from "./components/Signup";

// const App: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/home" element={<HomePage />} />
//       <Route path="*" element={<Navigate to="/" />} /> {/* Fallback for undefined routes */}
//     </Routes>
//   );
// };

// export default App;
