import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// add the customerReducer
const customerReducer = (state = {}, action) => {
    if (action.type === 'CUSTOMER_FORM_INPUTS') {
        return action.payload;
    }
    return state;
};

const storeInstance = createStore(
    combineReducers({
        customerReducer
        // add Hamza/Brad's reducer
    }),

    // setup logger later
    // applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
