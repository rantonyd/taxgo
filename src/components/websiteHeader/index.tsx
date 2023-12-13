import React,{useState} from 'react';
import {Button,Drawer, Flex} from 'antd';
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { SiWinamp } from "react-icons/si";
import { IoMdCloseCircleOutline } from "react-icons/io";
import call from "../../assets/call.png";
import taxlogo from "../../assets/taxgo logo.png";
import "./styles.scss";
function WebsiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
     <div className='navbar'>
      <div className='websiteHeader-Box1'>
        <div className='websiteHeader-Box01'>
         
           <Button className='call'><img className="io1" src={call} alt=""/>Call Us</Button>
           <Button className='mail' icon={<IoMail className='io'/>}>Mail Us</Button>
         
          <img className="tax" src={taxlogo } alt="" />
        </div>
      
      </div>
      <div className='websiteHeader-Box2'>
       <div className="websiteHeader-Box02">
            <div className='item'>HOME</div>
             <div className='item'>SERVICES</div>
             <div className='item'>PRICING</div>
             <div className='item'>CONTACT</div>
             <div className='item'>SIGN IN</div>
             <div className='item'>REGISTER</div> 
       </div>
          
      </div>
      <div className='websiteHeader-Box3'>
       <div className='websiteHeader-Box03'>
         <FaFacebook className='fa'/>  
         <PiInstagramLogoLight className='in'/>
         <IoLogoTwitter className='tw'/>
         <IoLogoYoutube className='yo'/>
       </div>
       <div  className='websiteHeader-Box003'>
         <Button className='lan'>EN</Button>
       </div>
      </div>
      
      <div className='websiteHeader-Box4'>
      <div className="si" onClick={()=>setOpen(true)}><SiWinamp style={{backgroundColor:'yellow',borderRadius:'50%',fontSize: '30px'}}/></div> 
      </div>

     </div>
     <Drawer className="drawer" placement="right" closable={false} onClose={()=>setOpen(false)} open={open}
      footer={
        <div style={{textAlign:'center'}}>
         <IoMdCloseCircleOutline style={{fontSize:'35',cursor:'pointer',color:'red',borderRadius:'50%'}} onClick={()=>setOpen(false)} />
        </div>
      }
      >
       <div className='menu'>
        <p>HOME</p>
        <p>SERVICES</p>
        <p>PRICING</p>
        <p>CONTACT</p>
        <p>SIGN IN</p>
        <p>REGISTER</p>
       </div>
       <div className='dsocial'>
        <FaFacebook className='fa'/>  
         <PiInstagramLogoLight className='in'/>
         <IoLogoTwitter className='tw'/>
         <IoLogoYoutube className='yo'/>
       </div>
      </Drawer>
    </>
  )
}

export default WebsiteHeader;