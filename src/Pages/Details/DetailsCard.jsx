import React, { useState } from 'react';
import { ThumbsUp } from 'lucide-react';
const DetailsCard = ({list}) => {
  console.log(list)
     const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
        const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount -1);
    }
     else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };


    return (
        <div className='bg-white shadow-lg rounded-lg p-6 border border-slate-200'>
               <h3 className="text-2xl text-center border-b border-b-amber-500 my-4 font-semibold text-orange-500">👀{list.title}</h3>
               <div className='flex flex-col gap-5 '>

                 <p className=" text-slate-600">🚀Location: {list.location}</p>
                <p className=" text-slate-600">🚀Rent: ${list.rentamount}</p>
            <p className=" text-slate-600">🚀Room Type: {list.roomtype}</p>
            <p className=" text-slate-600">🚀Lifestyle: {list.lifestyle}</p>
            <p className=" text-slate-600">🚀Availability: {list.availability}</p>
        <p className=" text-slate-600">🚀Posted by: {list.username} ({list.email})</p>
        <p className=" text-slate-600 mt-2">🚀{list.description}</p>
        <p className=" text-blue-600 mt-1">Contact: {list.contact}</p>
               </div>
        
        <button   onClick={handleLike}  className={`m-4  rounded `}>

             {liked ?  <ThumbsUp color='red' /> :  <ThumbsUp color='gray' />} ({likesCount})
        </button>
        </div>
    );
};

export default DetailsCard;