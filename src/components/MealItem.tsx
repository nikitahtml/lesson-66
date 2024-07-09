import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

interface MealItemProps {
    meal: {
        id: string;
        time: string;
        description: string;
        calories: number;
    };
    onDelete: (id: string) => void;
    isDeleting: boolean;
}

const MealItem: React.FC<MealItemProps> = ({ meal, onDelete, isDeleting }) => {
    return (
        <div className="meal-item">
            <div>
                <strong>{meal.time}</strong> - {meal.description} ({meal.calories} kcal)
            </div>
            <div>
                <Link to={`/edit-meal/${meal.id}`}>Edit</Link>
                <button onClick={() => onDelete(meal.id)} disabled={isDeleting}>
                    {isDeleting ? 'Deleting...' : 'Delete'}
                </button>
            </div>
        </div>
    );
};

export default MealItem;
