import React from 'react';
import '../css/Jobs.css';

import JobSearch from './JobSearch';
import JobsMain from './JobsMain';

function Jobs() {
	return (
		<div className="jobs">
			<JobSearch />
			<JobsMain />
		</div>
	)
}

export default Jobs;
