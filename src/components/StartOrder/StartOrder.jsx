import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StartOrderItem from '../StartOrderItem/StartOrderItem';
import './StartOrder.css';


function StartOrder () {
    let history = useHistory();
    const pizzaOrder = useSelector(state => state.pizzaReducer)
    let dispatch = useDispatch();

    useEffect(() => {
        getPizzas();
    }, []);

    const [pizzas, setPizzas] = useState([]);

    const getPizzas = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
          }).then( response => {
            console.log(response.data);
            setPizzas(response.data);
          }).catch( error => {
            console.log('error on GET', error);
          });
    }

    const addPizzaToOrder = (pizza) => {
        console.log(pizza);
        dispatch({
            type: 'ADD_PIZZA_TO_ORDER',
            payload: {...pizza, quantity: 1}
        })
    }

    const removePizzaFromOrder = (pizza) => {
        dispatch({
            type: 'REMOVE_PIZZA_FROM_ORDER',
            payload: pizza
        })
    }

    return(
        <>
        <h2>Step 1: Select Your Pizza</h2>
        {pizzas.map((pizza) => (
            <StartOrderItem 
                key={ pizza.id }
                pizza={ pizza }
                pizzaOrder={ pizzaOrder }
                addPizzaToOrder={addPizzaToOrder} 
                removePizzaFromOrder={removePizzaFromOrder}
            />
        ))}
        
        <button 
            onClick={() => history.push('/customer')}
        >
            NEXT
        </button>
        </>
    )

}

export default StartOrder;