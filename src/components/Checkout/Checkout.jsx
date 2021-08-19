import react from 'react';
import { useSelector } from 'react-redux';

function Checkout() {

    let customerInputs = useSelector(store => store.customerReducer)

    return (
        <>
            <p>Customer: {customerInputs.name}</p>
            <p>Address: {customerInputs.address}</p>
            <p>City: {customerInputs.city}</p>
            <p>Zip: {customerInputs.zip}</p>
        </>
    );
}

export default Checkout;