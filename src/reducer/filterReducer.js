import { actionTypes } from "../action";

const intialState = {
    page:1
 };
export const filterReducer=(state=intialState,action)=>{
    switch(action.type){
        case actionTypes.SET_JOB_FILTER:
             return {...state , ...action.payload}
        default:
            return state;  
    }
}