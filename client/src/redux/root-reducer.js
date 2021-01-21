import {combineReducers} from 'redux';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import itemReducer from './item/item.reducer';

const rootReducer= combineReducers({
    cart:cartReducer,
    shop:shopReducer,
    item:itemReducer
});

export default rootReducer;