import React, { Suspense } from 'react';
import {
  createBrowserRouter,
} from "react-router";

import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Details from '../components/Details/Details';
import Appointment from '../pages/Appointment/Appointment';
import Blogs from '../pages/Blogs/Blogs';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const doctorLoader = () => {
  return fetch('doctorsData.json')
    .then(response => {
      if (!response.ok) {
        return [];
      }
      return response.json();
    })
    .then(data => data, () => {
      console.error("Error loading doctor data");
      return [];
    });
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('doctorsData.json'),
        element: <Home />,
      },
      {
        path: '/viewDetails/:id',
        loader: doctorLoader,
        element: <Details />,
      },
      {
        path: '/my-bookings',
        loader: () => fetch('doctorsData.json'),
        element: <Appointment />,
      },
      {
        path: '/blogs',
        loader: () => fetch('blogs.json'),
        element: <Blogs />,
      },
    ],
  },
]);
