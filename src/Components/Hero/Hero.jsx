import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS

const Hero = () => {
    return (
      
       <section className="h-[80vh] bg-gray-50 text-black my-10 rounded-4xl">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                stopOnHover={false}
            >
                {/* Slide 1 */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center h-[70vh] px-4 md:px-20 ">
                    <img src="sidehero.avif" alt="Hero Slide 1" className="w-full max-w-md rounded-lg shadow-lg ]" />
                    <div className="text-center lg:text-left mt-6 lg:mt-0 lg:mr-12">
                        <h1 className="text-2xl md:text-5xl font-bold">
                            Searching For Room Mate?
                        </h1>
                        <p className="py-6 text-lg md:text-xl">
                            Meet Room Sync — the smarter way to find your perfect roommate. Whether you're moving for school, work, or a fresh start, we help you match, connect, and move in with confidence.
                        </p>
                        <button className="btn bg-orange-500 text-white px-6 py-2 rounded">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center h-[70vh] px-4 md:px-20 ">
                    <img src="heroslide2.png" alt="Hero Slide 2" className="w-full max-w-md rounded-lg shadow-lg" />
                    <div className="text-center lg:text-left mt-6 lg:mt-0 lg:mr-12">
                        <h1 className="text-2xl md:text-5xl font-bold">
                            Search Rooms or List Your Own
                        </h1>
                        <p className="py-6 text-lg md:text-xl">
                            Browse available rooms or post your space in just a few clicks. Whether you’re a seeker or a sharer, Room Sync makes it easy.
                        </p>
                        <button className="btn btn-primary px-6 py-2 rounded">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center h-[70vh] px-4 md:px-20 ">
                    <img src="heroslide3.jpeg" alt="Hero Slide 3" className="w-full max-w-md rounded-lg shadow-lg" />
                    <div className="text-center lg:text-left mt-6 lg:mt-0 lg:mr-12">
                        <h1 className="text-2xl md:text-5xl font-bold">
                            Join a Growing Community, Backed by Support
                        </h1>
                        <p className="py-6 text-lg md:text-xl">
                            Be part of a trusted network of thousands actively looking for roommates. Got questions? Our support team is here for you — anytime, anywhere.
                        </p>
                        <button className="btn bg-orange-400 text-black px-6 py-2 rounded">
                            Get Started
                        </button>
                    </div>
                </div>
            </Carousel>
        </section>
    );
};

export default Hero;
