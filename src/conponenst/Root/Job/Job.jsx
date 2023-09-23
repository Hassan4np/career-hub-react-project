import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Job = ({ job }) => {
    const {logo,job_title,company_name,location,job_type,salary,id,remote_or_onsite}=job;
    return (
        <div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-[116px] h-[40px]" src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-3 py-2 border rounded border-[#7E90FE] text-[#7E90FE] mr-5">Remote</button>
        <button className="px-3 py-2 border rounded border-[#7E90FE] text-[#7E90FE] ">Full Time</button>
    </div>
    <div className="flex ">
        <h2 className="flex mr-3"><FaLocationDot className="mr-2 mt-1"></FaLocationDot>{location}</h2>
        <h2 className="flex"><FaLocationDot className="mr-2 mt-1"></FaLocationDot>Salary:{salary}</h2>
    </div>
    <div className="card-actions">
      <NavLink to={`/job/${id}`}><button className="btn btn-primary">View detais</button></NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;