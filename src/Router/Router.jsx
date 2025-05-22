import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import SignIn from '../Pages/SignIn';
import MainLayout from '../Layout/MainLayout';
import PrivateRoute from '../PrivateRoute';
import BrowseListing from '../Pages/BrowseListing';
import MyListing from '../Pages/MyListing';
import AddToFindRoomMate from '../Pages/AddToFindRoomMate';
import Details from '../Pages/Details/Details';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'signup',
            Component:Signup
        },
        {
          path:'signIn',
          Component:SignIn
        },
        {
          path:'mylisting', 

          element:<PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>

        },
        
        {
          path:'browselisting', 

          element:<BrowseListing></BrowseListing>
         

        },
        
        {
          path:'addtofindroommate', 

          element:<PrivateRoute>
            <AddToFindRoomMate></AddToFindRoomMate>
          </PrivateRoute>

        },
        {
          path:'details', 

          element:<PrivateRoute>
            <Details></Details>
          </PrivateRoute>

        },

    ]
  },
]);


