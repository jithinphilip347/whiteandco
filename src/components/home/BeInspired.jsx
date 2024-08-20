import { assets } from "../../assets/script";
// import BeInspiredCarousel from "./BeInspiredCarousel";


const BeInspired = () => {
    
  return (
    <div className="be-inspired-container">
      <div className="be-inspired-section">
        <div className="be-inspired-title">
          <p>Be Inspired</p>
        </div>
        <div className="be-inspired-heading">
          <h1>Handpicked Properties</h1>
          <div className="left-right-arrow">
            <img src={assets.leftArrow} alt="Previous" className="left-arrow"  />
            <img src={assets.rightArrow} alt="Next" className="right-arrow"  />
          </div>
        </div>
        <div className="be-inspired-item">
          <ul className="be-inspired-list-items">
            <li>For Sale</li>
            <li>For Rent</li>
            <li>Holiday Homes</li>
            <li>Commercial</li>
          </ul>
        </div>
       {/* <BeInspiredCarousel /> */}
      </div>
    </div>
  );
};

export default BeInspired;
