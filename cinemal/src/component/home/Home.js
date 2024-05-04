import React, { useState } from 'react';
import Header from '../header/Header';
import './Home.css';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  return (
    <section style={{ background: 'linear-gradient(to right,  rgb(99, 32, 100), rgb(72, 31, 159))' }}>
      <Header />
      <section>
        <div className="title">
          <h1 style={{ textAlign: 'center' }}>PHIM ĐANG CHIẾU</h1>
        </div>
        <div className='phimdangchieu'>
          <div className='phimle'>
            <div>
              <img src="./phim1.png" alt="GODZILLA x KONG" />
              <div>GODZILLA x KONG</div>
              <div style={{ display: 'flex', margin: '0 auto' }}>
                <button className='trailer' onClick={openVideo}>
                  <span>Xem trailer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showVideo && (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Pxge99xjWDQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default Home;
