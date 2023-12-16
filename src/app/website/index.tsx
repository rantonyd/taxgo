
import React from "react";
import WebsiteHeader from "../../components/websiteHeader";
import Logo from "../../assets/landing bg img 1.png";
import Logom from "../../assets/landing bg img 2.png";
import "./styles.scss";
import talogo from "../../assets/taxgo logo.png";
import { Button } from "antd";


function DashBoard() {
  return (
   <>
     <div className="dashBoard-Box1">
      {/* <WebsiteHeader /> */}
      <div className="dashBoard-Box2">
         <div className="header-container"> 
            <WebsiteHeader />
         </div>
         <div className="image-container">
          <img className="dashBoard-carousalImg" src={Logo} alt="" />
         </div>
       <div className="dashBoard-Box3">
        <div className="dashBoard-Box4">
          <div className="dashBoard-Box5">
            <div className="dashBoard-Box6">
              <div className="dashBoard-Txt1"> Simple, Best & Affordable 
              <br/> Accounting Software Solution</div>
              <div className="dashBoard-Txt2">Simple, Best<br/>And Affordable <br/> Accounting Software<br/>Solution</div>
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


    <div className="dashBoard-Mbox1">
     <WebsiteHeader />
     <div className="dashBoard-Mbox2">
      <div className="Mimage-container">
        <img className="dashBoard-McarousalImg" src={Logom} alt="" />
        <div className="top-mdiv">
          <div className="mdiv1"> WELCOME TO Tax GO ACCOUNTING</div><br/>
          <div className="mdiv2"> Simple, Best & Affordable <br/>
          Accounting Software<br/> Solution</div>
        </div>
      </div>
      <div className="dashBoard-Mbox3">
       <div className="Mbox-01">WE ADVICE BUSINESS</div><br/>
       <div className="Mbox-02">Expert Financial Advice <br/>and Consultancy</div><br/>
       <div className="Mbox-03"><Button className="bu">Contact Us</Button></div>
      </div>
     </div>
    </div>
   </>
  );
}

export default DashBoard;
