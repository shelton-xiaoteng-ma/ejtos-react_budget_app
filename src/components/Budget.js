
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const total_budget = expenses.reduce(
            (previousExp, currentExp) => {
                return previousExp + currentExp.cost
            },0
        );
        if(total_budget<event.target.value){
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        }else{
            alert("You cannot reduce the budget value lower than the spending");
        }
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}</span>
        <input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
            );
};
export default Budget;