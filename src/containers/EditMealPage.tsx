import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MealForm from '../components/MealForm';
import axiosApi from '../axiosApi';

const EditMealPage: React.FC = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await axiosApi.get(`/meals/${id}.json`);
                setMeal(response.data);
            } catch (error) {
                console.error('Error fetching meal:', error);
            }
        };
        fetchMeal();
    }, [id]);

    const handleSubmit = async (data) => {
        setIsLoading(true);
        try {
            await axiosApi.put(`/meals/${id}.json`, data);
            setMeal(data);
        } catch (error) {
            console.error('Error updating meal:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!meal) {
        return <p>Loading...</p>;
    }

    return (
        <div className="page">
            <h2>Edit Meal</h2>
            <MealForm initialData={meal} onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
    );
};

export default EditMealPage;
