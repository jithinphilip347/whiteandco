import { assets } from "../../assets/script";
import { LiaAngleDownSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";

const HomeBanner = () => {
  return (
    <div className="home-banner-container">
      <div className="banner-video">
        <video muted autoPlay loop>
          <source src={assets.homeBannerVideo} />
        </video>
      </div>
      <div className="overlay-fade"></div>
      <div className="banner-search-container">
        <h1 className="title title-font">
          Professional.Transparent. <br />
          Authentic.
        </h1>
        <div className="content">
          <p>The award-winning brokerage provides a new standard of service.</p>
        </div>
        <div className="home-banner-search-form">
          <div className="search-form-content">
            <div className="buy">
              <p>Buy</p>
              <LiaAngleDownSolid />
            </div>
            <div className="border"></div>
            <div className="city">
              <p>City,Commun</p>
            </div>
            <div className="border"></div>
            <div className="bedroom">
              <p>Bedrooms</p>
              <LiaAngleDownSolid />
            </div>
            <div className="border"></div>
            <div className="price-range">
              <p>Price Range</p>
              <LiaAngleDownSolid />
            </div>
            <div className="border"></div>
            <div className="all-type">
              <p>All Types</p>
              <LiaAngleDownSolid />
            </div>
          </div>
          <div className="search-form">
            <div className="search-icon-text">
              <CiSearch className="search-icon" />
              <p>Search</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
