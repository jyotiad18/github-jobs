import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import PublicIcon from '@material-ui/icons/Public';
import '../css/JobsLocation.css';
import { searchByCity } from '../reducers/jobsSlice';
import CancelIcon from '@material-ui/icons/Cancel';

function JobsLocation({ locations }) {
	const dispatch = useDispatch();
	const [city, setCity] = useState("");

	return (
		<div className="jobsLocation">
			<span className="jobsLocation__title">Location</span>
			<div className="jobsLocation__search">
				<PublicIcon />
				<input type="text"
					placeholder="City, state, zip code or country"
					value={city}
					onChange={(e) => { 
						setCity(e.target.value);
						dispatch(searchByCity({ city: city }));
					}}
				/>
				{
					city.length > 0 ?
						<CancelIcon onClick={() => {
							setCity("");
							dispatch(searchByCity({ city: city }));
						}} />
						: null
				}					
			</div>
			<div className="jobsLocation__list">
				{
					locations && locations.map((location, i) => (
						<div className="location" key={i}>
							<input type="radio" value={location} id={i} name="drone"
								onClick={(e) => {
									dispatch(searchByCity({city: e.target.value}))
								}} />
							<span>{location}</span>
						</div>						
					))	
			    }
			</div>
		</div>
	)
}

export default JobsLocation;
