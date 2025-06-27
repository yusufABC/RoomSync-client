import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import SignIn from '../Pages/SignIn';
import MainLayout from '../Layout/MainLayout';
import PrivateRoute from '../PrivateRoute';
import BrowseListing from '../Pages/BrowseListing/BrowseListing';
import MyListing from '../Pages/MyListing';
import AddToFindRoomMate from '../Pages/AddToFindRoomMate';
import Details from '../Pages/Details/Details';
import NotFound from '../Pages/NotFound';
import UpdatePost from '../Pages/UpdatePost';
import DashboardLayout from '../Layout/DashboardLayout';
import Statistics from '../Components/Statistics/Statistics';

export const router = createBrowserRouter([
  {
    errorElement:<NotFound></NotFound>,
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
      path: 'details',
      element: <PrivateRoute><Details /></PrivateRoute>
    },
        


    ]
  },


{
  path: '/dashboard',
  element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
  children: [
    {
      index: true,
      element: <PrivateRoute><Statistics /></PrivateRoute>
    },
    {
      path: 'mylisting',
      element: <PrivateRoute><MyListing /></PrivateRoute>
    },
    {
      path: 'addtofindroommate',
      element: <PrivateRoute><AddToFindRoomMate /></PrivateRoute>
    },
    {
      path: 'details',
      element: <PrivateRoute><Details /></PrivateRoute>
    },
    {
      path: 'updatepost/:id',
      loader: ({ params }) => fetch(`https://assignment-10-server-sigma.vercel.app/listings/${params.id}`),
      element: <PrivateRoute><UpdatePost /></PrivateRoute>
    }
  ]
}
]);


