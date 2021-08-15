import ListActionTypes from "./list.types";
const INITIAL_STATE={
    listItems:[]
};
const listReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ListActionTypes.ADD_WEIGHT:
            return{
                ...state,
               listItems:[...state.listItems,action.payload]
            };
            default:
                return state;
    }
};
export default listReducer;