import React from "react";

function Footer() {
	return (
		<footer className="py-5 bg-light">
			<div className="container">
				{/* First row with 4 columns */}
				<div className="row mb-4">
					{/* First column with logo and social icons */}
					<div className="col-md-3 mb-4">
						<img src="media/images/logo.svg" alt="Logo" className="mb-3" style={{ width: "120px" }} />
						<p className="text-muted small">© 2010 - 2025, Stock Trading App.<br />All rights reserved.</p>
						<div className="d-flex gap-3 mt-3">
							<a href="#" className="text-secondary"><i className="fa-brands fa-x-twitter"></i></a>
							<a href="#" className="text-secondary"><i className="fa-brands fa-instagram"></i></a>
							<a href="#" className="text-secondary"><i className="fa-brands fa-linkedin-in"></i></a>
							<a href="#" className="text-secondary"><i className="fa-brands fa-youtube"></i></a>
							<a href="#" className="text-secondary"><i className="fa-brands fa-whatsapp"></i></a>
							<a href="#" className="text-secondary"><i className="fa-brands fa-telegram"></i></a>
						</div>
					</div>
					
					{/* Company column */}
					<div className="col-md-3 mb-4">
						<h6 className="mb-3 text-dark fw-bold">Company</h6>
						<ul className="list-unstyled">
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">About</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Products</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Pricing</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Referral programme</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Careers</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Press & media</a>
							</li>
						</ul>
					</div>
					
					{/* Support column */}
					<div className="col-md-3 mb-4">
						<h6 className="mb-3 text-dark fw-bold">Support</h6>
						<ul className="list-unstyled">
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Contact us</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Support portal</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Z-Connect blog</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">List of charges</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Downloads & resources</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Videos</a>
							</li>
						</ul>
					</div>
					
					{/* Account column */}
					<div className="col-md-3 mb-4">
						<h6 className="mb-3 text-dark fw-bold">Account</h6>
						<ul className="list-unstyled">
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Open an account</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">Fund transfer</a>
							</li>
							<li className="mb-2">
								<a href="#" className="text-decoration-none text-secondary">60 day challenge</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Second row with legal text */}
				<div className="row mt-4 pt-4 border-top">
					<div className="col-12">
						<p className="text-muted small mb-2">
							Stock Trading Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Stock Trading Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through 
							Stock Trading Commodities Pvt. Ltd. MCX: 46025, NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Stock Trading Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@stocktrading.com, for DP related to dp@stocktrading.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
						</p>
						<p className="text-muted small">
							Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
