import React, { useEffect, useState } from 'react';
import DetailsCard from './DetailsCard';

const Details = () => {
    const [listings, setListings] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-sigma.vercel.app/listings')
            .then(res => res.json())
            .then(data => {
                setListings(data)
            })

    }, [])
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            <div className='text-3xl font-bold mb-6 text-orange-500'>All Post Available Here</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    listings.map((list,index)=><DetailsCard key={index} list={list}></DetailsCard>)
                }
            </div>
        </div>
    );
};

export default Details;