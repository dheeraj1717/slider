import React from 'react';
import Rectangle1 from './images/RectangleImage1.png';
import Rectangle2 from './images/RectangleImage2.png';
import Rectangle3 from './images/RectangleImage3.png';
import Rectangle4 from './images/RectangleImage4.png';

function WhoWeAre() {
  return (
    <div className='whoweare'>
              <div className='textcontainer left'>
        <h1 className='heading'>
          Who <span className='highlightHeading'>We</span> Are? <br />
          And What We Actually{" "}
          <span className='highlightHeading'>Do</span>?
        </h1>
        <p className='paragraph'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ad
          quasi ut? Sequi ex nam iure dolorum unde dolor consequuntur corporis.{" "}
          <br /> eos cupiditate, sed soluta esse possimus recusandae ad eius.
        </p>{" "}
        <br />
        <p className='paragraph2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorum
          maiores molestiae rerum non, enim veritatis. Odit officia dolorum
          commodi aspernatur recusandae debitis. Aperiam culpa quos officia est
          quia repudiandae?
        </p>
        <br />
        <button className='LearnMoreButton'>Learn More</button>
      </div>
      <div className='right'>
        <div className='left-img'>
          <img src={Rectangle1} alt="" className='img-1'/>
          <img src={Rectangle2} alt="" className=''  />
        </div>
        <div className='right-img'>
          <img src={Rectangle3} alt="" />

          <img src={Rectangle4} alt="" className='red-img' />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
