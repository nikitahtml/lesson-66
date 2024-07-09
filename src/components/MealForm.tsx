import React, { useState } from 'react';
import '../App.css';

interface MealFormProps {
    initialData?: {
        time: string;
        description: string;
        calories: number;
    };
    onSubmit: (data: { time: string; description: string; calories: number }) => void;
    isLoading: boolean;
}

const MealForm: React.FC<MealFormProps> = ({ initialData, onSubmit, isLoading }) => {

    const [time, setTime] = useState(initialData?.time || 'Breakfast');

    const [description, setDescription] = useState(initialData?.description || '');
    const [calories, setCalories] = useState(initialData?.calories || 0);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({ time, description, calories });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>
                Time:
                <select value={time} onChange={(e) => setTime(e.target.value)} disabled={isLoading}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Snack">Snack</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                </select>
            </label>
            <label>
                Description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    disabled={isLoading}
                />
            </label>
            <label>
                Calories:
                <input
                    type="number"
                    value={calories}
                    onChange={(e) => setCalories(Number(e.target.value))}
                    disabled={isLoading}
                />
            </label>
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save'}
            </button>
        </form>
    );
};

export default MealForm;
