import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import BrowseData from './BrowseData';

const BrowseListing = () => {

      const [listings, setListings] = useState([]);
        const navigate = useNavigate();
 useEffect(() => {
        fetch('http://localhost:3000/listings')
            .then(res => res.json())
            .then(data => {
                setListings(data)
            })

    }, [])

    return (
        <div>
         <table className='min-w-full table-auto border border-gray-200'>
            <thead>
                <tr>
                    <th  className="px-4 py-2 border border-blue-200">Title</th>
                    <th  className="px-4 py-2 border border-blue-200">Location</th>
                     <th className="px-4 py-2 border border-blue-200">Rent</th>
                    <th  className="px-4 py-2 border border-blue-200 ">Avaiablity</th>
                    <th  className="px-4 py-2 border border-blue-200">See More</th>
                </tr>
            </thead>
         <tbody>
            {listings.map((list, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border  border-blue-200">{list.rest.title}</td>
                <td className="px-4 py-2 border  border-blue-200">{list.rest.location}</td>
                <td className="px-4 py-2 border  border-blue-200">{list.rentamount}</td>
                <td className="px-4 py-2 border  border-blue-200">{list.rest.availability}</td>
                <td className="px-4 py-2 border  border-blue-200">
                  <button
                    onClick={() => navigate(`/details`)}
                    className="bg-blue-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                  >
                    See More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
         </table>
        </div>
    );
};

export default BrowseListing;