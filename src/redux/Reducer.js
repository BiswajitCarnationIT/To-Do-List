import { FETCH_LIST } from "./Action";

const initialState = {
    list : []
}
const taskReducer = (state = initialState, action) => {
switch (action.type) {
    
    case FETCH_LIST:
      return {
        
        list: action.payload,
        
      };
    
    default:
      return state;
  }
};

export default taskReducer;