export function getJobsList(params){
  return {
      type:'GET_JOB_LISTING',
      payload:params
  };
}
export function setJobs(jobs){
    return {
        type:'SET_JOBS',
        payload:jobs
    };
}

export function setJobFilter(filter){
    return {
        type:'SET_JOB_FILTER',
        payload:filter
    }
}

