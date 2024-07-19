import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import HotelBooking from './pages/booking/HotelBooking.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NotFound  from './pages/NotFound.jsx';
import TimeLine from './pages/TimeLine.jsx';
import HotelPlaza from './pages/HotelPlaza.jsx';
import AimAndFunctions from './pages/AimAndFunctions.jsx';
import Management from './pages/Management.jsx';
import SendResume from './pages/SendResume.jsx';
import AddressAndPhone from './pages/AddressAndPhone.jsx';
import FAQ from './pages/FAQ.jsx';
import MarketingSection from './pages/MarketingSection.jsx';
import JobPage from './pages/request-form/JobPage.jsx';
import Staff from './pages/staff/Staff.jsx';
import PhotoGallery from './pages/photo/PhotoGallery.jsx';
import MainProduct from './pages/product-now/MainProduct.jsx';
import OpenData from './pages/opendata-section/OpenData.jsx';
import Login from './pages/login/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/aboutPage",
    element: <AboutPage />
  },
  {
    path:"/TimeLine",
    element: <TimeLine />
  },
  {
    path:"/HotelBooking",
    element: <HotelBooking />
  },
  {
    path:"/AimAndFunctions",
    element: <AimAndFunctions />
  },
  {
    path:"/Management",
    element: <Management />
  },
  {
    path:"/SendResume",
    element: <SendResume />
  },
  {
    path:"/AddressAndPhone",
    element: <AddressAndPhone />
  },
  {
    path:"/FAQ",
    element: <FAQ />
  },
  {
    path:"/MarketingSection",
    element: <MarketingSection />
  },
  {
    path:"/JobPage",
    element: <JobPage />
  },
  {
    path:"/Staff",
    element: <Staff />
  },
  {
    path:"/PhotoGallery",
    element: <PhotoGallery />
  },
  {
    path:"/MainProduct",
    element: <MainProduct />
  },
  {
    path:"/OpenData",
    element: <OpenData />
  },
  {
    path:"/Login",
    element: <Login />
  },
  {
    path:'*',
    element: <NotFound />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
