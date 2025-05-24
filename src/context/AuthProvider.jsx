import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from 'firebase/auth';
import { auth } from '../firebase.init';
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)
   const [post,setPost]=useState(0)
   const [totalLikesCount,setTotalLikesCount]=useState(0)
  const [theme,setTheme]=useState('dark')

  const toggleTheme=()=>{
    setTheme((curr)=>(curr==='light'?'dark':'light'))
  }



    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
        const handleSignOut=()=>{
        signOut(auth).then(() => {
          console.log("signout successfull")
          setUser(null)
        })
        .catch((error) => {
          console.log(error.message)
        });
    }

    

     const userInfo={
     createUser,
     user,
     setUser,
     loader,
     signInUser,
     handleSignOut,
     post,
     setPost,
     totalLikesCount,
     setTotalLikesCount,
     theme,
     toggleTheme
    }


      useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])


useEffect(() => {
  fetch('http://localhost:3000/listings')
    .then(res => res.json())
    .then(data => {
      const total = data.reduce((acc, curr) => acc + (curr.likeCount || 0), 0);
      setTotalLikesCount(total);
    })

}, []);

return (
  <AuthContext.Provider value={userInfo}>
    {children}
  </AuthContext.Provider>
);
};

export default AuthProvider;