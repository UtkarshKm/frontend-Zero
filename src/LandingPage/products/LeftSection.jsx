import React from "react";

function LeftSection({
	imageURL,
	productName,
	productDescription,
	tryDemo,
	learnMore,
	googlePlay,
	appStore,
}) {
	return (
		<div className="container ">
			<div className="row">
				<div className="col-5">
					<img src={imageURL} />
				</div>
				<div className="col-2"></div>
				<div className="col-5 ">
					<h1 className="mb-5">{productName}</h1>
					<p>{productDescription}</p>
					<div className="d-flex gap-3 mt-4">
						<a
							href={tryDemo}
							className="text-decoration-none"
						>
							Try Demo
							<i className="fa-solid fa-arrow-right fa-xs text-primary ms-2"></i>
						</a>
						<a
							href={learnMore}
							className="text-decoration-none"
						>
							Learn More
							<i className="fa-solid fa-arrow-right fa-xs text-primary ms-2"></i>
						</a>
					</div>
					<div className="d-flex gap-3 mt-4">
						<a href={googlePlay}>
							<img
								src="media\images\googlePlayBadge.svg"
								alt="Google Play"
							/>
						</a>
						<a href={appStore}>
							<img
								src="media\images\appstoreBadge.svg"
								alt="App Store"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LeftSection;
