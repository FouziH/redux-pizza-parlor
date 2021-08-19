import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { useDispatch } from 'react-redux';
import StartOrderItem from '../StartOrderItem/StartOrderItem';
import './StartOrder.css';
function StartOrder () {

    //let dispatch = useDispatch();

    useEffect(() => {
        getPizzas();
    }, []);

    const [pizzas, setPizzas] = useState([])
    const getPizzas = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
          }).then( response => {
            console.log(response.data);
            setPizzas(response.data)
          }).catch( error => {
            console.log('error on GET', error);
          });
    }

    return(
        <>
        <h2>Step 1: Select Your Pizza</h2>
        {pizzas.map((pizza) => (
            <StartOrderItem 
                key={ pizza.id }
                pizza={ pizza } 
            />
        ))}
        
        <button>NEXT</button>
        </>
    )

}

export default StartOrder;