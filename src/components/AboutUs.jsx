import React from "react";
import restaurantAbout from "/src/images/download.jpg";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";

export const AboutUs = () => {
  return (
    <div className="grid grid-flow-col place-content-center p-6 space-x-14 pt-8 max-sm:grid-flow-row">
      <div className="max-w-2xl text-center">
        <h1 className="font-extrabold text-2xl">Who are we?</h1>
        <p className="text-xl pt-4">
          Launched in 2010, Our technology platform connects customers,
          restaurant partners and delivery partners, serving their multiple
          needs. Customers use our platform to search and discover restaurants,
          read and write customer generated reviews and view and upload photos,
          order food delivery, book a table and make payments while dining-out
          at restaurants. On the other hand, we provide restaurant partners with
          industry-specific marketing tools which enable them to engage and
          acquire customers to grow their business while also providing a
          reliable and efficient last mile delivery service. We also operate a
          one-stop procurement solution, Hyperpure, which supplies high quality
          ingredients and kitchen products to restaurant partners. We also
          provide our delivery partners with transparent and flexible earning
          opportunities.
        </p>
      </div>
      <figure className="pt-[5rem]">
        <img src={restaurantAbout} alt="" height={250} width={250} />
      </figure>
      <Profile name={"Ankit"} />
      <ProfileFunction name={"Pandey"} />
    </div>
  );
};

export default AboutUs;
