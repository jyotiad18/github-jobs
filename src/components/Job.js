import React, { forwardRef }from 'react';
import { useHistory } from "react-router"
import { useDispatch } from 'react-redux';
import '../css/Job.css';
import PublicIcon from '@material-ui/icons/Public';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { setJob } from '../reducers/jobsSlice.js';
import { getPublisDay } from '../utils';

const Job = forwardRef(({ job }, ref) => {
	const history = useHistory();
	const dispatch = useDispatch();
	
	const onJobClickHandle = () => {
		dispatch(setJob({
			job: job
		}))
		history.push(`/job/${job.id}`)
	}
	return (
		<div ref= {ref} className="job">
			<div className="job__companylogo">
				<img src={job.company_logo} alt="" />
			</div>
			<div className="job__info" onClick={onJobClickHandle}>
				<h2>{job.company}</h2>
				<h1>{job.title}</h1>
				<div className="job__typewithlocation">
					<div className="job__left">
						<span className="job__type"> {job.type} </span>
					</div>
					<div className="job__right">
						<div className="right__info">
							<PublicIcon />
							<span>{job.location}</span>
						</div>
						<div className="right__info">
							<AccessTimeIcon />
							<span>{getPublisDay(job.created_at)} days ago</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
});

export default Job;
