export const getPublisDay = (created_Date) => {
	const curDate = new Date(created_Date);
	return curDate.getDay();		
}

export const getJobs = (jobsData, perPage) => {
	      const totalPage = Math.ceil(jobsData.length / perPage);
		  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);
		  const jobs = [];
	
		  while(jobsData.length)
		  {
			  jobs.push(jobsData.splice(0, perPage));
		  }	
		  
	return { pages, jobs };
}

