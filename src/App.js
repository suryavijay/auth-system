import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import OneTimeLink from './components/OneTimeLink';
import Time from './components/Time';
import Kickout from './components/Kickout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/one-time-link" element={<OneTimeLink />} />
                    <Route path="/time" element={<Time />} />
                    <Route path="/kickout" element={<Kickout />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
