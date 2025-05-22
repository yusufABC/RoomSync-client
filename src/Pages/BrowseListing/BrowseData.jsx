import React from 'react';

const BrowseData = ({data}) => {
    return (
        <div>
            <tr>

                <td className="px-4 py-2 border">{data.title}</td>
                <td className="px-4 py-2 border">{data.location}</td>
                <td className="px-4 py-2 border">{data.availability}</td>
            </tr>
        </div>
    );
};

export default BrowseData;