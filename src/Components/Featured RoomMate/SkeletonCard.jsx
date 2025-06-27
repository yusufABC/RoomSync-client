// SkeletonCard.jsx
import React from 'react';

const SkeletonCard = () => {
    return (
        <div className='h-[500px] w-[300px] bg-white shadow-lg rounded-lg p-6 border border-slate-200 animate-pulse'>
            {/* Title */}
            <div className="h-6 bg-slate-200 rounded w-3/4 mx-auto mb-10"></div>

            {/* Content lines */}
            <div className='flex flex-col gap-5'>
                <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                <div className="h-4 bg-slate-200 rounded w-2/3"></div>

                {/* Button */}
                <div className="h-10 bg-slate-200 rounded w-1/3 mt-4"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
