import React from "react";

function NavBar() {
	return (
		<div className="bg-white">
			<div className="container">
				<nav className="navbar navbar-expand-lg border-bottom py-3">
					<div className="container-fluid px-0">
						<a
							className="navbar-brand"
							href="#"
						>
							<img
								src="media\images\logo.svg"
								alt="logo"
								className="w-25"
							/>
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item mx-2">
									<a
										className="nav-link active"
										aria-current="page"
										href="#"
									>
										Home
									</a>
								</li>
								<li className="nav-item mx-2">
									<a
										className="nav-link active"
										href="#"
									>
										Products
									</a>
								</li>
								<li className="nav-item mx-2">
									<a
										className="nav-link active"
										href="#"
									>
										Pricing
									</a>
								</li>
								<li className="nav-item mx-2">
									<a
										className="nav-link active"
										href="#"
									>
										Support
									</a>
								</li>
								<li className="nav-item mx-2">
									<a
										className="nav-link active"
										href="#"
									>
										Sign Up
									</a>
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
