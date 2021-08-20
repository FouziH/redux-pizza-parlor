import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = ( state = [], action ) => {

    switch (action.type) {
        case 'ADD_PIZZA_TO_ORDER':
            return [ ...state, action.payload ]
            
        case 'REMOVE_PIZZA_FROM_ORDER':
            return state.filter(pizza => pizza.id !== action.payload.id);
            
        default:
            break;
    }
   
    
    return state;
}


const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
