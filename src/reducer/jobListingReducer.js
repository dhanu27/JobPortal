import {actionTypes} from '../action';
const intialState = {
   jobs:[],
   loading:false,
   totalPages:0,
};

export const jobListingReducer=(state=intialState,action)=>{
    switch(action.type){
        case actionTypes.GET_JOB_LISTING:
             return {...state,loading:true};
        case actionTypes.SET_JOBS:
            const{results,page_count}=action.payload;
            return {
              ...state,
              jobs:results,
              totalPages: page_count,
              loading:false
            }      
        default:
            return state;  
    }
}