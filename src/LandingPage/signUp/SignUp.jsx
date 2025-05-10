import React, {useState} from "react";

function SignUp() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
		phoneNumber: "",
		agreeTerms: false,
	});
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const {name, value, type, checked} = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const validate = () => {
		const newErrors = {};

		if (!formData.fullName.trim()) {
			newErrors.fullName = "Full name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}

		if (!formData.password) {
			newErrors.password = "Password is required";
		} else if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters";
		}

		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		if (!formData.phoneNumber.trim()) {
			newErrors.phoneNumber = "Phone number is required";
		}

		if (!formData.agreeTerms) {
			newErrors.agreeTerms = "You must agree to the terms and conditions";
		}

		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validationErrors = validate();

		if (Object.keys(validationErrors).length === 0) {
			// Form is valid, you can submit the data
			console.log("Form submitted:", formData);
			// Reset form or redirect
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card shadow">
						<div className="card-body p-5">
							<h2 className="text-center mb-4">Create an Account</h2>

							<form onSubmit={handleSubmit}>
								<div className="mb-3">
									<label
										htmlFor="fullName"
										className="form-label"
									>
										Full Name
									</label>
									<input
										type="text"
										className={`form-control ${
											errors.fullName ? "is-invalid" : ""
										}`}
										id="fullName"
										name="fullName"
										value={formData.fullName}
										onChange={handleChange}
										placeholder="Enter your full name"
									/>
									{errors.fullName && (
										<div className="invalid-feedback">{errors.fullName}</div>
									)}
								</div>

								<div className="mb-3">
									<label
										htmlFor="email"
										className="form-label"
									>
										Email Address
									</label>
									<input
										type="email"
										className={`form-control ${
											errors.email ? "is-invalid" : ""
										}`}
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="Enter your email"
									/>
									{errors.email && (
										<div className="invalid-feedback">{errors.email}</div>
									)}
								</div>

								<div className="mb-3">
									<label
										htmlFor="phoneNumber"
										className="form-label"
									>
										Phone Number
									</label>
									<input
										type="tel"
										className={`form-control ${
											errors.phoneNumber ? "is-invalid" : ""
										}`}
										id="phoneNumber"
										name="phoneNumber"
										value={formData.phoneNumber}
										onChange={handleChange}
										placeholder="Enter your phone number"
									/>
									{errors.phoneNumber && (
										<div className="invalid-feedback">{errors.phoneNumber}</div>
									)}
								</div>

								<div className="mb-3">
									<label
										htmlFor="password"
										className="form-label"
									>
										Password
									</label>
									<input
										type="password"
										className={`form-control ${
											errors.password ? "is-invalid" : ""
										}`}
										id="password"
										name="password"
										value={formData.password}
										onChange={handleChange}
										placeholder="Create a password"
									/>
									{errors.password && (
										<div className="invalid-feedback">{errors.password}</div>
									)}
								</div>

								<div className="mb-3">
									<label
										htmlFor="confirmPassword"
										className="form-label"
									>
										Confirm Password
									</label>
									<input
										type="password"
										className={`form-control ${
											errors.confirmPassword ? "is-invalid" : ""
										}`}
										id="confirmPassword"
										name="confirmPassword"
										value={formData.confirmPassword}
										onChange={handleChange}
										placeholder="Confirm your password"
									/>
									{errors.confirmPassword && (
										<div className="invalid-feedback">
											{errors.confirmPassword}
										</div>
									)}
								</div>

								<div className="mb-3 form-check">
									<input
										type="checkbox"
										className={`form-check-input ${
											errors.agreeTerms ? "is-invalid" : ""
										}`}
										id="agreeTerms"
										name="agreeTerms"
										checked={formData.agreeTerms}
										onChange={handleChange}
									/>
									<label
										className="form-check-label"
										htmlFor="agreeTerms"
									>
										I agree to the Terms and Conditions
									</label>
									{errors.agreeTerms && (
										<div className="invalid-feedback">{errors.agreeTerms}</div>
									)}
								</div>

								<div className="d-grid gap-2">
									<button
										type="submit"
										className="btn btn-primary btn-lg"
									>
										Sign Up
									</button>
								</div>
							</form>

							<div className="mt-4 text-center">
								<p>
									Already have an account?{" "}
									<a
										href="#"
										className="link-primary"
									>
										Log In
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
