import React, { useEffect, useState } from 'react';
import MealList from '../components/MealList';
import axiosApi from '../axiosApi';
import '../App.css';

const HomePage: React.FC = () => {
    const [meals, setMeals] = useState([]);

    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axiosApi.get('/meals.json');
                const data = response.data;
                const loadedMeals = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setMeals(loadedMeals);
            } catch (error) {
                console.error('Error fetching meals:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchMeals();
    }, []);

    const handleDelete = async (id) => {
        setDeletingId(id);
        try {
            await axiosApi.delete(`/meals/${id}.json`);
            setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== id));
        } catch (error) {
            console.error('Error deleting meal:', error);
        } finally {
            setDeletingId(null);
        }
    };

    const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="page">
            <h2>Total Calories: {totalCalories}</h2>
            <MealList meals={meals} onDelete={handleDelete} deletingId={deletingId} />
        </div>
    );
};

export default HomePage;
