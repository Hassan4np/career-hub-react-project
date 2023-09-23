import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featurejobs = () => {
    const [jobs, setjobs] = useState([]);
    const [datalength,setdatalength] = useState(4)
    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(job => setjobs(job))
    }, [])
    return (
        <div>
            <h1 className="text-center text-5xl">Feature  {jobs.length}</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="grid grid-cols-2 gap-5 mt-4"> 
                {
                     jobs.slice(0,datalength).map((job, idx) => <Job key={idx} job={job}></Job>)
                }
            </div>
            <div className={datalength===jobs.length&&'hidden'}>
              <button className="btn btn-primary mt-5 " onClick={()=>setdatalength(jobs.length)}>Show all data</button>
            </div>
        </div>
    );
};

export default Featurejobs;