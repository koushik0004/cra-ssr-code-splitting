const initialState = {
  message: null,
  items: null,
  quantity: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch(action.type) {
      case 'SET_MESSAGE':
          return {...state, message: action.payload};
      case 'ADD_ITEM':
      case 'REMOVE_ITEM':
      case 'UPDATE_CART':
      case 'LIST_ITEMS':
          return {...state, ...action.payload};
      default:
          return state;
  }
};

// Actions
export const addItemAction = (todo) => ({
  type: 'ADD_ITEM',
  payload: todo
});

export const listItemsAction = (todo) => ({
  type: 'LIST_ITEMS',
  payload: todo
});