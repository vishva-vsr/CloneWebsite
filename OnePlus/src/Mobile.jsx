import Nord3mob from './assets/Nord3mob.jpeg'
import nord4mob from './assets/nord4mob.jpeg'
import Nordce3mob from './assets/Nordce3mob.jpeg'
import nordmobce4 from './assets/nordmobce4.jpeg'
import OnePlusOpenmob from './assets/OnePlusOpenmob.jpeg'
import mob12 from './assets/mob12.jpeg'
import mobCe4lite from './assets/mobCe4lite.jpg'
import mob12r from './assets/mob12r.jpeg'



function Mobile(){

    return(
       <>
       
        <div className="mob-div">
            <img className="mob-pic" src={Nord3mob} alt="" />
            <h1 className="mob-txt">OnePlus Nord 3</h1>
            <p className="mob-txt">Price:33,000</p>
            <button className='mob-btn'>BuyNow</button>
            
        </div>
       
            <div className="mob-div">
                <img className="mob-pic" src={nord4mob} alt="" />
                <h1 className="mob-txt">OnePlus Nord 4</h1>
                <p className="mob-txt">Price:33,000</p>
                <button className='mob-btn'>BuyNow</button>
                
            </div>
       
            <div className="mob-div">
                <img className="mob-pic" src={Nordce3mob} alt="" />
                <h1 className="mob-txt">OnePlus Nord CE 3</h1>
                <p className="mob-txt">Price:23,000</p>
                <button className='mob-btn'>BuyNow</button>
                
            </div>
      
            <div className="mob-div">
                <img className="mob-pic" src={nordmobce4} alt="" />
                <h1 className="mob-txt">OnePlus Nord CE 4</h1>
                <p className="mob-txt">Price:25,000</p>
                <button className='mob-btn'>BuyNow</button>
               
            </div>
      
            <div className="mob-div">
                <img className="mob-pic" src={OnePlusOpenmob} alt="" />
                <h1 className="mob-txt">OnePlus Open</h1>
                <p className="mob-txt">Price:99,000</p>
                <button className='mob-btn'>BuyNow</button>
                
            </div>
     
            <div className="mob-div">
                <img className="mob-pic" src={mob12} alt="" />
                <h1 className="mob-txt">OnePlus 12</h1>
                <p className="mob-txt">Price:63,000</p>
                <button className='mob-btn'>BuyNow</button>
                
            </div>
     
            <div className="mob-div">
                <img className="mob-pic" src={mobCe4lite} alt="" />
                <h1 className="mob-txt">OnePlus CE4 Lite</h1>
                <p className="mob-txt">Price:19,999</p>
                <button className='mob-btn'>BuyNow</button>
                
            </div>
       
            <div className="mob-div">
                <img className="mob-pic" src={mob12r} alt="" />
                <h1 className="mob-txt">OnePlus 12R</h1>
                <p className="mob-txt">Price:39,999</p>
                <button className='mob-btn'>BuyNow</button>
                
            </div>
    
      
       
           
           
           
           
           
           
            


            
            
            </>
    );
}
export default Mobile