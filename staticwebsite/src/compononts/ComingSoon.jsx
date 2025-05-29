import React from 'react';
import celttech_coming_soon from '../assets/celttech_coming_soon_1.jpg'

const ComingSoon = () => {
  return (
    <div className="h-screen bg-black">
      <img src={celttech_coming_soon} alt="Coming Soon" className="w-screen" />
    </div>
  );
}

export default ComingSoon;