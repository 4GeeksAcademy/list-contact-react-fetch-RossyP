import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-end align-items-center p-5">
			<Link to="/newContact">
				<button type="button" className="btn btn-success">Add New Contact</button>
			</Link>
		</nav>
	);
};
