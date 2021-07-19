import { useSelector } from 'react-redux'
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => { };

  // useSelector hook by react-redux firstly it's accept a function as in input to return the required piece of the data from the store that we need, secondly it's create the subscription automatically with the current component, therefore the component will be update the data automatically once it changes in the store 
  const counter = useSelector(state => state.Counter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
