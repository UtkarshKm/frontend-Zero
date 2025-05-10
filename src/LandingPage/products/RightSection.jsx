import React from "react";

function RightSection({imageURL, productName, productDescription, learnMore}) {
	return (
		<div className="container">
			<div className="row mt-5 justify-content-center align-items-center">
				<div className="col-5">
					<h1 className="mb-5">{productName}</h1>
					<p >{productDescription}</p>
					<div className="d-flex gap-3 mt-4">
						<a
							href={learnMore}
							className="text-decoration-none"
						>
							Learn More
							<i className="fa-solid fa-arrow-right fa-xs text-primary ms-2"></i>
						</a>
					</div>
				</div>
				<div className="col-2"></div>
				<div className="col-5">
					<img src={imageURL} />
				</div>
			</div>
		</div>
	);
}

export default RightSection;
