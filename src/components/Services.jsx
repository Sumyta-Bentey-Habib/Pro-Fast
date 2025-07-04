import React from "react";
import service from "../assets/images/service.png";

const Services = () => {
  return (
    <section className="py-10 px-4 bg-[#03373D] rounded-4xl m-2">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Our services</h2>
      <p className="text-center max-w-2xl mx-auto mb-10 text-white">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        <br />
        From personal packages to business shipments — we deliver on time, every time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* Card 1 */}
        <div className="card bg-base-100 w-full max-w-xs shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img
              src={service}
              alt="Service 1"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">
              Express & Standard Delivery
            </h4>
            <p className="text-gray-600">
              We deliver parcels within 24–72 hours in major cities. Express service available for urgent needs.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-[#CAEB66] w-full max-w-xs shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img
              src={service}
              alt="Service 2"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">
              Nationwide Delivery
            </h4>
            <p className="text-gray-600">
              SWe deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-full max-w-xs shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img
              src={service}
              alt="Service 3"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">
              Fulfillment Solution
            </h4>
            <p className="text-gray-600">
              We also offer customized service with inventory management support, online order processing, packaging, and after sales support.
            </p>
          </div>
        </div>

      {/* 4th card */}

       <div className="card bg-base-100 w-full max-w-xs shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img
              src={service}
              alt="Service 4"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">
              Cash on Home Delivery
            </h4>
            <p className="text-gray-600">
              100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
            </p>
          </div>
        </div>
        {/* 5th card */}
         <div className="card bg-base-100 w-full max-w-xs shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img
              src={service}
              alt="Service 5"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">
              Corporate Service / Contract In Logistics
            </h4>
            <p className="text-gray-600">
              Customized corporate services which includes warehouse and inventory management support.
            </p>
          </div>
        </div>
        {/* 6th card */}
         <div className="card bg-base-100 w-full max-w-xs shadow-lg rounded-lg">
          <div className="card-body items-center text-center">
            <img
        
              src={service}
              alt="Service 6"
              className="w-16 h-16 mb-4"
            />
            <h4 className="text-lg font-semibold mb-2">
              Parcel Return
            </h4>
            <p className="text-gray-600">
             Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
