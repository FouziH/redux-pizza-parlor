import axios from 'axios';
import react from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Checkout from '../../Checkout/Checkout';


function CustomerForm() {
    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [zip, setZip] = useState('');
    // let propHandoff = [name, address, city, zip];

    let history = useHistory();

    function submitFunc(e) {
        e.preventDefault();
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

            <input type="checkbox" id="pickup" name="pickup" value=""/>
            <label htmlFor="pickup"> Pickup </label>

            <input type="checkbox" id="delivery" name="delivery" value=""/>
            <label htmlFor="delivery"> Delivery </label>

            <button onClick={submitFunc}>Next</button>
        </form>
        </>
    )
}

export default CustomerForm;

