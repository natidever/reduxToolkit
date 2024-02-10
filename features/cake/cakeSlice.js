const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
    numberOfcake :0
}

const cakeSlice = createSlice({
    name :'cake',
    initialState,
    reducer:{
        order:(state)=>{
           state.numberOfcake--
        },

        stocked:(state,action)=>{
            state.numberOfcake +=action.payload
        }
    }
})
//export both the reducer and the action 

module.export =cakeSlice.reducer
module.export = cakeSlice.actions