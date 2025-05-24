import React, { use, useEffect, useState } from 'react';
import { ThumbsUp } from 'lucide-react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
const DetailsCard = ({list}) => {
  const [liked,setLiked]=useState(false)
  const {user,setPost}=use(AuthContext)
  const [likesCount,setLikesCount]=useState(0)
//  const [totalLikes, setTotalLikes] = useState(0)

  console.log(list)
  console.log(user)
    

  const { id } = useParams()



    useEffect(() => {
    fetch(`http://localhost:3000/listings/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLikesCount(data.likeCount || 0);
      });
  }, [id,setPost]);

        const handleLike = () => {
  if(list.email===user.email){
    Swal.fire({
  icon: "error",
  title: "You Cannot Like Your Own POst",
  texta: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
}); 
if(liked) return
return
  }

  fetch(`http://localhost:3000/listings/${list._id}/like`,{
    method:"PATCH"
  })
  .then(res=>res.json())
  .then(data=>{
    if (data.modifiedCount){
    setLikesCount(p=>p+1)
  // setLikesCount(p => p + 1); 
  setLiked(true);


    }
  })


  }


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
        
               </div >
        

        <div className='flex justify-between'>

        <button   onClick={handleLike}  className=''>

             {liked ?  <ThumbsUp color='red' /> :  <ThumbsUp color='gray' />} ({likesCount})
        </button>
        <button className='bg-orange-400 text-white btn'> Likes: {likesCount}</button>
        </div>
        {
          liked ? <p className=" text-blue-600 mt-1">Contact: {list.contact}</p>:""
        }
        </div>
    );
};

export default DetailsCard;