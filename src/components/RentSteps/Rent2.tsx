
"use client";

import { useState } from "react";
export default function Uploadlisting() {
  const [propertyTitle, setPropertyTitle] = useState("");
  const [expectedPrice, setExpectedPrice] = useState("");
  const [description, setDescription] = useState("");
  const [shortPrice, setShortPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ propertyTitle, expectedPrice, description });
  };

  const formatIndianPrice = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    if (numericValue === "") return "";
    return Number(numericValue).toLocaleString("en-IN");
  };

  const getShortIndianCurrencyFormat = (amount: string): string => {
    const number = parseInt(amount.replace(/,/g, "") || "0");

    if (number >= 10000000) {
      return `₹ ${(number / 10000000).toFixed(1)} Cr`;
    } else if (number >= 100000) {
      return `₹ ${(number / 100000).toFixed(1)} Lacs`;
    } else if (number >= 1000) {
      return `₹ ${(number / 1000).toFixed(1)} K`;
    } else {
      return `₹ ${number}`;
    }
  };

  const handleExpectedPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formatted = formatIndianPrice(input);
    setExpectedPrice(formatted);
    setShortPrice(getShortIndianCurrencyFormat(formatted));
  };






  // Stepper configuration
  const steps = [
    { label: "Property Details" },
    { label: "Price Details" },
    { label: "Availability" },
    { label: "Others" },
    { label: "Upload Images" },
  ];
  const activeIndex = 1; // "Price Details" is the current step
  const [checked, setChecked] = useState(false)

  return (

    <div
      className="relative text-gray-900  min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />



      {/* Header */}

      {/* Main Section */}
      <main className=" pb-12 flex justify-center relative z-10" >

        <div className="w-full px-4" style={{ maxWidth: "1090px" }}>




          {/* Stepper */}


          {/* Expected Rent */}
          <div className="mt-8 relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
            <label className="block text-[16px] font-semibold text-[#0A0909] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
              Expected Rent<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#0A090926] rounded-full px-3 py-2 bg-white text-[#2450A0]">
              <span className="text-blue-600 font-medium">₹</span>
              <input
                type="text"
                value={expectedPrice}
                onChange={handleExpectedPriceChange}
                placeholder="0"
                className="flex-1 ml-2 focus:outline-none"
              />
              <span className="text-[#0A090966] text-[15px]">/Month</span>
            </div>
            {shortPrice && (
              <p className=" absolute right-3 text-[#2450A0] text-sm mt-1">{shortPrice}</p>
            )}
          </div>

          {/* Expected Deposit */}
          <div className="mt-5 relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
            <label className="block text-[16px] font-semibold text-[#0A0909] mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
              Expected Deposit<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-[#0A090926] rounded-full px-3 py-2 bg-white text-[#2450A0]">
              <span className="text-blue-600 font-medium">₹</span>
              <input
                type="text"
                placeholder="0"
                className="flex-1 ml-2 focus:outline-none"
              />
              <span className="text-[#0A090966] text-[15px]">/Month</span>
            </div>
            <p className=" absolute right-3 text-[#2450A0] text-sm mt-1">₹ 1.2 Lacs</p>
          </div>

          {/* Rent Negotiable */}
          <div className="mt-8 flex items-center gap-2">
            <div
              onClick={() => setChecked(!checked)}
              className={`w-6 h-6 rounded-[8px] border flex items-center justify-center cursor-pointer transition-all
      ${checked ? "border-[#2450A0] shadow-[0_0_6px_2px_rgba(150,71,255,0.3)]" : "border-gray-400"}
    `}
            >
              {checked && (
                <div className="w-3 h-3 rounded-[4px] bg-[#2450A0]"></div>
              )}
            </div>

            <label
              onClick={() => setChecked(!checked)}
              className="text-[14px] text-[#0A0909] font-semibold cursor-pointer"
            >
              Rent Negotiable
            </label>
          </div>


          {/* Monthly Maintenance */}
          {/* <div className="mt-6">
            <label className="block text-[16px] font-semibold text-[#0A0909] mb-2">
              Monthly Maintenance<span className="text-red-500">*</span>
              
            </label>
            <select className="w-full border rounded-full px-3 py-2 text-sm text-[#0A090966] bg-white focus:outline-none">
              
              <option>Maintenance Included</option>
              <option>Extra Charges</option>
            </select>
            
          </div> */}
          <div className="mt-6 relative w-full md:w-[600px] lg:w-[500px] xl:w-[870px]">
            <label className="block text-[16px] font-semibold text-[#0A0909] mb-2">
              Monthly Maintenance<span className="text-red-500">*</span>
            </label>

            <select
              className="w-full border rounded-full px-3 py-2 pr-10 text-sm text-[#0A090966] bg-white focus:outline-none appearance-none"
            >
              <option>Maintenance Included</option>
              <option>Extra Charges</option>
            </select>

            <img
              src="/vector.png" // apka PNG public folder me hona chahiye
              alt="arrow"
              className="absolute right-3 top-12 -translate-y-1/2 w-4 h-2 pointer-events-none"
            />
          </div>


          {/* Save & Next Button */}
          <div className="col-span-2 text-right pt-5">
            <button
              onClick={handleSubmit}
              style={{ marginRight: "147px" }}
              type="submit"
              className="bg-[#2450A0] text-white px-6 py-2 y- rounded-full w-full md:w-[40%]"
            >
              SAVE & NEXT
            </button>
          </div>


        </div>
      </main>
    </div>
  );
}
