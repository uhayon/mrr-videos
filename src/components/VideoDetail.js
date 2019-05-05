import React from 'react';

const VideoDetail = ({ video }) => {
  const { title, description } = video.snippet;
  return (
    <div>
      <div className='ui embed'>
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title={title} frameBorder='0'></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{title}</h4>
        {description}
      </div>
    </div>
  );
};

export default VideoDetail;