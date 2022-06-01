// eslint-disable-next-line
import  './App.css';
import React,{ useState} from 'react';
//import { useStateWithCallback } from 'use-state-with-callback';


function App() {
  const title="FitBit 19 - The Smartest Watch";
  const description= 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.';
 // eslint-disable-next-line
   const time= new Date().getHours()> 9 ? new Date().getHours() : '0'+ new Date().getHours();
 const mins= new Date().getMinutes()> 9 ? new Date().getMinutes() : '0'+ new Date().getMinutes();
const finaltime=`${time}:${mins}`;
  var img='https://imgur.com/iOeUBV7.png';
 

 const [text,changeColor]=useState("")
 if(text==="red")
 img='https://imgur.com/PTgQlim.png';

 if(text==="black")
 img='https://imgur.com/iOeUBV7.png';

 if(text==="blue")
 img='https://imgur.com/Mplj1YR.png';

 if(text==="purple")
 img='https://imgur.com/xSIK4M8.png';
  
 var[number,setstyle]=useState(0)
 var[number1,setheart]=useState(0)

 

 var heartbeat="preheartbeat"
 var showtime=""
 if(number===1 )
  showtime=finaltime
 



 if(number1===1)
 heartbeat="heartbeat"
   
  
  
   
  
  
  
  const handleClickHeart=()=>{
setheart(1);
setstyle(0);
};
const handleClickTime=()=>{
  
  setstyle(1);
  setheart(0);
  };
  
   return (
    
       
    <div className="App">
      <header className="App-Header">
        <nav className="Topbar">
        <img src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png" alt="Amazon logo" width="100px"/>
        </nav>
      </header>

      <div className="maincontainer">
        <div className="productpic">
       
          <img src={img}  alt="Product review"/>
          
          <div className="textDisplayWatch">
          {showtime}
        </div>
          <div className={heartbeat}>
          <i class="fa-solid fa-heart-pulse"></i>
          <p>78</p>
            </div>


         
        
        </div>

        <div className="productdesc">
          <h1>{title}</h1>
          <p>{description}</p>
          <h3>Select Color</h3>
          
          <div id="black"    className="watchbutton" onClick={()=>changeColor("black")}> <img src='https://imgur.com/iOeUBV7.png' alt="watch button"/></div>
          <div id="red" className="watchbutton" onClick={()=>changeColor("red")} > <img src='https://imgur.com/PTgQlim.png' alt="watch button"/></div>
          <div id="blue"  className="watchbutton" onClick={()=>changeColor("blue")} > <img src='https://imgur.com/Mplj1YR.png' alt="watch button"/></div>
          <div id="purple" className="watchbutton" onClick={()=>changeColor("purple")}> <img src='https://imgur.com/xSIK4M8.png' alt="watch button"/></div>

          <h3 style={{marginTop:"30px"}}> Features</h3>
          <button  className={number?"clickedtimebutton":"timebutton"}  onClick={handleClickTime} > Time</button>
          <button className={number1?"clickedheartbutton":"heartbutton"} onClick={handleClickHeart}>Heart Rate</button>
          <br/>
          <button className="buy">Buy Now</button>

        </div>
      </div>
  </div>
      
  );
}

 

 
  
export default App;
