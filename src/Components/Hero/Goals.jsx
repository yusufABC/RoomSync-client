import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Slide, Fade } from 'react-awesome-reveal';
import Lottie from 'lottie-react';

const MatchVibeSection = () => {
  return (
    <section id='goals' className='my-15'>
    
            
       
           <div className='text-5xl font-bold mb-6 text-gray-100  text-center'>Our App's Key Features</div>
           

            <div className=' text-3xl font-bold mb-6 text-gray-500  text-center'>Our App's Key Features</div>

      <div className="my-20 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

     {/* use type writter */}
      <div className="w-full lg:w-1/2">
      <div>
        
      </div>
        <Fade direction="down">
          <h2 className="text-4xl font-bold mb-4">
              <span className="text-purple-600">More Than a Match: </span>
             <span className="text-gray-800 min-h-[48px] h-[48px] flex items-center overflow-hidden">
        <Typewriter
          words={['Feel at Home', 'Connect Naturally', 'Build Bonds']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
          </h2>
           <p className="text-gray-600 mb-6">
      RoomSync isn’t just about finding a place — it’s about finding people who make your space feel right. Our vibe-first approach ensures you feel comfortable and connected from day one.
    </p>
        </Fade>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          <Slide direction="left" cascade damping={0.2}>
            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <h2 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-plus-icon lucide-house-plus"><path d="M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"/><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M15 6h6"/><path d="M18 3v6"/></svg> Feel at Home</h2>
                <p>Answer a few fun questions and get matched with someone who lives like you do.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <h2 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b0b47e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>Real Connections</h2>
                <p>Find someone who vibes with your hobbies, music taste, or even cooking style.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <h2 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a0b7ee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-pen-icon lucide-clipboard-pen"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"/><path d="M4 13.5V6a2 2 0 0 1 2-2h2"/><path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>Easy Onboarding</h2>
                <p>Get to know their style before you even message them — it's like a vibe check!</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <h2 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d8dadf" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hammer-icon lucide-hammer"><path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/></svg> Supportive Tools</h2>
                <p>See how well you match in key roommate areas like cleanliness, quiet hours, and guests.</p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
          <div className="w-full lg:w-1/2 ">
        <Fade direction="right">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-orange-500">Roommate Goals: </span>
            <span className="text-gray-800 min-h-[48px] h-[48px] flex items-center overflow-hidden">
              <Typewriter
                words={['Match Your Vibe', 'Live in Harmony', 'Find Your People']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="text-gray-600 mb-7">
            We go beyond just matching spaces — we help you connect with roommates who get you.
          </p>
        </Fade>

      {/* card section text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-black">
          <Slide direction="right" cascade damping={0.2}>
            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <h2 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ad7676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>Lifestyle Matching</h2>
                <p>Answer a few fun questions and get matched with someone who lives like you do.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <h2 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#72668f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg> Shared Interests</h2>
                <p>Find someone who vibes with your hobbies, music taste, or even cooking style.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <h2 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fe542a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-check-inside-icon lucide-map-pin-check-inside"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><path d="m9 10 2 2 4-4"/></svg>Personality Insights</h2>
                <p>Get to know their style before you even message them — it's like a vibe check!</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border">
              <div className="card-body">
                <h2 className="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f3b3b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volleyball-icon lucide-volleyball"><path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4"/><path d="M12 12a12.6 12.6 0 0 1-8.7 5"/><path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5"/><path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"/><path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"/><circle cx="12" cy="12" r="10"/></svg>Compatibility Score</h2>
                <p>See how well you match in key roommate areas like cleanliness, quiet hours, and guests.</p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
    </section>
  );
};

export default MatchVibeSection;
