
import React, { useContext } from 'react';
import { TiDelete, TiPlus, TiMinus } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    const plusCircleButtonStyle = {
        width: '30px',
        height: '30px',
        "background-color": "green",
        "border-radius": "50%",
        border: "none",
        cursor: "pointer",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
      };

    const minuCircleButtonStyle = {
        width: '30px',
        height: '30px',
        "background-color": "red",
        "border-radius": "50%",
        border: "none",
        cursor: "pointer",
        display: "flex",
        "justify-content": "center",
        "align-items": "center",
      };
    
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <button style={plusCircleButtonStyle} onClick={event=> increaseAllocation(props.name)}>
                <TiPlus style={{ color: 'white' }} />
            </button>
        </td>
        <td>
            <button style={minuCircleButtonStyle} onClick={event=> decreaseAllocation(props.name)}>
                <TiMinus style={{ color: 'white' }} />
            </button>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;