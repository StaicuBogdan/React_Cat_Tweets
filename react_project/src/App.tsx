import React from 'react';
import './App.css';

// React Router
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

// Components
import Nav from './layout/Nav';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';


function App() {
    return (
        <Router>
            {/*<Nav/>*/}
            <Routes>
                <Route path="/home" element={<HomePage/>} />
                <Route path="/" element={<LoginPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
