import React from 'react';
import './Preloader.css'

const Preloader = ({visible}) => {
  if(visible===false) return <div></div>;
  else{
    return (
      <div className="preloader">
    <div className="preloader__ring">
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">g</div>
        <div className="preloader__sector">ö</div>
        <div className="preloader__sector">z</div>
        <div className="preloader__sector">l</div>
        <div className="preloader__sector">ə</div>
        <div className="preloader__sector">y</div>
        <div className="preloader__sector">i</div>
        <div className="preloader__sector">n</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
        <div className="preloader__sector">.</div>
    </div>
  </div>
  );
}
};

export default Preloader;