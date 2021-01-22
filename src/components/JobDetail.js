import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import parse from 'html-react-parser'
import '../css/JobDetail.css';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PublicIcon from '@material-ui/icons/Public';
import { selectJobs } from '../reducers/jobsSlice.js';
import { getPublisDay } from '../utils';

function JobDetail() {
	const { job } = useSelector(selectJobs);	
	return (
		<div className="jobDetail">
			<div className="jobDetail__left">
			   <div className="left__back"> 
			   		<KeyboardBackspaceIcon />
			   		<Link to="/">Back to search</Link>
			   </div>
			   <div className="left__apply"> 
			   		<span>How to Apply</span>
					<h2><span>{parse(job.how_to_apply)}</span></h2>
			   </div>				   		   
			</div>
			<div className="jobDetail__right">	
			 <div className="right__header">
				<div className="right__jobTitle">
					<h1>{job.title}</h1>
					<span>{job.type}</span>				 
				</div>	
				<div className="right__publish">
					<AccessTimeIcon />
					<span>{getPublisDay(job.created_at)} days ago</span>
				</div>	   			   	
			  </div>	   			
				<div className="right__companyInfo">
					<div className="company__logo">
						<img src={job.company_logo} alt={job.company} />
					</div>			  
					<div className="right__company">
						<h1>{job.company}</h1>
						<div className="right__publish">
							<PublicIcon />
							<span>{job.location}</span>
						</div>
					</div>
				</div>	
				<div className="right__jobdesc">
					{parse(job.description)}
			    </div>	
		  </div>	
		</div>
	)
}

export default JobDetail;
