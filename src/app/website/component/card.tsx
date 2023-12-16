import React from 'react'
import  "../styles.scss";
import card1 from "../../../assets/card1.png" ;
import card2 from "../../../assets/card2.png" ;
import card3 from "../../../assets/card3.png" ;
import card4 from "../../../assets/card4.png" ;
import { Button } from 'antd';
function CardHeader() {
  const cardData=[
    {
      cardpic: <img className="cardpic" src={card1} alt="" />,
      feature:"Global Access",
      explanation:"Cloud Based Accounting Software enables access to your and your client accounts anywhere and anytime"
       
    },
    {   
        cardpic: <img className="cardpic" src={card2} alt="" />,
        feature:"Accounting Solution",
        explanation:"Tax GO Accounting Software manage invoices, customers, suppliers, banking and prepare reports on the GO."
      },
      {
        cardpic: <img className="cardpic" src={card3} alt="" />,
        feature:"General Consultancy",
        explanation:"24/7 Consultancy support from Tax GO Accounting and software experts to help engage your business and save your time."
      },
      {   
        cardpic: <img className="cardpic" src={card4} alt="" />,
        feature:"Regulated and Legislated",
        explanation:"Stay up to date with the latest legislation for tax, accounting, and payroll. Call us today to start managing your business."
        
      },
]
  return (
    <>
     <div className='cardHeader'>
      <div className='cardHeader-Box1'>
       <div className='cardHeader-Box2'>
         Our Features
       </div>
       <div  className='cardHeader-Box3'>
        {cardData.map((item: any) => {
         return (
          <div className='card'>
            <div className='cardpic'>{item.cardpic}</div>
            <div className='cardfeature'>{item.feature}</div>
            <div className='cardexp'>{item.explanation}</div>
          </div>
         );
        })}
       </div>
       <div className='cardHeader-Box4'>
        <Button className='get'>Get Started</Button>
       </div>
       
      </div>
     </div>
    </>
  )
}

export default CardHeader;