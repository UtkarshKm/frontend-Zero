import React from "react";

function Education() {
	return (
		<div className="my-5">
			<div className="container mt-5">
				<div className="row ml-5 mr-5">
					<div className="col-6">
						<img
							src="media\images\education.svg"
							alt="eduaction image"
						/>
					</div>
					<div className="col-6 center">
						<h1 className="mb-5">Free and open market education</h1>
						<div className="mb-4">
							<p className="fs-6">
								Varsity, the largest online stock market education book in the
								world covering everything from the basics to advanced trading.
							</p>
							<a
								href="#"
								className=" text-decoration-none"
							>
								Varsity
								<i className="fa-solid fa-arrow-right fa-xs text-primary ms-2"></i>
							</a>
						</div>
						<div className="mb-4">
							<p className="fs-6">
								TradingQ&A, the most active trading and investment community in
								India for all your market related queries.
							</p>
							<a
								href="#"
								className=" text-decoration-none"
							>
								TradingQ&A
								<i className="fa-solid fa-arrow-right fa-xs text-primary ms-2"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Education;
