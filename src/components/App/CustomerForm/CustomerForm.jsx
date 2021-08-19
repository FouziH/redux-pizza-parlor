import react from 'react';
import { useState } from 'react';

function CustomerForm() {
let [name, setName] = useState('');
let [address, setAddress] = useState('');
let [city, setCity] = useState('');
let [zip, setZip] = useState('');

function submitFunc(e) {
    e.preventDefault();
    console.log("we clicked it", name, address, city, zip);
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