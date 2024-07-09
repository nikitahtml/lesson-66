import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MealForm from '../components/MealForm';
import axiosApi from '../axiosApi';
import '../App.css';

const AddMealPage: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        setIsLoading(true);
        try {
            await axiosApi.post('/meals.json', data);
            navigate('/');
        } catch (error) {
            console.error('Error adding meal:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="page">
            <h2>Add New Meal</h2>
            <MealForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
    );
};

export default AddMealPage;
