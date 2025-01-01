
"use client";
import Link from "next/link";
import Image from "next/image";
import {  hayabusaBikeData, kawasakiBikeData, royalEnfieldBikeData } from "../bikeData"; // Updated to use bike data

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BikeDataType {
  name: string;
  price: string;
  features: string;
  pictures: string[];
  route: string;
  brand: string;
}

interface Params {
  manufacture: string;
}

export default function Page({ params }: { params: Params }) {
  const [BikeArray, setBikeArray] = useState<BikeDataType[]>(hayabusaBikeData);
  const [logo, setLogo] = useState<string>("");

  useEffect(() => {
    switch (params.manufacture) {
     
      case "hayabusa":
        setBikeArray(hayabusaBikeData);
        setLogo("/hayalogo.png");
        break;
      case "kawasaki":
        setBikeArray(kawasakiBikeData);
        setLogo("/kawalogo.png");
        break;
      case "royalenfield":
        setBikeArray(royalEnfieldBikeData);
        setLogo("/royallogo.png");
        break;
    }
  }, [params.manufacture]); 

  return (
    <div
      className="h-auto w-full bg-black pt-16 bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/backpic1.jpg)",
      }}
    >
      <h1 className="text-white w-full text-7xl text-center my-6 font-bold txt uppercase drop-shadow-txt">
        {params.manufacture} Collection
      </h1>
      <div className="flex gap-8 flex-wrap items-center justify-center p-5">
        {BikeArray.map((val, ind) => (
          <div key={ind} className="h-[440px] w-[380px] overflow-hidden shadow-Bike rounded-xl">
            <motion.div
              initial={{ transform: "translateY(100%)" }}
              animate={{ transform: "translateY(0%)" }}
              transition={{ duration: 0.1, delay: ind * 0.15 }}
              className="relative h-full w-full bg-black overflow-hidden p-4 text-white bg-no-repeat bg-center bg-cover bg-[url('/backpic1.jpg')] border-2 border-black"
            >
              <div className="relative h-[60%] w-full rounded-md">
                <Image
                  src={val.pictures[0].replace("bg-[url('", "").replace("')]", "")} 
                  alt={val.name}
                  layout="fill" 
                  objectFit="contain" 
                  priority={ind < 3} 
                />
              </div>

              <div className="relative">
                <Image
                  src={logo}
                  alt={`${params.manufacture} logo`}
                  width={48} 
                  height={48} 
                  className="absolute right-5 bottom-2"
                />
                <h1 className="text-2xl font-semibold my-2">{val.name}</h1>
                <h2 className="text-lg my-2 text-white/70">{val.price}</h2>
                <Link href={`/Inventory/${params.manufacture}/${val.route}`}>
                  <button className="py-2 px-4 rounded-md text-white bg-red-800 uppercase font-semibold text-xs tracking-tighter">
                    View Bikes
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}











