import { createSlice } from '@reduxjs/toolkit';
import { getJobs } from "../utils.js";

export const jobsSlice = createSlice({
	name: 'jobs',
	initialState: {
		jobs: [],
		job: null,
		perPage: 5,
		currentPage: 1,
		pages: [1],
		isLoading: true,
		fulltimeQuery: false,
		locationSearchQuery: "",
		descriptionSearchQuery: ""
	},
	reducers: {
	   searchByDescription: (state, action) => {		
			state.descriptionSearchQuery = action.payload.searchInput;
		},
		searchByCity: (state, action) => {
			state.locationSearchQuery = action.payload.city;
		},
		setJobs: (state, action) => { 					
			const { jobs, pages } = getJobs(action.payload.data, state.perPage);	
		    state.jobs = jobs;
		    state.pages = pages;			
			state.isLoading = false;
		},
		setJob:(state, action) => {
			state.job = action.payload.job;
	    },
	    setPage: (state, action) => {
		   state.currentPage = action.payload.currentPage;
	    },
	    setNextPage: (state) => {
		   state.currentPage = state.currentPage + 1;
	    },
	    setPreviousPage: (state) => {
		   state.currentPage = state.currentPage - 1;
	    }
  },
});

export const { setJobs,
	setJob,
	setPage,
	setNextPage,
	setPreviousPage,
	searchByDescription,
	searchByCity
} = jobsSlice.actions;
export const selectJobs = state => state.jobs;
export default jobsSlice.reducer;