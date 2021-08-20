import React from 'react';

const StartOrderItem = ({ pizza, addPizzaToOrder, pizzaOrder, removePizzaFromOrder }) => {


    const buttonSelection = (pizza) => {
        for (const item of pizzaOrder) {
            if( Number(item.id) === Number(pizza.id)){
                return <button onClick={()=>{removePizzaFromOrder(pizza)}}>Remove</button>
            }
        }
        return <button onClick={()=>{addPizzaToOrder(pizza)}}>Add</button>
    }
    
    return (
        <div className="addPizza">
            <img src={pizza.image_path} alt={pizza.name} />
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <span>{pizza.price}</span>
            { buttonSelection(pizza) }
        </div>
    )
}

export default StartOrderItem;

//<button onClick={()=>{addPizzaToOrder(pizza)}}>Add</button>