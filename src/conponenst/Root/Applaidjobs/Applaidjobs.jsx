import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { GetLocalStrogeData } from "../Utlitiy/Localstroge";


const Applaidjobs = () => {

    const jobs = useLoaderData();
    const [jobsApplied, setjobsApplied] = useState([]);
    const [Displayjobs,setDisplayjobs] = useState([]);

    const HendleallJobs=(filter)=>{
        if(filter=='All'){
            setDisplayjobs(jobsApplied);
        }else if(filter=='Remote'){
            const remotejobs = jobsApplied.filter(job=>job.remote_or_onsite==='Remote');
            setDisplayjobs(remotejobs);
        }else if(filter=='Onsite'){
            const Onsitejobs = jobsApplied.filter(job=>job.remote_or_onsite==='Onsite');
            setDisplayjobs(Onsitejobs);
        }

    }
    useEffect(() => {
        const storedjobids = GetLocalStrogeData();
        if (storedjobids.length > 0) {
            const jobsapplieds = jobs.filter(job => storedjobids.includes(job.id));

            setjobsApplied(jobsapplieds);
            setDisplayjobs(jobsapplieds)
        }
    }, [jobs])


    return (
        <div>
            <h2>Applid jobs: {jobsApplied.length}</h2>
            <div className="dropdown dropdown-bottom">
                <label tabIndex={0} className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={()=>HendleallJobs('All')}><a>All</a></li>
                    <li onClick={()=>HendleallJobs('Remote')}><a>Remote</a></li>
                    <li onClick={()=>HendleallJobs('Onsite')}><a>Onside</a></li>
                </ul>
            </div>
           <div className="space-y-3">
                 {
                    Displayjobs.map(job => <li key={job.id}><span>{job.job_title} {job.company_name} {job.remote_or_onsite}</span></li>)
                }
           </div>
        </div>
    );
};

export default Applaidjobs;