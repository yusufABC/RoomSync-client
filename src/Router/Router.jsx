import React from 'react';
import {
  createBrowserRouter,
  
} from "react-router";
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import SignIn from '../Pages/SignIn';
import MainLayout from '../Layout/MainLayout';

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
        }
    ]
  },
]);


