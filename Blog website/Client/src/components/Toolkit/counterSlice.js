//This is slice file (reducer and action creators)
import { createSlice } from '@reduxjs/toolkit'
const initialStateValue = {
  count:0,//default value of state
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStateValue,
  reducers: {
    increment: (state) => {
//Overall, the state object represents the current state managed by the counterSlice reducer, with its count property initially set to 0
      state.count += 1
    },//inside the reducer object increment and decrements are reducer functions.
    
    
  },
})

// Action creators are generated for each case reducer function.here increment decrement are reducer functions for which action creators will be generated automatically by createSlice.
export const { increment } = counterSlice.actions
//Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.
export default counterSlice.reducer//Finally, this line exports the reducer function generated by the counterSlice

/*There are two case reducers: increment, decrement. These are responsible for handling actions that correspond to incrementing and  decrementing by a specific amount, respectively.

Now, the key feature of createSlice is that it automatically generates action creators for each of these case reducers. For example:

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
Here, counterSlice.actions provides action creators (increment, decrement) that you can use to dispatch actions in your application. These action creators are pre-configured to create actions with the appropriate type and payload, and you can use them in your components or middleware to trigger the corresponding state updates in the reducer.

So, the statement emphasizes the convenience provided by createSlice, where you don't have to manually write action creators – they are automatically generated based on the case reducers you define. */