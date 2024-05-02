import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';


const pizzaList = (state = [], action) => {
  if (action.type === 'SET_PIZZALIST'){

    return action.payload
  }
  return state;
}

const store = createStore(
  combineReducers({
    pizzaList, // 
  }),
  applyMiddleware(logger),
);


export default store;
