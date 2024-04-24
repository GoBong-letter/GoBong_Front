import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './Pages/Splash';
import Login from './Pages/Login/Login'
import Join from './Pages/Join/Join'
import JoinProfile from './Pages/Join/JoinProfile';
import JoinAbout from './Pages/Join/JoinAbout'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/joinProfile" element={<JoinProfile />} />
                <Route path="/joinAbout" element={<JoinAbout />} />
            </Routes>
        </Router>
    )
}

export default App;

