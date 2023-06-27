import {createSlice} from '@reduxjs/toolkit';

export const userSlices = createSlice({
    name:'users',
    initialState:{
        user:null,
    },
    reducers:{
        SetUser:(state,action)=>{
            state.user=action.payload;
        }
    }
})
export const {SetUser}=userSlices.actions;