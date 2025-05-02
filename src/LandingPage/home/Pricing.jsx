import React from "react";

function Pricing() {
	return (
		<div className="my-5">
			<div className="container mt-5">
				<div className="row">
					<div className="col-4">
						<h1 className="mb-5">Unbeatable pricing</h1>
						<p className="fs-6">
							We pioneered the concept of discount broking and price
							transparency in India. Flat fees and no hidden charges.
						</p>
						<a
							href="#"
							className="d-flex align-items-center text-decoration-none"
						>
							See pricing
							<i className="fa-solid fa-arrow-right fa-xs text-primary ms-2"></i>
						</a>
					</div>
					<div className="col-2"></div>
					<div className="col-6">
						<div className="row text-center">
							<div className="col border p-3">
								<h1>₹0</h1>
								<p className="fs-6">
									Free equity delivery and <br /> direct mutual funds
								</p>
							</div>
							<div className="col border p-3">
								<h1>₹20</h1>
								<p className="fs-6">Intraday and F&O </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;
