
import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }
    return (
        <div className='alert alert-secondary'>Currency 
        <select className="custom-select" id="inputGroupSelect01" onChange={handleCurrencyChange}>
            <option defaultValue value="$" name="dollar">$ Dollar</option>
            <option value="£" name="pound">£ Pound</option>
            <option value="€" name="euro">€ Euro</option>
            <option value="₹" name="ruppee">₹ Ruppee</option>
        </select>
        
        </div>
            );
};
export default Currency;