import products from '../data/products';

const ProductReducer = function (state = products, action) {
    debugger
    switch (action.type) {
        case 'REMOVE_PRODUCT':
            return [...state]; // write a logic to remove product here

        case 'ADD_PRODUCT':
            return [...state, action.product]; // ES6

        case 'LOAD_PRODUCTS':
            return [...state];

        default:
            return state;
    }
}

export default ProductReducer;