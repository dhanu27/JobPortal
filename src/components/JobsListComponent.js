import {useSelector} from 'react-redux';
import '../App.css';
// import jobAvatar from './jobAvatar.png';
const JobListingComponent=()=>{
   const {jobs,loading}=useSelector((state)=> state.jobListingReducer);

    return (
        <>
        {loading?
          <div>Loading...</div>
          :
            jobs &&jobs.map((job,index)=>{
                return (
                    <div className="jobItem" key={index}>
                        <div className="itemLeftSide">
                           <img src={job.img?job.img:"jobAvatar.png"} />
                        </div>
                       <div className="itemRightSide">
                            <div>{job.company.name}</div>
                            <div>{job.name}</div>
                            <div>{job.levels && job.levels.map((lvl)=>{
                            return (
                                <span>{lvl.name}</span>
                            )
                            }) }
                            </div>
                            <div>{job.locations && job.locations.map((loc)=>{
                            return (
                                <span>{loc.name}</span>
                            )
                            }) }
                            </div>
                       </div> 
                    </div>
                )
            })
        }
        </>
    )
}

export default JobListingComponent;