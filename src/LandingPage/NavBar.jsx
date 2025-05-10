import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
	return (
		<div className="bg-white">
			<div className="container">
				<nav className="navbar navbar-expand-lg border-bottom py-3">
					<div className="container-fluid px-0">
						<Link
							className="navbar-brand"
							to="/"
						>
							<img
								src="media\images\logo.svg"
								alt="logo"
								className="w-25"
							/>
						</Link>

						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item mx-2">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/"
									>
										Home
									</Link>
								</li>
								<li className="nav-item mx-2">
									<Link
										className="nav-link active"
										to="/about"
									>
										About
									</Link>
								</li>
								<li className="nav-item mx-2">
									<Link
										className="nav-link active"
										to="/products"
									>
										Products
									</Link>
								</li>
								<li className="nav-item mx-2">
									<Link
										className="nav-link active"
										to="/pricing"
									>
										Pricing
									</Link>
								</li>
								<li className="nav-item mx-2">
									<Link
										className="nav-link active"
										to="/support"
									>
										Support
									</Link>
								</li>
								<li className="nav-item mx-2">
									<Link
										className="nav-link active"
										to="/signup"
									>
										Sign Up
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default NavBar;
