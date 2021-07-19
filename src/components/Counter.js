import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increase, toggleCounter } from '../store/index'
import classes from './Counter.module.css';

const Counter = () => {
  // useDispatch is a function that allow us to dispatch an action
  const dispatch = useDispatch();

  // useSelector hook by react-redux firstly it's accept a function as in input to return the required piece of the data from the store that we need (inside the initialState in the reducer), secondly it's create the subscription automatically with the current component, therefore the component will be update the data automatically once it changes in the store 
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter)

  const incrementHandler = () => {
    // dispatch always dispatch action that is an object of type and payload
    dispatch(increment())
  };
  const decrementHandler = () => {
    dispatch(decrement())
  }

  const increaseHandler = () => {
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
