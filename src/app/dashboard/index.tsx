
import React from "react";
import WebsiteHeader from "../../components/websiteHeader";
import Logo from "../../assets/landing bg img 1.png";
import "./styles.scss";
import talogo from "../../assets/taxgo logo.png";

// import DownloadImg from "../../asset/image/arrow-down-circle-outline.png";
import { Carousel } from "antd";
function DashBoard() {
  return (
    <div className="dashBoard-Box1">
      <WebsiteHeader />
      <div className="dashBoard-Box2">
        <div>
          
            <div>
              <img className="dashBoard-carousalImg" src={Logo} alt="" />
            </div>
            
        </div>
        <div className="dashBoard-Box3">
          <div className="dashBoard-Box4">
          
            <div className="dashBoard-Box5">
             <div className="dashBoard-Box6">
               <div className="dashBoard-Txt1"> Simple, Best & Affordable 
                <br/> Accounting Software Solution</div>
              </div>
               <br/>
               <div className="dashBoard-img">
                 <img className="img-fluid" src={talogo} alt=""/>
               </div>
               
              <div className="dashBoard-Box7">
                <div>
                  <button className="dashBoard-Box8">Contact Us</button>
                </div>
               
              </div>
            </div>
          </div>
          
        </div>
      </div>
      {/* <WebsiteFooter /> */}
    </div>
  );
}

export default DashBoard;
