import { configureStore } from '@reduxjs/toolkit';

// import Reducers and can be with a different name, because it has only one export default (counterSlice.reducer) from the reducer files 
import counterReducer from './counter';
import authReducer from './authentication';


// Reducer via Redux approach

// const initialState = {
//     counter: 0,
//     showCounter: true
// }

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             ...state,
//             counter: state.counter + 1
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             ...state,
//             counter: state.counter + action.payload
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             ...state,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }



// configureStore is allow to create store and attach the main reducer to the store, and if we can man reducers it merges all of them into one reducer
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
});



export default store;