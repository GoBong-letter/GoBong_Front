import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './Pages/Splash';
import Login from './Pages/Login/Login'
import Join from './Pages/Join/Join'
import JoinProfile from './Pages/Join/JoinProfile';
import JoinAbout from './Pages/Join/JoinAbout'
import LoginPage from './Pages/Login/LoginPage'
import Home from './Pages/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/joinProfile" element={<JoinProfile />} />
                <Route path="/joinAbout" element={<JoinAbout />} />
                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App;

