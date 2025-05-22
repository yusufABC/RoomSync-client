import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { NavLink,  } from 'react-router';

const AddToFindRoomMate = () => {
    // const navigate=useNavigate
    const { user } = use(AuthContext)
    const handleAddRoomMate = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { rentamount,roomtype, ...rest } = Object.fromEntries(formData.entries())

            const userRoomData={
                rentamount,
                roomtype,
                rest
            }

        // send to db
                      fetch('http://localhost:3000/listings', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(userRoomData)
        
                                })
                                    .then(res => res.json())
                                    .then(data => {
                                        console.log(data)
                                        if (data.insertedId) {
                                            Swal.fire({
                                                position: "top-end",
                                                icon: "success",
                                                title: "Your Post Is Created",
                                                showConfirmButton: false,
                                                timer: 3500
                                            });
                                                // navigate('')
                                        }
                                    })

    }
    return (
        <div className="my-20 mx-auto w-full max-w-7xl bg-gray-100 p-8 space-y-3 rounded-xl text-gray-800">
            <h1 className="text-5xl font-bold text-center">Create Your Room Post</h1>
            <form onSubmit={handleAddRoomMate} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-600">Username</label>
                    <input type="text" name="username"  id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Title</label>
                    <input type="text" name="title" placeholder=" (e.g., 'Looking for a roommate in NYC')" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Location</label>
                    <input type="text" name="location" placeholder="Location" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Rent Amount</label>
                    <input type="text" name="rentamount" placeholder="Rent Amount" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Room Type </label>
                    <input type="text" name="roomtype" placeholder="(Single, Shared, etc.)" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
           
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Lifestyle Preferences</label>
                    <input
                        type="text"
                        name="lifestyle"
                        placeholder="(Pets, Smoking, Night Owl, etc.)"
                        className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600"
                    />
                </div>

                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Description</label>
                    <textarea
                        name="description"
                        placeholder="Describe the room, environment, and expectations"
                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600"
                        rows="4"
                    ></textarea>
                </div>
        <div className="space-y-1 text-sm">
  <label className="block text-gray-600">Contact Info</label>
  <input
    type="text"
    name="contact"
    placeholder="Phone or social media link"
    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600"
  />
</div>

<div className="space-y-1 text-sm">
  <label className="block text-gray-600">Availability</label>
  <select
    name="availability"
    className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600"
  >
    <option value="available">Available</option>
    <option value="not-available">Not Available</option>
  </select>
</div>




                <button type='submit' className="cursor-pointer block w-full p-3 text-center rounded-sm text-gray-50 bg-gray-300">Submit</button>
            </form>

        </div>
    );
};

export default AddToFindRoomMate;