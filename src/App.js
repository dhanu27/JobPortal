import './App.css';
import {useEffect, useState,useReducer} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getJobsList} from './action/actionCreators';
import {FilterComponent,SearchComponent,JobListingComponent} from './components';


function App() {
  const apiKey="abbee9694123703e6fe302d596d874e0e37f497618591e58945ab9fe84e5dd3c";
  const dispatch = useDispatch();
  const filterQuery = useSelector((state) => state.filterReducer);
  useEffect(()=>{
      dispatch(getJobsList(filterQuery));
  },[filterQuery]);
  return (
    <div className="App">
       <h1>GitHub Jobs</h1>
       <header>
         <SearchComponent/>
        </header>
       <div className="mainContainer">
           <div className="filterContainer">
             <FilterComponent/>
           </div>
           <div className="listingContainer">
             <JobListingComponent/>
           </div>
       </div>
    </div>
  );
}

export default App;
