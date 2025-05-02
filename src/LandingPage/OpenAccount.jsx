import React from "react";
import {Link} from "react-router-dom";

function OpenAccount() {
  return (
    <div className="my-5">
      <div className="container p-5 my-5">
        <div className="row text-center">
          <h1 className="my-5">Open a Zerodha account</h1>
          <p className="fs-6 mb-5">
      Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            style={{width: "200px", margin: "0 auto"}}
          >
            <Link to="/signup" className="text-white text-decoration-none">
            Sign Up for free
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
