import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
    value: 0,
    showCounter: true
}

// Reducer via react toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        increase(state, action) {
            state.value = state.value + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const { increment, decrement, increase, toggleCounter } = counterSlice.actions;

export default counterSlice.reducer;