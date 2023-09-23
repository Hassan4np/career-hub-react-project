import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utlitiy/Localstroge";


const Jobsdetais = () => {
    const jobs= useLoaderData();
  
    const {id}=useParams();
    const inid = parseInt(id)
      const job = jobs.find(job=>job.id===inid);
        const {job_description,job_title,contact_information,salary,job_responsibility,educational_requirements,experiences,company_name}=job;
    
      const hendleclcktost=()=>{
        saveJobApplication(inid)
        toast("you have successfuly click")
      }
    return (
        <div>
            <h2>Jobs detais</h2>
            <div className="grid  gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 space-y-5 mb-5 p-5">
                    <h2> Job Details of:{company_name}</h2>
                    <h2>{job_description}</h2>
                    <h2>{job_responsibility}</h2>
                    <h2>{educational_requirements}</h2>
                    <h2 className="mb-5">{experiences}</h2> 
                </div>
                <div className="border p-5">
                    <h2 className="border border-b-2 py-3">Job detais</h2>
                    <h2>{salary} par month</h2>
                    <h2>{job_title}</h2>
                    
                    <h2 className="border border-b-2 p-2">contact infi</h2>
                    <h2>{contact_information.phone}</h2>
                    <h2>{contact_information.email}</h2>
                    <h2>{contact_information.address}</h2>
                    

                    <button className="btn btn-primary mt-5" onClick={hendleclcktost}>Apply Now</button>
                </div>
             
            </div>
            <ToastContainer />
        </div>
    );
};

export default Jobsdetais;