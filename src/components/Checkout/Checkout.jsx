import react from 'react';
import { useSelector } from 'react-redux';
import StartOrderItem from '../StartOrderItem/StartOrderItem';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Checkout() {

    const customerInputs = useSelector(store => store.customerReducer);
    const pizzaOrder = useSelector(store => store.pizzaReducer);
    const history = useHistory();

    function submitOrder() {
        axios({
            method: 'POST',
            url: '/api/order',
            data: {
                customer_name: customerInputs.name,
                street_address: customerInputs.address,
                city: customerInputs.city,
                zip: customerInputs.zip,
                type: customerInputs.type,
                total: getTotalPrice(),
                pizzas: pizzaOrder
            }
        }).then((response) => {
            history.push('/');
        }).catch((error) => {
            console.log('Error posting pizza order', error);
        });
    }

    const getTotalPrice = () => {
        // console.log(pizzaOrder[0]);
        // console.log(typeof pizzaOrder[0].price);
        return (
            pizzaOrder.reduce( (a, b) => Number(a) + Number(b.price), 0)
        );
    }

    return (
        <>
            <h2>Step 3: Checkout</h2>
            <p>Customer: {customerInputs.name}</p>
            <p>Address: {customerInputs.address}</p>
            <p>City: {customerInputs.city}</p>
            <p>Zip: {customerInputs.zip}</p>
            <p>Type: {customerInputs.type}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaOrder.map((pizza, i) => (
                        <tr key={i}>
                            <td>
                                {pizza.name}
                            </td>
                            <td>
                                ${pizza.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total: ${getTotalPrice()}</p>

            <button onClick={submitOrder}>CHECKOUT</button>
        </>
    );
}

export default Checkout;