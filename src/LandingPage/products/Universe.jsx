import React from 'react';

const partnersData = [
  {
    name: "Zerodha Fund House",
    image: "media\\images\\zerodhaFundhouse.png",
    description: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    link: "#",
  },
  {
    name: "Sensibull",
    image: "media\\images\\sensibullLogo.svg", // Placeholder: Update with actual image path
    description: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    link: "#",
  },
  {
    name: "Tijori",
    image: "media\\images\\tijori.svg", // Placeholder: Update with actual image path
    description: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    link: "#",
  },
  {
    name: "Streak",
    image: "media\\images\\streakLogo.png", // Placeholder: Update with actual image path
    description: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    link: "#",
  },
  {
    name: "smallcase",
    image: "media\\images\\smallcaseLogo.png",
    description: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    link: "#",
  },
  {
    name: "Ditto",
    image: "media\\images\\dittoLogo.png", // Placeholder: Update with actual image path
    description: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    link: "#",
  },
];

function Universe() {
  return (
    <div className="container py-5">
      <div className="row text-center mb-5">
        <div className="col">
          <h1 className="mb-3">
          The Zerodha Universe
          </h1>
          <p>
          Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>
      </div>

      {/* First row of partners */}
      <div className="row justify-content-center">
        {partnersData.slice(0, 3).map((partner, index) => (
          <div key={partner.name} className="col-md-4 text-center mb-4 px-lg-4">
            <a href={partner.link} className="text-decoration-none d-block">
              <img
                src={partner.image}
                alt={partner.name}
                style={{ height: '40px', marginBottom: '15px', objectFit: 'contain' }}
              />
              <p className="text-muted small" style={{ minHeight: '70px' }}> {/* Adjusted minHeight for text alignment */}
                {partner.description}
              </p>
            </a>
          </div>
        ))}
      </div>

      {/* Second row of partners */}
      <div className="row justify-content-center mt-md-3">
        {partnersData.slice(3, 6).map((partner, index) => (
          <div key={partner.name} className="col-md-4 text-center mb-4 px-lg-4">
            <a href={partner.link} className="text-decoration-none d-block">
              <img
                src={partner.image}
                alt={partner.name}
                style={{ height: '40px', marginBottom: '15px', objectFit: 'contain' }}
              />
              <p className="text-muted small" style={{ minHeight: '70px' }}> {/* Adjusted minHeight for text alignment */}
                {partner.description}
              </p>
            </a>
          </div>
        ))}
      </div>

      {/* Sign up button */}
      <div className="row text-center mt-4 mb-3">
        <div className="col">
          <a href="#" className="btn btn-primary btn-lg px-4">
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  );
}

export default Universe;
