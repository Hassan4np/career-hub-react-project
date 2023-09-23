const GetLocalStrogeData = () => {
    const StrogeJobApplication = localStorage.getItem('job-applications');
    if (StrogeJobApplication) {
        return JSON.parse(StrogeJobApplication)
    }
    return []
}
const saveJobApplication = (id) => {
    const storedJobApplication = GetLocalStrogeData();
    const exists = storedJobApplication.find(jobid => jobid === id);
    if (!exists) {
        storedJobApplication.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
    }

}

export { GetLocalStrogeData, saveJobApplication }