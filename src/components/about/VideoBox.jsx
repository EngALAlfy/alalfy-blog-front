import React from 'react';

const VideoBox = ({ 
  thumbnailSrc, 
  videoUrl = 'https://www.youtube.com/watch?v=Y7f98aduVJ8', 
  altText = 'Video Thumbnail',
  delay = 200 
}) => {
  return (
    <div className="row mt-5">
      <div className="col-lg-12" data-aos="zoom-in" data-aos-delay={delay}>
        <div className="video-box">
          <img 
            src={thumbnailSrc} 
            className="img-fluid"
            alt={altText}
          />
          <a 
            href={videoUrl}
            className="glightbox pulsating-play-btn"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;
