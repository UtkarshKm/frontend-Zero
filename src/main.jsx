import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import HomePage from "./LandingPage/home/HomePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUp from "./LandingPage/signUp/SignUp";
import AboutPage from "./LandingPage/about/AboutPage";
import PricingPage from "./LandingPage/pricing/PricingPage";
import SupportPage from "./LandingPage/support/SupportPage";
import ProductsPage from "./LandingPage/products/ProductsPage";
import NotFound from "./LandingPage/NotFound";

import NavBar from "./LandingPage/NavBar";
import Footer from "./LandingPage/Footer";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="signup"
					element={<SignUp />}
				/>
				<Route
					path="about"
					element={<AboutPage />}
				/>
				<Route
					path="pricing"
					element={<PricingPage />}
				/>
				<Route
					path="products"
					element={<ProductsPage />}
				/>
				<Route
					path="support"
					element={<SupportPage />}
				/>
				<Route
					path="*"
					element={<NotFound />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	</StrictMode>
);
