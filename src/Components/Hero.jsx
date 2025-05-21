import React from 'react';

const Hero = () => {
    return (
      
          <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={'sidehero.avif'}
      className="w-xl rounded-lg"
    />
    <div>
      <h1 className="text-5xl font-bold">Searching For Room Mate ?</h1>
      <p className="py-6  text-xl">
       Meet Room Sync — the smarter way to find your perfect roommate. Whether you're moving for school, work, or a fresh start, we help you match, connect, and move in with confidence.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

      
    );
};

export default Hero;