import React from 'react';

const StartOrderItem = ({ pizza }) => {
    return (
        <div className="addPizza">
            <img src={pizza.image_path} alt={pizza.name} />
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <span>{pizza.price}</span>
            <button>Add</button>
        </div>
    )
}

export default StartOrderItem;

