import React from "react";

function Awards() {
	return (
		<>
			<div className="container mt-5">
				<div className="row ml-5 mr-5">
					<div className="col-6">
						<img
							src="media/images/largestBroker.svg"
							alt="largest brocker image"
						/>
					</div>
					<div className="col-6 center">
						<h1>Largest stockbroker in India</h1>
						<p className="pb-5 fs-6">
							1.3+ Crore Zerodha clients contribute to over 15% of all retail
							order volumes in India daily by trading and investing in:
						</p>
						<div className="row">
							<div className="col">
								<ul>
									<li>Futures and Options</li>

									<li>Commodity derivatives</li>
									<li>Currency derivatives</li>
								</ul>
							</div>
							<div className="col">
								<ul>
									<li>Stocks & IPOs</li>
									<li>Direct mutual funds</li>
									<li>Bonds and Govt. Securities</li>
								</ul>
							</div>
							<div className="row">
								<img
									src="media/images/pressLogos.png"
									alt="pressLogos"
									style={{width: "80%"}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Awards;
