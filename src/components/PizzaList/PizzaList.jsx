import { useSelector } from 'react-redux';


function PizzaList({fetchPizzas}) {
  // Subscribed to the value of the PizzaList reducer:
  const PizzaList = useSelector(store => store.pizzaList);

  console.log('pizza list is:', PizzaList)
  return (
    <section>
      <h2>The Pizza List</h2>
      <ul>
        {PizzaList.map((pizza) => 
        <>
          <li key={pizza.id}>{pizza.name} by {pizza.description}{pizza.price}</li> 
          <img src={pizza.image_path}/> 
          </>
        )}
      </ul>
    </section>
  );
}

export default PizzaList;