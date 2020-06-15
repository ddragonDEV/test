export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_ITEM = "ADD_TO_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAN_STATE = "CLEAN_STATE";

const addToCart = (amiibo) => ({ type: ADD_TO_CART, amiibo });
const addToItem = (amiibo) => ({ type: ADD_TO_ITEM, amiibo });
const removeItem = (amiibo) => ({ type: REMOVE_ITEM, amiibo });
const cleanState = () => ({ type: CLEAN_STATE });

export { addToCart, addToItem, cleanState, removeItem };