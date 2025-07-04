import React from "react";
import img from "../assets/images/bookingIcon.png";

const Works = () => {
  return (
    <section className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">How it works</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-6">
        {/* 1st card */}
        <div className="card bg-base-100 w-full lg:w-72 shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img
              src={img}
              alt="Booking Pick & Drop"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">Booking Pick & Drop</h4>
            <p className="text-gray-600">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>

        {/* 2nd card */}
        <div className="card bg-base-100 w-full lg:w-72 shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img src={img} alt="Cash On Delivery" className="w-16 h-16 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Cash On Delivery</h4>
            <p className="text-gray-600">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>

        {/* 3rd card */}
        <div className="card bg-base-100 w-full lg:w-72 shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img src={img} alt="Delivery Hub" className="w-16 h-16 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Delivery Hub</h4>
            <p className="text-gray-600">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>

        {/* 4th card */}
        <div className="card bg-base-100 w-full lg:w-72 shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img
              src={img}
              alt="Booking SME & Corporate"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">
              Booking SME & Corporate
            </h4>
            <p className="text-gray-600">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
