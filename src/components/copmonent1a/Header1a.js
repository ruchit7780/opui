import React from "react";
import photo11 from "../images/Group.png";
import { Link } from "react-router-dom";

const Header1a = () => {
  return (
    <>
      <div className="top">
        <h1 className="top_1"> QUICK BUY! Get up to 25% off on All Stones</h1>
      </div>

      <div className="top_2 tbdr">
        <div>
          <img src={photo11} alt="" />
          <p>hellfllsd</p>
        </div>
        <div>hello123</div>
      </div>
      <div className="top_3">
        <ul className="ul_1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Product</a>
            <ul className="ul_11   tbdr">
              <li>
                <a
                  className="commom_123 target_1 specialhover special_1"
                  href="/"
                >
                  Dhoop Cones
                </a>

                <ul className="ul_1123 tbdr">
                  <li>
                    <Link to="/page" className="commom_123 target_12 special_1">
                      Jar Cones
                    </Link>
                  </li>
                  <li>
                    <a className="commom_123  target_12" href="/">
                      Chandan Bamboo Dhoop
                    </a>
                  </li>
                  <li>
                    <a className="commom_123 target_12 " href="/">
                      Backflow Cone Dhoop
                    </a>
                  </li>
                  <li>
                    <a className="commom_123 target_12 " href="/">
                      Buddha Red Incense Cone
                    </a>
                  </li>
                  <li>
                    <a className="commom_123 target_12 " href="/">
                      ountain Sandal Dhoop
                    </a>
                  </li>
                  <li>
                    <a className="commom_123 target_12 " href="/">
                      Cone Sandal Dhoop
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Incense Holders
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Yantras
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Incense Sticks
                </a>
              </li>
              <li>
                <a className="commom_123 target_1 " href="/">
                  Pooja Thali Sets
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Shankh
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Book Rests
                </a>
              </li>
              <li>
                <a className="commom_123 target_1  " href="/">
                  Kalash
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Service</a>
          </li>
          <li>
            <a href="/">Cource</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Video</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header1a;
