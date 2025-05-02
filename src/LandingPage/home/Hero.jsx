import React from "react";

function Hero() {
	return (
		<>
			<div className="container p-5">
				<div className="row text-center">
					<img
						src="media/images/homeHero.png"
						alt="Home hero"
						className="mb-5"
					/>
					<h1>Invest in everything</h1>
					<p className="fs-6">
						Online platform to invest in stocks, derivatives, mutual funds,
						ETFs, bonds, and more.
					</p>
					<button
						type="button"
						className="btn btn-primary"
						style={{width: "150px", margin: "0 auto"}}
					>
						Sign Up for free
					</button>
				</div>
			</div>
		</>
	);
}

export default Hero;
