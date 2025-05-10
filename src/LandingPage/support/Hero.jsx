import React from "react";

function Hero() {
	return (
		<section className="support-hero bg-light py-5">
			<div className="container">
				<div className="row align-items-center g-4">
					<div className="col-lg-6">
						<h1 className="display-4 fw-bold mb-4">Support Portal</h1>
						<p className="lead mb-4 text-secondary">
							Need help with your account or have questions about our services?
							Our support team is here to assist you.
						</p>
						<div className="d-flex flex-wrap gap-3 mb-4">
							<button className="btn btn-primary btn-lg px-4 d-flex align-items-center">
								<i className="fas fa-headset me-2"></i> Contact Us
							</button>
							<button className="btn btn-outline-primary btn-lg px-4 d-flex align-items-center">
								<i className="fas fa-book-open me-2"></i> Browse FAQs
							</button>
						</div>
						<div className="d-flex align-items-center mt-5">
							<div className="badge bg-success p-2 me-3">
								<i className="fas fa-clock"></i>
							</div>
							<div>
								<p className="mb-0 text-success fw-semibold">24/7 Support</p>
								<p className="small text-muted mb-0">
									We're here whenever you need us
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="card shadow-lg border-0 rounded-4">
							<div className="card-header bg-primary text-white p-4 rounded-top-4">
								<h3 className="card-title mb-0 fw-bold">
									Submit a Support Ticket
								</h3>
								<p className="card-text mb-0 mt-2 opacity-75">
									Fill in the details below and we'll respond shortly
								</p>
							</div>
							<div className="card-body p-4">
								<form>
									<div className="mb-3">
										<label
											htmlFor="name"
											className="form-label fw-semibold"
										>
											<i className="fas fa-user me-2 text-primary opacity-75"></i>
											Full Name
										</label>
										<input
											type="text"
											className="form-control form-control-lg"
											id="name"
											placeholder="Enter your name"
										/>
									</div>
									<div className="mb-3">
										<label
											htmlFor="email"
											className="form-label fw-semibold"
										>
											<i className="fas fa-envelope me-2 text-primary opacity-75"></i>
											Email Address
										</label>
										<input
											type="email"
											className="form-control form-control-lg"
											id="email"
											placeholder="Enter your email"
										/>
									</div>
									<div className="mb-3">
										<label
											htmlFor="subject"
											className="form-label fw-semibold"
										>
											<i className="fas fa-tag me-2 text-primary opacity-75"></i>
											Subject
										</label>
										<select
											className="form-select form-select-lg"
											id="subject"
										>
											<option selected>Select issue type</option>
											<option>Account Access</option>
											<option>Technical Issue</option>
											<option>Billing Inquiry</option>
											<option>Feature Request</option>
											<option>Other</option>
										</select>
									</div>
									<div className="mb-4">
										<label
											htmlFor="message"
											className="form-label fw-semibold"
										>
											<i className="fas fa-comment me-2 text-primary opacity-75"></i>
											Message
										</label>
										<textarea
											className="form-control form-control-lg"
											id="message"
											rows="4"
											placeholder="Describe your issue in detail"
										></textarea>
									</div>
									<button
										type="submit"
										className="btn btn-primary w-100 py-3 fw-bold"
									>
										<i className="fas fa-paper-plane me-2"></i> Submit Ticket
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
