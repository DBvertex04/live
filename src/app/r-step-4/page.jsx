'use client';

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Header2 from "@/components/Header2";
import {
  Building2, Home, LayoutGrid, Landmark, Tent,
  Trees, MapPinned, Layers3, Mountain
} from "lucide-react";

export default function PropertyDetail() {
  const options = [
    { label: "Apartment", icon: <Building2 size={24} /> },
    { label: "Independent House", icon: <Home size={24} /> },
    { label: "Builder Floor", icon: <LayoutGrid size={24} /> },
    { label: "Villa", icon: <Landmark size={24} /> },
    { label: "Penthouse", icon: <Tent size={24} /> },
    { label: "Studio", icon: <Trees size={24} /> },
    { label: "Plot", icon: <MapPinned size={24} /> },
    { label: "Land", icon: <Layers3 size={24} /> },
    { label: "Farm House", icon: <Mountain size={24} /> },
    { label: "Agricultural Land", icon: <Trees size={24} /> },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Poppins Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Background Images */}
      <div className="relative">
        <img
          src="/bubble.png"
          alt="Bubble 2"
          className="absolute top-0 right-0 w-[118px] md:w-[190px] z-0 opacity-80"
        />
        <img
          src="/bubble1.png"
          alt="Bubble 1"
          className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
        />
      </div>

      <Header2 />

      <main
        className="pt-[118px] pb-12 flex justify-center relative z-10"
        style={{ top: '35px', paddingBottom: '118px' }}
      >
        <div className="w-[87%] mx-auto">
          <h2 className="font-bold">
            <span
              style={{ color: 'rgba(0, 0, 0, 1)', fontWeight: '700' }}
              className="text-xl md:text-2xl"
            >
              Property
            </span>
            <span
              className="text-[#2450A0] text-xl md:text-2xl"
              style={{ fontWeight: '700' }}
              
            >
              {' '}Details
            </span>
          </h2>

          <p
            className="mt-1 text-sm md:text-base"
            style={{ marginTop: '12px', color: 'rgba(102, 102, 102, 1)', fontWeight: '400' }}
          >
            Answer a few questions and get your no-obligation cash offer in as little as 3 minutes.
          </p>

          {/* Form Box */}
          <div className="bg-white rounded-2xl shadow-md mt-6 p-6 space-y-4">
            <div>
              <label
                className="block font-medium mb-1 text-base md:text-lg"
                style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500' }}
              >
                Building/Project/Society
              </label>
              <input
                type="text"
                placeholder="Type Here And Select"
                className="w-full border rounded-[18px] px-4 py-3 placeholder:text-gray-400"
                style={{ color: '#0A090926' }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block font-semibold mb-1 text-base md:text-lg"
                  style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500' }}
                >
                  Plot Area <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Plot Area"
                  className="w-full border rounded-[18px] px-4 py-3 placeholder:text-gray-400"
                  style={{ color: '#0A090926' }}
                />
              </div>
              <div>
                <label
                  className="block font-semibold mb-1 text-base md:text-lg"
                  style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500' }}
                >
                  Length <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Length"
                  className="w-full border rounded-[18px] px-4 py-3 placeholder:text-gray-400"
                  style={{ color: '#0A090926' }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block font-semibold mb-1 text-base md:text-lg"
                  style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500' }}
                >
                  Width <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Width"
                  className="w-full border rounded-[18px] px-4 py-3 placeholder:text-gray-400"
                  style={{ color: '#0A090926' }}
                />
              </div>
              <div>
                <label
                  className="block font-semibold mb-1 text-base md:text-lg"
                  style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500' }}
                >
                  Built area
                </label>
                <input
                  type="text"
                  placeholder="Built area"
                  className="w-full border rounded-[18px] px-4 py-3 placeholder:text-gray-400"
                  style={{ color: '#0A090926' }}
                />
              </div>
            </div>

            <div>
              <label
                className="block font-semibold mb-1 text-base md:text-lg"
                style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500' }}
              >
                Area Unit <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  className="w-full border rounded-[18px] px-4 py-2.5 text-gray-900 appearance-none pr-10"
                  style={{ color: '#0A090926' }}
                >
                  <option value="" className="text-gray-900">Area Unit</option>
                  <option value="sqft" className="text-gray-900">sq ft</option>
                  <option value="sqyd" className="text-gray-900">sq yd</option>
                  <option value="sqm" className="text-gray-900">sq m</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src="/arrow-down.png"
                    alt="Dropdown Icon"
                    className="object-contain"
                    style={{ width: '24px', height: '24px' }}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                className="block font-semibold mb-1 text-base md:text-lg"
                style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500' }}
              >
                Road width in front
              </label>
              <input
                type="text"
                placeholder="Road width in front"
                className="w-full border rounded-[18px] px-4 py-3 placeholder:text-gray-400"
                style={{ color: '#0A090926' }}
              />
            </div>

            <div>
              <label
                className="block font-semibold mb-1 text-base md:text-lg"
                style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500' }}
              >
                Year built
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select Year Built"
                  className="w-full border rounded-[18px] px-4 py-3 placeholder:text-gray-400"
                  style={{ color: '#0A090926' }}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <img
                    src="/calendar-2.png"
                    alt="Calendar Icon"
                    className="w-5 h-5 object-contain"
                    style={{ width: '24px', height: '24px' }}
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                className="block font-semibold mb-1 text-base md:text-lg"
                style={{ color: 'rgba(10, 9, 9, 1)', fontWeight: '500' }}
              >
                Furnish Type
              </label>
              <div className="relative">
                <select
                  className="w-full border rounded-[18px] px-4 py-2.5 text-gray-900 appearance-none pr-10"
                  style={{ color: '#0A090926' }}
                >
                  <option value="" className="text-gray-900">Furnish Type</option>
                  <option value="furnished" className="text-gray-900">Furnished</option>
                  <option value="semi" className="text-gray-900">Semi-furnished</option>
                  <option value="unfurnished" className="text-gray-900">Unfurnished</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <img
                    src="/arrow-down.png"
                    alt="Dropdown Icon"
                    className="w-5 h-5 object-contain"
                    style={{ width: '24px', height: '24px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center lg:justify-end">
            <Link href="/r-step-5">
              <Image
                src="/next.png"
                alt="Next Step"
                width={350}
                height={350}
                className="cursor-pointer w-[250px] md:w-[300px] lg:w-[350px]"
              />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
