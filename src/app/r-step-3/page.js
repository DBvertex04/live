"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header2 from "@/components/Header2";

export default function PropertyTypeSelection() {
  const options = [
    { label: "Apartment", image: "/apartment (2).png" },
    { label: "Independent House", image: "/group.png" },
    { label: "Builder Floor", image: "/buiding_floor.png" },
    { label: "Villa", image: "/villa.png" },
    { label: "Penthouse", image: "/pentahouse.png" },
    { label: "Studio", image: "/studio.png" },
    { label: "Plot", image: "/plot.png" },
    { label: "Land", image: "/land.png" },
    { label: "Farm House", image: "/farm.png" },
    { label: "Agricultural Land", image: "/Parking.png" },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div
      className="relative text-gray-900 bg-gray-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Google Fonts: Poppins */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      {/* Backgrounds */}
      <div className="relative">
        <img
          src="/bubble.png"
          alt="Bubble 2"
          className="absolute top-0 right-0 w-[120px] md:w-[190px] z-0 opacity-80"
        />
        <img
          src="/bubble1.png"
          alt="Bubble 1"
          className="absolute top-0 right-0 w-[90px] md:w-[134px] z-10"
        />
      </div>

      <Header2 />

      <main
        className="pt-[120px] pb-12 flex justify-center relative z-10"
        style={{ top: "35px", paddingBottom: "120px" }}
      >
        <div className="w-[87%] mx-auto">
          <h2 className="text-2xl font-bold">
            <span
              style={{
                color: "#000000",
                fontWeight: "700",
                fontSize: "26px",
                lineHeight: "29px",
              }}
            >
              Property
            </span>{" "}
            <span
              style={{
                color: "#2450A0",
                fontWeight: "700",
                fontSize: "26px",
                lineHeight: "29px",
              }}
            >
              Type
            </span>
          </h2>

          <p
            className="text-sm text-gray-500 mt-1 text-[15px]"
            style={{ marginTop: "12px", color: "rgba(102, 102, 102, 1)" }}
          >
            Answer a few questions and get your no-obligation cash offer in as
            little as 3 minutes.
          </p>

          <div className="bg-white rounded-2xl shadow-md mt-6 p-4 md:h-[380px]">
            <h3
              className="mb-4 border-l-4 pl-3 text-lg md:text-2xl font-semibold mt-mt-1"
              style={{ borderColor: "#2450A0" }}
            >
              <span className="font-[700] text-[rgba(36,80,160,1)]">C</span>
              <span className="font-[600] text-[rgba(10,9,9,1)] md:whitespace-nowrap">
                hoose property type you would like to sell?
              </span>
            </h3>

            {/* Mobile: custom 3x3 grid with 2nd column having 4 items */}
            <div className="hidden lg:grid grid-cols-4 gap-3">
              {options.map((option, index) => {
                const isLastTwo = index >= options.length - 2;
                const colStartClass =
                  isLastTwo && index === options.length - 2 ? "col-start-2" : "";

                return (
                  <button
                    key={index}
                    onClick={() => setSelected(index)}
                    className={`flex flex-col items-center justify-center rounded-xl border px-3 py-4 transition-all text-sm font-semibold
                      ${
                        selected === index
                          ? "bg-[#E7ECF5] border-[rgba(36,80,160,0.53)] text-[#2450A0]"
                          : "bg-[#F7F8FA] border-transparent text-gray-700 hover:border-blue-300"
                      }
                      ${colStartClass}`}
                  >
                    <div className="mb-2">
                      <img
                        src={option.image}
                        alt="icon"
                        className="w-9 h-6 object-contain"
                      />
                    </div>
                    <span style={{ fontWeight: "500" }}>{option.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile layout */}
<div className="grid grid-cols-3 gap-3 lg:hidden">
  {/* First 3 rows normal */}
  {options.slice(0, 3).map((option, index) => (
    <button
      key={index}
      onClick={() => setSelected(index)}
      className={`flex flex-col items-center justify-center rounded-xl border px-3 py-4 transition-all text-sm font-semibold
        ${
          selected === index
            ? "bg-[#E7ECF5] border-[rgba(36,80,160,0.53)] text-[#2450A0]"
            : "bg-[#F7F8FA] border-transparent text-gray-700 hover:border-blue-300"
        }`}
    >
      <div className="mb-2">
        <img src={option.image} alt="icon" className="w-9 h-9 object-contain" />
      </div>
      <span style={{ fontWeight: "500" }}>{option.label}</span>
    </button>
  ))}

  {options.slice(3, 6).map((option, index) => {
    const actualIndex = index + 3;
    return (
      <button
        key={actualIndex}
        onClick={() => setSelected(actualIndex)}
        className={`flex flex-col items-center justify-center rounded-xl border px-3 py-4 transition-all text-sm font-semibold
          ${
            selected === actualIndex
              ? "bg-[#E7ECF5] border-[rgba(36,80,160,0.53)] text-[#2450A0]"
              : "bg-[#F7F8FA] border-transparent text-gray-700 hover:border-blue-300"
          }`}
      >
        <div className="mb-2">
          <img src={option.image} alt="icon" className="w-9 h-9 object-contain" />
        </div>
        <span style={{ fontWeight: "500" }}>{option.label}</span>
      </button>
    );
  })}

  {options.slice(6, 9).map((option, index) => {
    const actualIndex = index + 6;
    return (
      <button
        key={actualIndex}
        onClick={() => setSelected(actualIndex)}
        className={`flex flex-col items-center justify-center rounded-xl border px-3 py-4 transition-all text-sm font-semibold
          ${
            selected === actualIndex
              ? "bg-[#E7ECF5] border-[rgba(36,80,160,0.53)] text-[#2450A0]"
              : "bg-[#F7F8FA] border-transparent text-gray-700 hover:border-blue-300"
          }`}
      >
        <div className="mb-2">
          <img src={option.image} alt="icon" className="w-9 h-9 object-contain" />
        </div>
        <span style={{ fontWeight: "500" }}>{option.label}</span>
      </button>
    );
  })}

  {/* The extra element in column 2 */}
  <div className="col-start-2">
    <button
      onClick={() => setSelected(9)}
      className={`flex flex-col items-center justify-center rounded-xl border px-1 py-4 transition-all text-sm font-semibold
        ${
          selected === 9
            ? "bg-[#E7ECF5] border-[rgba(36,80,160,0.53)] text-[#2450A0]"
            : "bg-[#F7F8FA] border-transparent text-gray-700 hover:border-blue-300"
        }`}
    >
      <div className="mb-2">
        <img
          src={options[9].image}
          alt="icon"
          className="w-9 h-9 object-contain"
        />
      </div>
      <span style={{ fontWeight: "500" }}>{options[9].label}</span>
    </button>
  </div>
</div>

          </div>

          <div className="mt-8 flex justify-center lg:justify-end">
            <Link href="/r-step-4">
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
