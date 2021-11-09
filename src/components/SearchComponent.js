import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { actionTypes } from '../action';
import useDebounce from './useDebounce';
function SearchComponent(){
    const [searchQuery,setSearchQuery]=useState('');
    const filterQuery = useSelector((state) => state.filterReducer);
    const dispatch =useDispatch();
    function setJobFilter(e){
        console.log(e,searchQuery);
       const newFilterQuery={...filterQuery};
       newFilterQuery.searchQuery=searchQuery;
       dispatch({type:actionTypes.SET_JOB_FILTER,payload:newFilterQuery});
    }
    const {debounceMethod}=useDebounce(setJobFilter,2000);
    return (
        <div className="searchContainer" style={{
            backgroundImage:"url('/dominique.jpg')"
        }}>
             <div className="searchBar">
                <input type="text" 
                placeholder="Title, companies, expertise or benefits" 
                value={searchQuery}
                onChange={(e)=>{setSearchQuery(e.target.value,
                                   debounceMethod(e));
                                }}/>
               <button>
                   Search
               </button>
             </div>
        </div>
    )
}

export default SearchComponent;