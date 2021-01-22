import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import '../css/JobSearch.css';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import { searchByDescription } from '../reducers/jobsSlice';

function JobSearch() {
	const [searchInput, setSearchInput] = useState("");
	const dispatch = useDispatch();
	
	const onSearchClick = () => {
		dispatch(searchByDescription({
		    searchInput: searchInput
		}))
	}
	return (
		<div className="jobSearch">
			<div className="jobSearch__inputs">
				<div className="inputs__left">
					<WorkOutlineIcon />
					<input type="text"
						placeholder="Title, companies, expertise or benefits"
						value={searchInput}
						onChange={(e) => { setSearchInput(e.target.value);}}
					/>
					{searchInput.length > 0 ? 
						<CancelIcon onClick={() => {
							setSearchInput("");
							onSearchClick();
						}} />
					: null}					
			   </div>
				<button className="button__search" onClick={onSearchClick}>Search</button>
			</div>
		</div>
	)
}

export default JobSearch;
