import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true
}

// Reducer via react toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});



// Reducer via Redux approach

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
    reducer: counterSlice.reducer
});

export const { increment, decrement, increase, toggleCounter } = counterSlice.actions;

export default store;