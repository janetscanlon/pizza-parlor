import React from 'react';
import axios from 'axios';
import './App.css';
//import the things we need 
import { useDispatch, useSelector } from 'react-redux'
import { useEffect ,useState} from 'react'
import PizzaList from '../PizzaList/PizzaList'
//import components here! 


function App() {


  const Pizza = useSelector(store => store.PizzaList);
  //when the app lloads, ask the server for pizzas! 
  useEffect(() => {
    fetchPizzas()
  }, [])

  
  const dispatch = useDispatch()
  

  //when called, this function will cause our DOM to be in sync with the data in our
  //pizza table 

  const fetchPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
    .then((response) => {
      console.log( 'response.data is:', response.data)

      dispatch({
        type: 'SET_PIZZALIST',
        payload: response.data
      })
    })
    .catch((error) => {
      console.log('fetchPizzas error:', error)
    })
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <main>
      <img src='images/pizza_photo.png' />
      <PizzaList fetchPizzas={fetchPizzas}/>
      <p>Pizza is great.</p>
      <PizzaList/>
      </main>
    </div>
  );
}

export default App;
