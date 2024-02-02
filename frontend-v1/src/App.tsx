import React from 'react';
import { 
  Routes, 
  Route,
  Navigate,
} from "react-router-dom"
import Dashboard from './Dashboard';

import './App.css';
import Chapter from './Chapter';
import Practice from './Dashboard/Practice';
import UnitChapters from './Dashboard/Practice/UnitChapters';
import Login from './Shared/Login';
import Signup from './Shared/Signup';
import Challenges from './Dashboard/Challenges';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="practice" element={<Practice />}></Route>
          <Route path="challenges" element={<Challenges />} />
        </Route>
        <Route path="/chapter/:chapterId" element={ <Chapter /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="*" element={<Navigate to="/practice" />} />
      </Routes>
    </div>
  );
}

export default App;
