import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import AddMealPage from './containers/AddMealPage';
import EditMealPage from './containers/EditMealPage';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-meal" element={<AddMealPage />} />
                <Route path="/edit-meal/:id" element={<EditMealPage />} />
            </Routes>
        </Router>
    );
};

export default App;
