import {configureStore} from '@reduxjs/toolkit';
import { userSlices } from './userSlice';
import { loaderSlice } from './loaderSlice';
import { menuSlices } from './menuSlice';
import { cartSlices } from './cartSlice';


const store = configureStore({
    reducer:{
        loaders:loaderSlice.reducer,
        users:userSlices.reducer,
        menus:menuSlices.reducer,
        cart:cartSlices.reducer,
    }
});

export default store;