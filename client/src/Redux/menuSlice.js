import {createSlice} from '@reduxjs/toolkit';

export const menuSlices = createSlice({
    name:'menus',
    initialState:{
        menu:[],
    },
    reducers:{
        SetMenu:(state,action)=>{
            state.menu=action.payload;
        }
    }
})
export const {SetMenu}=menuSlices.actions;