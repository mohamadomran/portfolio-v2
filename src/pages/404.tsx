import React from 'react';

import './styles.module.css';

const Custom404: React.FC = () => {
 return (
  <div className="FourZeroFour">
   <div className="FourZeroFourContainer">404</div>
   <div className="FourZeroFourText">Something went wrong</div>
   <a className="FourZeroFourReRoute" href="/">
    Go Back
   </a>
  </div>
 );
};

export default Custom404;
