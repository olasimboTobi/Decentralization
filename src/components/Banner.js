import React from 'react'
import './Banner.css'
import Forex from './Forex'
// import Ticker from 'react-ticker'
import Marquee from "react-fast-marquee"


function Banner() {
  return (
    <div className="banner">
        <div className="banner--scroll">
          <div className='banner--powered'>
            <p className='powered'>Powered by</p>
            <div style={{width:'30px', height:'30px', display: "flex", gap: 3, align: "center"}}>
              <a href="https://coinmarketcap.com/"><img src='https://www.drupal.org/files/project-images/39501128-e66e2a18-4d6d-11e8-9e16-88655102da6c.png' width='100' height='20'/></a>
            </div>
          </div>
          <Marquee pauseOnHover speed='35'>
            <div className="banner--forex">
                <Forex />
            </div>
          </Marquee>
        </div>s
       
    </div>
  )
}

export default Banner;





// function Banner() {
//   return (
//     <div className="banner">
//         <div className="banner--scroll">
//           <div className='banner--powered'>
//             <p className='powered'>Powered by</p>
//             <p className='powered--logo'>ITON</p>
//           </div>
//           <Ticker mode="smooth">
//             {({ index  }) => (
//               <>
//                 <div className="banner--forex">
//                   <Forex/>
//                 </div>
//               </>
//             )}
//           </Ticker>
//         </div>
//         <div className="banner--static">
//             <div className="banner--powered">
//               <p className='powered'>Powered by</p>
//               <p className='powered--logo'>ITON</p>
//             </div>
//             <div className="banner--forex"></div>
//         </div> 
//     </div>
//   )
// }

// export default Banner;






