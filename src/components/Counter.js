import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increase, toggleCounter } from '../store/counter'
import classes from './Counter.module.css';

const Counter = () => {
  // useDispatch is a function that allow us to dispatch an action
  const dispatch = useDispatch();

  // useSelector hook by react-redux firstly it's accept a function as in input to return the required piece of the data from the store that we need (inside the initialState in the reducer), secondly it's create the subscription automatically with the current component, therefore the component will be update the data automatically once it changes in the store, and to retrieve a specific data from the store that has combined reducers we need to mention the reducer name like (counter)  
  const counter = useSelector(state => state.counter.value);
  const showCounter = useSelector(state => state.counter.showCounter)

  const incrementHandler = () => {
    // we need to execute the action inside a dispatch function
    dispatch(increment())
  };
  const decrementHandler = () => {
    dispatch(decrement())
  }

  const increaseHandler = () => {
    // we can pass the payload as the first parameter and redux-toolkit will manage that automatically.
    dispatch(increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>IncreaseBy5</button>
      <button onClick={decrementHandler}>Decrement</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
