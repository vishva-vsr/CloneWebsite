import OnePlus12 from './assets/OnePlus12.jpeg'
import OnePlusOpen from './assets/OnePlusOpen.jpeg'
import Nord4 from './assets/Nord4.jpeg'
import OnePlus12R from './assets/OnePlus12R.jpeg'
import Nord3 from './assets/Nord3.jpeg'
import Ce4 from './assets/Ce4.jpeg'
import Ce4lite from './assets/Ce4lite.jpeg'
import banner from './assets/banner.jpeg'
import banner2 from './assets/banner2.jpg'
import banner3 from './assets/banner3.jpg'

function Card(){
    return(
        <>
        <div className="card-banner">
            <img className="profile" src={banner} alt="Profile picture" />
           <div className='top-left'>
             OnePlus Summer<br/> Event  <br/>July 17
              <br/>
              <p  className='para-top'>In India Delhi 3:00 IST</p>  
           </div>
                
            
        </div>
        <div className="card-banner">
            <img className="profile" src={banner2} alt="Profile picture" />
            <div className='top-left1'>
             OnePlus Nord CE 4<br/>Lite 5G   
           </div>
        </div>
        <div className="card-banner">
            <img className="profile" src={banner3} alt="Profile picture" />
            <div className='top-left2'>
             OnePlus 12
           </div>
            <h2 className="vsr">New Launches</h2>
            <p className="card-paragraph"></p>
        </div>
       <a href="https://www.oneplus.in/oneplus-12"> <div className="card">
            <img className="profile" src={OnePlus12} alt="Profile picture" />
            <h2 className="vsr">OnePlus 12</h2>
            <p className="card-paragraph">Perfect Flagship.!</p>
            <button className="btn-Know">Know More</button> 
        </div></a>
       
<a href="">
<div className="card">
                <img className="profile" src={OnePlus12R} alt="Profile picture" />
                <h2 className="vsr">OnePlus 12R</h2>
                <p className="card-paragraph">Near FlagShip Experience</p>
                <button className="btn-Know">Know More</button>
            </div>
</a>
        
<a href=""><div className="card">
                <img className="profile" src={Ce4lite} alt="Profile picture" />
                <h2 className="vsr">OnePlus Nord CE 4 Lite</h2>
                <p className="card-paragraph">Under 19,999</p>
                <button className="btn-Know">Know More</button>
            </div>
        </a>
            
            
            <a href="">  <div className="card">
                <img className="profile" src={Ce4} alt="Profile picture" />
                <h2 className="vsr">OnePlus Nord CE4</h2>
                <p className="card-paragraph">Mid Range</p>
                <button className="btn-Know">Know More</button>
            </div>
        </a>
          
           <a href="">
           <div className="card">
                <img className="profile" src={Nord3} alt="Profile picture" />
                <h2 className="vsr">OnePlus Nord 3</h2>
                <p className="card-paragraph">Near Flagship</p>
                <button className="btn-Know">Know More</button>
            </div>
            </a> 
           
            <a href="">
            <div className="card">
                <img className="profile" src={OnePlusOpen} alt="Profile picture" />
                <h2 className="vsr">OnePlus Open</h2>
                <p className="card-paragraph">First Foldable from One plus</p>
                <button className="btn-Know">Know More</button>
            </div>
            </a>
            
            <a href=""> <div className="card">
                <img className="profile" src={Nord4} alt="Profile picture" />
                <h2 className="vsr">OnePlus Nord 4</h2>
                <p className="card-paragraph">Upcoming</p>
                <button className="btn-Know">Know More</button>
            </div></a>
           
            </>
    )

}
export default Card