import { HELLO_REDUX } from '../actions/types';

const initialState = {
  hello: 'Testing Redux'
};

const helloReducer = (state = initialState, action) => {
  switch (action.type) {
    case HELLO_REDUX:
      return {
        ...state,
        hello: 'hello world'
      };
    default:
      return state;
  }
};

export default helloReducer;
