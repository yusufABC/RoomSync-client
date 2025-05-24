import React from 'react';
import { useNavigate } from 'react-router';

const FeaturedCard = ({list}) => {
    const navigate=useNavigate()
    return (
        <div>
                  <div className='bg-white shadow-lg rounded-lg p-6 border border-slate-200'>
               <h3 className="text-2xl text-center border-b border-b-amber-500 my-4 font-semibold text-orange-500">👀{list.title}</h3>
               <div className='flex flex-col gap-5 '>

                 <p className=" text-slate-600">🚀Location: {list.location}</p>
                <p className=" text-slate-600">🚀Rent: ${list.rentamount}</p>
            <p className=" text-slate-600">🚀Room Type: {list.roomtype}</p>
         

            <button  className='btn text-red-500' onClick={()=>navigate(`/details`)} >See More</button>
               </div >
        



        </div>
        </div>
    );
};

export default FeaturedCard;