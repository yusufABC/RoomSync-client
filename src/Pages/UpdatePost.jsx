import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { CircleFadingPlus } from 'lucide-react';
const UpdatePost = () => {
 const loadedPost = useLoaderData();
const { _id, title, location, rentamount, roomtype, lifestyle, description, contact, availability } = loadedPost;

    const { user } = use(AuthContext)
    const handleUpdateRoomMate = e => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const updatePost = Object.fromEntries(formData.entries())
        console.log(updatePost)

        // savve updated data in the db 
        fetch(`http://localhost:3000/listings/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePost)
        }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: `Your Post Updated Successfully!`,
                        icon: "success",
                        draggable: true
                    });
                }
                else {
      Swal.fire({
        title: `No changes were made.`,
        icon: "info"
      });
    }
                
            })
            

    }
    return (
        <div className="my-20 mx-auto w-full max-w-7xl bg-gray-100 p-8 space-y-3 rounded-xl text-gray-800">
            <h1 className="text-5xl font-bold text-center " >Update Your Room Post</h1>
            <form onSubmit={handleUpdateRoomMate} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-600">Username</label>
                    <input type="text" name="username" value={user.displayName} readOnly id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-gray-600">Email</label>
                    <input type="email" value={user.email} name="email" id="email" placeholder="Email" readOnly className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Title</label>
                    <input type="text" name="title" defaultValue={title} placeholder=" (e.g., 'Looking for a roommate in NYC')" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Location</label>
                    <input type="text" name="location" defaultValue={location} placeholder="Location" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Rent Amount</label>
                    <input type="text" name="rentamount" defaultValue={rentamount} placeholder="Rent Amount" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Room Type </label>
                    <input type="text" name="roomtype" defaultValue={roomtype} placeholder="(Single, Shared, etc.)" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600" />
                </div>

                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Lifestyle Preferences</label>
                    <input
                        type="text"
                        name="lifestyle"
                        defaultValue={lifestyle}
                        placeholder="(Pets, Smoking, Night Owl, etc.)" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600"
                    />
                </div>

                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Description</label>

                    <textarea
                        defaultValue={description}
                        name="description"
                        placeholder="Describe the room, environment, and expectations" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600"
                        rows="4"
                    ></textarea>
                </div>
                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Contact Info</label>
                    <input
                        defaultValue={contact}
                        type="text"
                        name="contact"
                        placeholder="Phone or social media link"
                        className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600"
                    />
                </div>

                <div className="space-y-1 text-sm">
                    <label className="block text-gray-600">Availability</label>
                    <select
                        defaultValue={availability}
                        name="availability"
                        className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-orange-600"
                    >

                        <option value="available">Available</option>
                        <option value="not-available">Not Available</option>
                    </select>
                </div>




                <button type='submit' className="cursor-pointer block w-full p-3 text-center rounded-sm text-gray-50 bg-gray-500">Update</button>
            </form>

        </div>
    );
};

export default UpdatePost;