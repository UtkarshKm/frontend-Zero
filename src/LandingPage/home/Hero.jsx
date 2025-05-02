import React from "react";

function Hero() {
	return (
		<div className="my-5">
			<div className="container p-5 my-5">
				<div className="row text-center">
					<img
						src="media/images/homeHero.png"
						alt="Home hero"
						className="mb-5"
					/>
					<h1 className="my-5">Invest in everything</h1>
					<p className="fs-6">
						Online platform to invest in stocks, derivatives, mutual funds,
						ETFs, bonds, and more.
					</p>
					<button
						type="button"
						className="btn btn-primary btn-lg my-3"
						style={{
							width: "200px", 
							margin: "0 auto",
							padding: "12px 24px",
							fontSize: "1.2rem"
						}}
					>
						Sign Up for free
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
