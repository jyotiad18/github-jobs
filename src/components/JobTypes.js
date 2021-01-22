import React from 'react';
import '../css/JobTypes.css';

function JobTypes({ jobTypeList } ) {	
	return (
		<div className="jobTypes">
			{
				jobTypeList && jobTypeList.map((jobtype, i) => (
					<div className="jobTypes__detail" key={i}>
						<input type="checkbox" />
						<span>{jobtype}</span>
					</div>
				))				
			}
		</div>
	)
}

export default JobTypes;
