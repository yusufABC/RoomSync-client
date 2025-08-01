import React from 'react';

const Stats = () => {
    return (
        <div className='my-15'>
            <div className=" px-4">
  <div id='verify' className="text-center mb-10">
<div className='text-5xl font-bold mb-6 text-gray-100  text-center'>Verified Profiles & Safety</div>
    <h2 className="text-3xl font-bold mb-6 text-gray-500  text-center">Verified Profiles & Safety</h2>

    <p className="text-gray-600 mt-2 max-w-xl mx-auto">
      Room Sync puts your safety first. We verify user identities and give you tools to report, block, and connect with confidence.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-black">
    <div className="card bg-base-100 shadow-md border">
      <div className="card-body">
        <h2 className="card-title">ID-Verified Users</h2>
        <p>Every user must verify their identity before accessing full features.</p>
      </div>
    </div>

    <div className="card bg-blue-200 shadow-md border">
      <div className="card-body">
        <h2 className="card-title text-blue-500">Report & Block</h2>
        <p>Block or report anyone instantly — your safety is always in your hands.</p>
      </div>
    </div>

    <div className="card bg-orange-200 shadow-md border">
      <div className="card-body">
        <h2 className="card-title text-orange-500">Profile Review</h2>
        <p>All profiles are reviewed for authenticity and completeness before going live.</p>
      </div>
    </div>

    <div className="card bg-base-100 shadow-md border">
      <div className="card-body">
        <h2 className="card-title">Secure Messaging</h2>
        <p>Chat safely within the app without sharing personal contact details until you're ready.</p>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Stats;