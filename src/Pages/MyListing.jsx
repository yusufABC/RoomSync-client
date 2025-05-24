import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { NotebookPen } from 'lucide-react';
import { UserX } from 'lucide-react';
import Swal from 'sweetalert2';
const MyListing = () => {
    const [post,setPost]=useState([])
    const {user} =use(AuthContext)
    const navigate=useNavigate()
    useEffect(() => {
    if (!user?.email) return;

  fetch(`https://assignment-10-server-sigma.vercel.app/listings/users/${user.email}`)

      .then(res => res.json())
      .then(data => setPost(data));
  }, [user]);


  const handleDelete=(list)=>{

    const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://assignment-10-server-sigma.vercel.app/listings/${list._id}`,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
   if(data.deletedCount)  {
setPost(p => p.filter(item => item._id !== list._id));
       swalWithBootstrapButtons.fire({
         title: "Deleted!",
         text: "Your file has been deleted.",
         icon: "success"
       });
   }   
    })
  } else if (
 
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your Post is safe :)",
      icon: "error"
    });
  }
});
  }
    return (
      
  
        <div>
         <table className='min-w-full table-auto border border-gray-200'>
            <thead>
                <tr>
                    <th  className="p-4 border border-blue-200">Title</th>
                    <th  className="p-4 border border-blue-200">Location</th>
                     <th className="p-4 border border-blue-200">Rent</th>
                    <th  className="p-4 border border-blue-200 ">Avaiablity</th>
                    <th  className="p-4 border border-blue-200">See More</th>
                </tr>
            </thead>
         <tbody>
            {post.map((list, index) => (
              <tr key={index} className="text-center">
                <td className="p-5 text-center border  border-blue-200">{list.title}</td>
                <td className="p-5 text-center border  border-blue-200">{list.location}</td>
                <td className="p-5 text-center border  border-blue-200">{list.rentamount}</td>
                <td className="p-5 text-center border  border-blue-200">{list.availability}</td>
                <td className="p-5 text-center border flex justify-center gap-3  border-blue-200">
                  <button
                     onClick={() => navigate(`/updatepost/${list._id}`)}
                    className="text-blue-500 hover:text-gray-600 px-3 py-1 rounded"
                  >
                   <NotebookPen />
                  </button>
                  <button
                   onClick={()=>handleDelete(list)}
                    className="text-blue-500 hover:text-gray-600 px-3 py-1 rounded"
                  >
                 <UserX />
                  </button>
             
                </td>
              </tr>
            ))}
          </tbody>
         </table>
        </div>
    );
    
};

export default MyListing;