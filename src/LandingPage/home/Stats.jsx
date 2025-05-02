import React from "react";

function Stats() {
	return (
		<div className="my-5">
			<div className="container mt-5">
				<div className="row d-flex align-items-stretch">
					<div className="col-6 p-5">
						<h1 className="mb-5">Trust with confidence</h1>
						<div>
							<div className="mb-4">
								<h5>Customer-first always</h5>
								<p className="fs-6">
									That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
									crores worth of equity investments.
								</p>
							</div>
							<div className="mb-4">
								<h5>The Zerodha universe</h5>
								<p className="fs-6">
									Not just an app, but a whole ecosystem. Our investments in 30+
									fintech startups offer you tailored services specific to your
									needs.
								</p>
							</div>
							<div className="mb-4">
								<h5>No spam or gimmicks</h5>
								<p className="fs-6">
									No gimmicks, spam, "gamification", or annoying push
									notifications. High quality apps that you use at your pace,
									the way you like.
								</p>
							</div>
							<div className="mb-4">
								<h5>Do better with money</h5>
								<p className="fs-6">
									With initiatives like Nudge and Kill Switch, we don't just
									facilitate transactions, but actively help you do better with
									your money.
								</p>
							</div>
						</div>
					</div>
					<div className="col-6">
						<img
							src="media\images\ecosystem.png"
							alt="eco Sysytem"
							className="img-fluid"
						/>
						<div className="d-flex gap-5 mt-4 justify-content-center">
							<a
								href="#"
								className="d-flex align-items-center text-decoration-none"
							>
								Explore our products
								<i className="fa-solid fa-arrow-right fa-xs text-primary ms-2"></i>
							</a>
							<a
								href="#"
								className="text-decoration-none"
							>
								Try Kite demo
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Stats;
