import React from 'react';
import { Link } from "react-router-dom";
import '../css/Header.css';

function Header() {
	return (
		<div className="header">
			<Link to="./"><h2 className="header__title">Github<span className="header__job"> Jobs </span></h2></Link>
		</div>
	)
};

export default Header;