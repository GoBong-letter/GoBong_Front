import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Splash from './Pages/Splash';
import Login from './Pages/Login'
import Join from './Pages/Join'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </Router>
    )
}

export default App;