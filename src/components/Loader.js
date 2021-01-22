import React from 'react';
import '../css/Loader.css';

function Loader() {
	return (
		<div className="loader">
            <div className="loader__spin"></div>
            <span className="loader__text">Loading..</span>
        </div>
	)
}

export default Loader;