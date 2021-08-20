import axios from 'axios';
import react from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Checkout from '../../Checkout/Checkout';
import { useSelector, useDispatch } from 'react-redux';

function CustomerForm() {
    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [zip, setZip] = useState('');
    let [type, setType] = useState('');

    // make sure the type got properly updated
    // via the radio button selection
    console.log('Get our food by:', type);

    const history = useHistory();
    const dispatch = useDispatch(); 

    function submitFunc(e) {
        e.preventDefault();

        // dispatch local state to global state
        dispatch({
            type: 'CUSTOMER_FORM_INPUTS',
            payload: {
                name, address, city, zip, type
            }
        });

        history.push('/checkout');
        }

    return (
        <>
        <h2>Step 2: Customer Information</h2>
        <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street Address"/>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)}placeholder="City"/>
            <input type="number" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="Zip"/>

            <input type="radio" id="pickup" name="type" value="pickup" onClick={() => setType('Pickup')}/>
            <label htmlFor="pickup"> Pickup </label>

            <input type="radio" id="delivery" name="type" value="delivery" onClick={() => setType('Delivery')}/>
            <label htmlFor="delivery"> Delivery </label>

            <button onClick={submitFunc}>Next</button>
        </form>
        </>
    )
}

export default CustomerForm;

