import React from 'react';

const Hero = () => {
    return (
      
//           <div className="hero  min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <img
//       src={'sidehero.avif'}
//       className="w-xl rounded-lg"
//     />
//     <div>
//       <h1 className="text-5xl font-bold">Searching For Room Mate ?</h1>
//       <p className="py-6  text-xl">
//        Meet Room Sync — the smarter way to find your perfect roommate. Whether you're moving for school, work, or a fresh start, we help you match, connect, and move in with confidence.
//       </p>
//       <button className="btn btn-primary">Get Started</button>
//     </div>
//   </div>

  
// </div>
<>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
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
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
          <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={'heroslide2.png'}
      className="w-xl rounded-lg"
    />
    <div>
      <h1 className="text-5xl font-bold">Search Rooms or List Your Own</h1>
      <p className="py-6  text-xl">
      Browse available rooms or post your space in just a few clicks. Whether you’re a seeker or a sharer, Room Sync makes it easy.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>

  
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
           <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={'heroslide3.jpeg'}
      className="w-xl rounded-lg"
    />
    <div>
      <h1 className="text-5xl font-bold">Join a Growing Community, Backed by Support</h1>
      <p className="py-6  text-xl">
    Be part of a trusted network of thousands actively looking for roommates. Got questions? Our support team is here for you — anytime, anywhere.


      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>

  
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
 
</div>
</>
      
    );
};

export default Hero;