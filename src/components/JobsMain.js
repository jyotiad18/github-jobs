import React, { useState }from 'react';
import { useSelector } from 'react-redux';
import '../css/JobsMain.css';
import JobTypes from '../components/JobTypes';
import JobsLocation from '../components/JobsLocation';
import Job from '../components/Job';
import Pagination from './Pagination';
import { selectJobs } from '../reducers/jobsSlice.js';

function JobsMain() {
	const [jobTypes] = useState(["Full Time"]);
	const [locations] = useState(["London", "Paris", "New York", "Amsterdam", "Berlin"]);

	const { jobs, currentPage } = useSelector(selectJobs);		
	return (
		<div className="jobsMain">
			<div className="jobsMain__left">
				<JobTypes jobTypeList={jobTypes} />
				<JobsLocation locations={locations} />
			</div>
			<div className="jobsMain__right">				
					{
						jobs && jobs.length > 0 && jobs[currentPage - 1].map((job, i) => (
						<Job key={i} job={job} />
					))
				}
				{
					jobs.length > 0 ? < Pagination /> : null 
				}								
			</div>						
		</div>
	)
}

export default JobsMain;
