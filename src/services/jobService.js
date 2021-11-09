import axios from 'axios';
export const fetchJobs=(queryParams)=>{
  const qs=Object.keys(queryParams).map((key)=>{
    return `${key}=${queryParams[key]}`;
  }).join('&');
    return axios.get(`https://www.themuse.com/api/public/jobs?${qs}`,queryParams).then((res)=>{
      console.log({res});
     if(res.status===200){
       return res.data;
     }
    return {results:[],page_count:0}; 
    });
} 
