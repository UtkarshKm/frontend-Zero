import React from "react";

function Ticket() {
	return (
		<section className="ticket-section py-5 bg-white">
			<div className="container">
				<div className="text-center mb-5">
					<span className="badge bg-primary px-3 py-2 mb-3">
						Support Categories
					</span>
					<h2 className="fw-bold">
						To create a ticket, select a relevant topic
					</h2>
					<p className="text-muted mt-3 col-md-8 mx-auto">
						Choose the category that best matches your query, and we'll guide
						you to the right solution
					</p>
				</div>

				<div className="row g-4">
					{/* Account Opening Column */}
					<div className="col-md-4">
						<div className="category-card h-100 p-4 border rounded-4 shadow-sm">
							<div className="d-flex align-items-center mb-4">
								<div className="icon-circle bg-primary bg-opacity-10 rounded-circle me-3 p-3 text-primary">
									<i className="fas fa-user-plus fa-lg"></i>
								</div>
								<h4 className="fw-bold mb-0">Account Opening</h4>
							</div>

							<ul className="list-unstyled">
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Resident individual</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Minor</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Non Resident Indian (NRI)</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Company, Partnership, HUF and LLP</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Glossary</span>
									</a>
								</li>
							</ul>
							<a
								href="#"
								className="btn btn-outline-primary btn-sm mt-2"
							>
								View all topics
							</a>
						</div>
					</div>

					{/* Your Zerodha Account Column */}
					<div className="col-md-4">
						<div className="category-card h-100 p-4 border rounded-4 shadow-sm">
							<div className="d-flex align-items-center mb-4">
								<div className="icon-circle bg-success bg-opacity-10 rounded-circle me-3 p-3 text-success">
									<i className="fas fa-user fa-lg"></i>
								</div>
								<h4 className="fw-bold mb-0">Your Zerodha Account</h4>
							</div>

							<ul className="list-unstyled">
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Your Profile</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Account modification</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>
											Client Master Report (CMR) and Depository Participant (DP)
										</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Nomination</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Transfer and conversion of securities</span>
									</a>
								</li>
							</ul>
							<a
								href="#"
								className="btn btn-outline-primary btn-sm mt-2"
							>
								View all topics
							</a>
						</div>
					</div>

					{/* Kite Column */}
					<div className="col-md-4">
						<div className="category-card h-100 p-4 border rounded-4 shadow-sm">
							<div className="d-flex align-items-center mb-4">
								<div className="icon-circle bg-info bg-opacity-10 rounded-circle me-3 p-3 text-info">
									<i className="fas fa-chart-line fa-lg"></i>
								</div>
								<h4 className="fw-bold mb-0">Kite</h4>
							</div>

							<ul className="list-unstyled">
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>IPO</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Trading FAQs</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Margin Trading Facility (MTF) and Margins</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Charts and orders</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Alerts and Nudges</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>General</span>
									</a>
								</li>
							</ul>
							<a
								href="#"
								className="btn btn-outline-primary btn-sm mt-2"
							>
								View all topics
							</a>
						</div>
					</div>
				</div>

				<div className="row g-4 mt-4">
					{/* Funds Column */}
					<div className="col-md-4">
						<div className="category-card h-100 p-4 border rounded-4 shadow-sm">
							<div className="d-flex align-items-center mb-4">
								<div className="icon-circle bg-warning bg-opacity-10 rounded-circle me-3 p-3 text-warning">
									<i className="fas fa-wallet fa-lg"></i>
								</div>
								<h4 className="fw-bold mb-0">Funds</h4>
							</div>

							<ul className="list-unstyled">
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Add money</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Withdraw money</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Add bank accounts</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>eMandates</span>
									</a>
								</li>
							</ul>
							<a
								href="#"
								className="btn btn-outline-primary btn-sm mt-2"
							>
								View all topics
							</a>
						</div>
					</div>

					{/* Console Column */}
					<div className="col-md-4">
						<div className="category-card h-100 p-4 border rounded-4 shadow-sm">
							<div className="d-flex align-items-center mb-4">
								<div className="icon-circle bg-danger bg-opacity-10 rounded-circle me-3 p-3 text-danger">
									<i className="fas fa-desktop fa-lg"></i>
								</div>
								<h4 className="fw-bold mb-0">Console</h4>
							</div>

							<ul className="list-unstyled">
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Portfolio</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Corporate actions</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Funds statement</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Reports</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Profile</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Segments</span>
									</a>
								</li>
							</ul>
							<a
								href="#"
								className="btn btn-outline-primary btn-sm mt-2"
							>
								View all topics
							</a>
						</div>
					</div>

					{/* Coin Column */}
					<div className="col-md-4">
						<div className="category-card h-100 p-4 border rounded-4 shadow-sm">
							<div className="d-flex align-items-center mb-4">
								<div className="icon-circle bg-secondary bg-opacity-10 rounded-circle me-3 p-3 text-secondary">
									<i className="fas fa-coins fa-lg"></i>
								</div>
								<h4 className="fw-bold mb-0">Coin</h4>
							</div>

							<ul className="list-unstyled">
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Understanding mutual funds and Coin</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Coin app</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Coin web</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>Transactions and reports</span>
									</a>
								</li>
								<li className="mb-3">
									<a
										href="#"
										className="text-decoration-none d-flex align-items-center"
									>
										<i className="fas fa-angle-right text-primary me-2"></i>
										<span>National Pension Scheme (NPS)</span>
									</a>
								</li>
							</ul>
							<a
								href="#"
								className="btn btn-outline-primary btn-sm mt-2"
							>
								View all topics
							</a>
						</div>
					</div>
				</div>

				<div className="text-center mt-5">
					<div className="d-inline-block p-4 rounded-4 bg-light">
						<p className="mb-2">
							<strong>Still need help?</strong> Contact our support team
							directly
						</p>
						<a
							href="#"
							className="btn btn-primary px-4"
						>
							<i className="fas fa-headset me-2"></i> Get in touch
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Ticket;
