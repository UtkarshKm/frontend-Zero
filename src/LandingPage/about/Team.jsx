import React from "react";

function Team() {
	return (
		<div className="container my-5 py-5">
			<h2 className="text-center mb-5">Meet the Developer</h2>

			<div className="row justify-content-center">
				<div className="col-md-6 mb-4">
					<div className="card border-0 h-100 shadow-sm">
						<div className="text-center pt-4">
							<img
								src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								className="rounded-circle mb-3"
								alt="Utkarsh Kumawat"
								style={{width: "250px", height: "250px", objectFit: "cover"}}
							/>
						</div>
						<div className="card-body text-center">
							<h3 className="card-title">Utkarsh Kumawat</h3>
							<p className="text-muted fs-5">Full Stack Developer</p>
							<p className="card-text lh-lg fs-5 mt-4">
								I'm a passionate developer who built this Zerodha clone from the
								ground up. With expertise in React, Node.js, and financial
								technologies, I've created a comprehensive trading platform that
								mimics the functionality and clean design of Zerodha. This
								project demonstrates my abilities in frontend development,
								backend integration, and understanding of financial market
								applications.
							</p>
							<div className="d-flex justify-content-center gap-4 mt-4">
								<a
									href="https://github.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary fs-4"
								>
									<i className="fa-brands fa-github"></i>
								</a>
								<a
									href="https://linkedin.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-secondary fs-4"
								>
									<i className="fa-brands fa-linkedin-in"></i>
								</a>
								<a
									href="mailto:contact@example.com"
									className="text-secondary fs-4"
								>
									<i className="fa-solid fa-envelope"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row mt-5">
				<div className="col-12">
					<div className="card border-0 bg-light">
						<div className="card-body p-4">
							<h4 className="mb-4">Project Highlights</h4>
							<div className="row">
								<div className="col-md-4 mb-3">
									<div className="d-flex align-items-start">
										<i className="fa-solid fa-code text-primary me-3 mt-1 fs-5"></i>
										<div>
											<h5>Full Stack Development</h5>
											<p>
												Built with React frontend and backend integration for a
												complete trading platform experience.
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 mb-3">
									<div className="d-flex align-items-start">
										<i className="fa-solid fa-mobile-screen text-primary me-3 mt-1 fs-5"></i>
										<div>
											<h5>Responsive Design</h5>
											<p>
												Optimized user experience across desktop, tablet, and
												mobile devices.
											</p>
										</div>
									</div>
								</div>
								<div className="col-md-4 mb-3">
									<div className="d-flex align-items-start">
										<i className="fa-solid fa-chart-line text-primary me-3 mt-1 fs-5"></i>
										<div>
											<h5>Trading Features</h5>
											<p>
												Implemented key trading functionalities and financial
												data visualizations.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Team;
