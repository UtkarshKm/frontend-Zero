import React from "react";
import {Link} from "react-router-dom";

function NotFound() {
	return (
		<div className="container text-center py-5 my-5">
			<h1 className="display-1 fw-bold">404</h1>
			<h2 className="mb-4">Page Not Found</h2>
			<p className="lead mb-4">
				The page you are looking for might have been removed, had its name
				changed, or is temporarily unavailable.
			</p>
			<Link
				to="/"
				className="btn btn-primary px-4 py-2"
			>
				Back to Home
			</Link>
		</div>
	);
}

export default NotFound;
