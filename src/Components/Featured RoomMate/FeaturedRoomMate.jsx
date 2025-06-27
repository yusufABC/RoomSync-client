import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';
import { AuthContext } from '../../context/AuthContext';
import SkeletonCard from './SkeletonCard';
const FeaturedRoomMate = () => {
    const [featured, setFeatured] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
  setLoading(true);
  fetch('https://assignment-10-server-sigma.vercel.app/listing-available')
    .then((res) => res.json())
    .then((data) => {
      setFeatured(data);
      setLoading(false); 
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false); 
    },1000);
}, []);
    return (
        <section className='mb-10'>

            <div className='sticky  top-0'>

            <img src="curveArrow.png" className='w-[100px] relative right-20' />



            <img
                src="curveArrow.png"
                className='w-[100px] absolute right-0 rotate-180'
                alt="curve arrow"
            />
            </div>



            <div id='feature-roommate' className='text-5xl font-bold mb-6 text-gray-100  text-center'>Room You Can Check</div>

            <div className=' text-3xl font-bold mb-6 text-gray-500  text-center'>Room You Can Check</div>

            <div className="max-w-9xl rounded-2xl mx-auto px-4 py-10 bg-white">

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {
                        loading
                            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
                            : featured.map((list, index) => (
                                <FeaturedCard key={index} list={list} />
                            ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedRoomMate;
