import { ADD_TO_CART, ADD_TO_ITEM, CLEAN_STATE, REMOVE_ITEM } from './../actions';

const initialState = {
  shoppingCart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const temp = { ...state };
      if (temp.shoppingCart.filter((item) => item.amiibo.tail === action.amiibo.tail).length === 0) {
        temp.shoppingCart.push({ amiibo: action.amiibo, total: 1 });
      } else {
        const amiibo = temp.shoppingCart.filter((item) => item.amiibo.tail === action.amiibo.tail)[0];
        amiibo.total += 1;
      }
      return temp;
    case ADD_TO_ITEM:
      const temp2 = { ...state };
      const item = temp2.shoppingCart.filter((item) => item.amiibo.tail === action.amiibo.amiibo.tail)[0];
      item.total = action.amiibo.edit + parseInt(item.total);
      return temp2;
    case CLEAN_STATE:
      const temp3 = { ...state };
      temp3.shoppingCart = [];
      return temp3;
    case REMOVE_ITEM:
      const temp4 = { ...state };
      temp4.shoppingCart = [ ...state.shoppingCart.filter((item) => item.amiibo.tail !== action.amiibo.amiibo.tail) ];
      return temp4;
    default:
      return state;
  }
};

export default rootReducer;