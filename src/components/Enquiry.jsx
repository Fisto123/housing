import React from "react";

const Enquiry = () => {
  return (
    <div className="w-full md:h-screen bg-blue-600">
      <div className="hero-image relative ">
        <div className="grid md:grid-cols-4 h-full">
          <div className=" mx-auto col-span-2  justify-center m-auto text-center text-white ">
            <h2 className="md:text-4xl sm:text-2xl  font-bold p-2">
              Design Custom Real Estate Inquiry Forms
            </h2>
            <p className="text-2xl">
              Design custom lead capture forms that integrate with the Houzez
              CRM
            </p>
          </div>
          <div className="mx-auto col-span-2 w-full mr-2">
            <div className="bg-white mx-auto w-3/3 mt-5 p-5 mr-2 ml-2 ">
              <div className="flex flex-col mx-auto h-auto">
                <label className="font-bold m-1">Inquiry Type</label>
                <select name="" id="" className="border border-gray-200 p-3">
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="">Purchase</option>
                  <option value="">Sell</option>
                  <option value="">Rent</option>
                  <option value="">Miss</option>
                  <option value="">Evaluation</option>
                </select>
              </div>
              <div className="flex flex-col mx-auto h-auto">
                <label className="font-bold m-1">Information</label>
                <select name="" id="" className="border border-gray-200 p-3">
                  <option value="" disabled>
                    I am a
                  </option>
                  <option value="">Real estate agent</option>
                  <option value="">Property owner</option>
                </select>
              </div>
              <div className="flex flex-col md:flex-row mx-auto h-auto">
                <input
                  type="text"
                  className="border border--gray-600 mt-2 p-2 w-full"
                  placeholder="first name"
                />
                <input
                  type="text"
                  className="border border-gray-600 mt-2 p-2 w-full"
                  placeholder="last name "
                />
              </div>
              <div>
                <input
                  className="border border--gray-600 mt-2 p-2 w-full"
                  type="text"
                  placeholder="email address"
                />
              </div>
              <div>
                <label className="font-bold m-1">Location</label>
                <div className="flex flex-col md:flex-row mx-auto h-auto gap-1">
                  <input
                    type="text"
                    className="border border--gray-600 mt-2 p-2 w-full"
                    placeholder="select city"
                  />
                  <input
                    type="text"
                    className="border border-gray-600 mt-2 p-2 w-full"
                    placeholder="zip code "
                  />
                </div>
              </div>
              <div className="flex flex-col mx-auto h-auto">
                <label className="font-bold m-1">Property</label>
                <select name="" id="" className="border border-gray-200 p-3">
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="">Commercial</option>
                  <option value="">Office</option>
                  <option value="">Shop</option>
                  <option value="">Residential</option>
                  <option value="">Apartmant</option>
                  <div className="flex flex-col mx-auto h-auto">
                    <label className="font-bold m-1">Inquiry Type</label>
                    <select
                      name=""
                      id=""
                      className="border border-gray-200 p-3"
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      <option value="">Purchase</option>
                      <option value="">Sell</option>
                      <option value="">Rent</option>
                      <option value="">Miss</option>
                      <option value="">Evaluation</option>
                      <option value="">Condo</option>
                      <option value="">Studio</option>
                      <option value="">Villa</option>
                    </select>
                  </div>
                </select>
              </div>
              <div className="flex flex-col md:flex-row mx-auto h-auto gap-1">
                <input
                  type="text"
                  className="border border--gray-600 mt-2 p-2 w-full"
                  placeholder="Max price"
                />
                <input
                  type="text"
                  className="border border-gray-600 mt-2 p-2 w-full"
                  placeholder="Minimum Size "
                />
              </div>
              <div className="flex flex-col md:flex-row mx-auto h-auto gap-1">
                <input
                  type="text"
                  className="border border--gray-600 mt-2 p-2 w-full"
                  placeholder="Number of Beds"
                />
                <input
                  type="text"
                  className="border border-gray-600 mt-2 p-2 w-full"
                  placeholder="Number of Baths "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
