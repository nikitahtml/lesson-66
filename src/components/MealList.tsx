import React from 'react';
import MealItem from './MealItem';
import '../App.css';

interface MealListProps {
    meals: { id: string; time: string; description: string; calories: number }[];
    onDelete: (id: string) => void;
    deletingId: string | null;
}

const MealList: React.FC<MealListProps> = ({ meals, onDelete, deletingId }) => {
    return (
        <div className="meal-list">
            {meals.map((meal) => (
                <MealItem
                    key={meal.id}
                    meal={meal}
                    onDelete={onDelete}
                    isDeleting={deletingId === meal.id}
                />
            ))}
        </div>
    );
};

export default MealList;

