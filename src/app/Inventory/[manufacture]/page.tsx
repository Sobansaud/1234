
// // "use client";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { harleyDavidsonBikeData, hayabusaBikeData, kawasakiBikeData, royalEnfieldBikeData } from "../bikeData"; // Updated to use bike data
// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";
// // import { useParams } from "next/navigation"; // Import `useParams` to access the dynamic params

// // interface bikeDataType {
// //   name: string;
// //   price: string;
// //   features: string;
// //   pictures: string[];
// //   route: string;
// //   brand: string;
// // }

// // export default function Page() {
// //   const params = useParams();  // Use the `useParams` hook to access route params
// //   const [bikeArray, setBikeArray] = useState<bikeDataType[]>(harleyDavidsonBikeData); // Default to Kawasaki bikes
// //   const [logo, setLogo] = useState<string>("");

// //   useEffect(() => {
// //     if (!params.manufacture) return; // Check if params are loaded

// //     switch (params.manufacture) {
// //       case "harley":
// //         setBikeArray(harleyDavidsonBikeData);
// //         setLogo("/harleylogo.png");
// //         break;
// //       case "hayabusa":
// //         setBikeArray(hayabusaBikeData);
// //         setLogo("/hayalogo.png");
// //         break;
// //       case "kawasaki":
// //         setBikeArray(kawasakiBikeData);
// //         setLogo("/kawalogo.png");
// //         break;
// //       case "royalenfield":
// //         setBikeArray(royalEnfieldBikeData);
// //         setLogo("/royallogo.png");
// //         break;
// //       // default:
// //       //   setBikeArray(kawasakiBikeData); // Default fallback
// //     }
// //   }, [params.manufacture]);  // Re-run the effect when manufacture changes

// //   return (
// //     <div
// //       className="h-auto w-full bg-black pt-16 bg-no-repeat bg-center bg-cover"
// //       style={{
// //         backgroundImage:
// //           "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/backpic1.jpg)", // Optional background image
// //       }}
// //     >
// //       <h1 className="text-white w-full text-7xl text-center my-6 font-bold txt uppercase drop-shadow-txt">
// //         {params.manufacture} Showroom
// //       </h1>
// //       <div className="flex gap-8 flex-wrap items-center justify-center p-5">
// //         {bikeArray.map((val, ind) => (
// //           <div key={ind} className="h-[440px] w-[380px] overflow-hidden shadow-Bike rounded-xl">
// //             <motion.div
// //               initial={{ transform: "translateY(100%)" }}
// //               animate={{ transform: "translateY(0%)" }}
// //               transition={{ duration: 0.2, delay: ind * 0.15 }}
// //               className="relative h-full w-full bg-black overflow-hidden p-4 text-white bg-no-repeat bg-center bg-cover bg-[url('/backpic1.jpg')] border-2 border-black"
// //             >
// //               <div className="relative h-[60%] w-full rounded-md">
// //                 <Image
// //                   src={val.pictures[0].replace("bg-[url('", "").replace("')]", "")} // Correcting path for images
// //                   alt={val.name}
// //                   layout="fill"
// //                   objectFit="contain"
// //                   priority={ind < 3}
// //                 />
// //               </div>

// //               <div className="relative">
// //                 <Image
// //                   src={logo}
// //                   alt={`${params.manufacture} logo`}
// //                   width={48}
// //                   height={48}
// //                   className="absolute right-5 bottom-2"
// //                 />
// //                 <h1 className="text-2xl font-semibold my-2">{val.name}</h1>
// //                 <h2 className="text-lg my-2 text-white/70">{val.price}</h2>
// //                 <Link href={`/Inventory/${params.manufacture}/${val.route}`}>
// //                   <button className="py-2 px-4 rounded-md text-white bg-red-800 uppercase font-semibold text-xs tracking-tighter">
// //                     View bike
// //                   </button>
// //                 </Link>
// //               </div>
// //             </motion.div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }





// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { harleyDavidsonBikeData, hayabusaBikeData, kawasakiBikeData, royalEnfieldBikeData } from "../bikeData"; // Updated to use bike data
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useParams } from "next/navigation"; // Import `useParams` to access the dynamic params

// interface bikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface Params {
//   manufacture: string;
// }

// export default function Page() {
//   const params = useParams();  // Use the `useParams` hook to access route params
//   const [bikeArray, setBikeArray] = useState<bikeDataType[]>(harleyDavidsonBikeData); // Default to Harley-Davidson bikes
//   const [logo, setLogo] = useState<string>("");

//   useEffect(() => {
//     if (!params.manufacture) return; // Check if params are loaded

//     switch (params.manufacture) {
//       case "harley":
//         setBikeArray(harleyDavidsonBikeData);
//         setLogo("/harleylogo.png");
//         break;
//       case "hayabusa":
//         setBikeArray(hayabusaBikeData);
//         setLogo("/hayalogo.png");
//         break;
//       case "kawasaki":
//         setBikeArray(kawasakiBikeData);
//         setLogo("/kawalogo.png");
//         break;
//       case "royalenfield":
//         setBikeArray(royalEnfieldBikeData);
//         setLogo("/royallogo.png");
//         break;
//     }
//   }, [params.manufacture]);  // Re-run the effect when manufacture changes

//   return (
//     <div
//       className="h-auto w-full bg-black pt-16 bg-no-repeat bg-center bg-cover"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(/backpic1.jpg)", // Optional background image
//       }}
//     >
//       <h1 className="text-white w-full text-7xl text-center my-6 font-bold txt uppercase drop-shadow-txt">
//         {params.manufacture} Showroom
//       </h1>
//       <div className="flex gap-8 flex-wrap items-center justify-center p-5">
//         {bikeArray.map((val, ind) => (
//           <div key={ind} className="h-[440px] w-[380px] overflow-hidden shadow-Bike rounded-xl">
//             <motion.div
//               initial={{ transform: "translateY(100%)" }}
//               animate={{ transform: "translateY(0%)" }}
//               transition={{ duration: 0.2, delay: ind * 0.15 }}
//               className="relative h-full w-full bg-black overflow-hidden p-4 text-white bg-no-repeat bg-center bg-cover bg-[url('/backpic1.jpg')] border-2 border-black"
//             >
//               <div className="relative h-[60%] w-full rounded-md">
//                 <Image
//                   src={val.pictures[0].replace("bg-[url('", "").replace("')]", "")} // Correcting path for images
//                   alt={val.name}
//                   layout="fill"
//                   objectFit="contain"
//                   priority={ind < 3}
//                 />
//               </div>

//               <div className="relative">
//                 <Image
//                   src={logo}
//                   alt={`${params.manufacture} logo`}
//                   width={48}
//                   height={48}
//                   className="absolute right-5 bottom-2"
//                 />
//                 <h1 className="text-2xl font-semibold my-2">{val.name}</h1>
//                 <h2 className="text-lg my-2 text-white/70">{val.price}</h2>
//                 <Link href={`/Inventory/${params.manufacture}/${val.route}`}>
//                   <button className="py-2 px-4 rounded-md text-white bg-red-800 uppercase font-semibold text-xs tracking-tighter">
//                     View bike
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }































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














// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import {  hayabusaBikeData, kawasakiBikeData, royalEnfieldBikeData } from "../bikeData"; // Updated to use bike data

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface Params {
//   manufacture: string;
// }

// export default function Page({ params }: { params: Params }) {
//   const [BikeArray, setBikeArray] = useState<BikeDataType[]>(hayabusaBikeData);
//   const [logo, setLogo] = useState<string>("");

//   // Unwrap params using React.use
//   const [unwrappedParams, setUnwrappedParams] = useState<Params | null>(null);

//   useEffect(() => {
//     // Ensure params are unwrapped when passed as a Promise
//     const unwrapParams = async () => {
//       const resolvedParams = await params; // Await the promise to unwrap params
//       setUnwrappedParams(resolvedParams); // Set the unwrapped params
//     };
//     unwrapParams(); // Call unwrap function
//   }, [params]); // Re-run when params change

//   // Ensure the unwrapped params are available before executing logic
//   useEffect(() => {
//     if (unwrappedParams) {
//       switch (unwrappedParams.manufacture) {
//         // case "harley":
//         //   setBikeArray(harleyDavidsonBikeData);
//         //   setLogo("/harleylogo.png");
//         //   break;
//         case "hayabusa":
//           setBikeArray(hayabusaBikeData);
//           setLogo("/hayalogo.png");
//           break;
//         case "kawasaki":
//           setBikeArray(kawasakiBikeData);
//           setLogo("/kawalogo.png");
//           break;
//         case "royalenfield":
//           setBikeArray(royalEnfieldBikeData);
//           setLogo("/royallogo.png");
//           break;
//       }
//     }
//   }, [unwrappedParams]); // Trigger when unwrappedParams changes

//   if (!unwrappedParams) {
//     // If unwrappedParams is still not available, return loading
//     return <div>Loading...</div>;
//   }

//   return (
//     <div
//       className="h-auto w-full bg-black pt-16 bg-no-repeat bg-center bg-cover"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/backpic1.jpg)",
//       }}
//     >
//       <h1 className="text-white w-full text-7xl text-center my-6 font-bold txt uppercase drop-shadow-txt">
//         {unwrappedParams.manufacture} Collection
//       </h1>
//       <div className="flex gap-8 flex-wrap items-center justify-center p-5">
//         {BikeArray.map((val, ind) => (
//           <div key={ind} className="h-[440px] w-[380px] overflow-hidden shadow-Bike rounded-xl">
//             <motion.div
//               initial={{ transform: "translateY(100%)" }}
//               animate={{ transform: "translateY(0%)" }}
//               transition={{ duration: 0.1, delay: ind * 0.15 }}
//               className="relative h-full w-full bg-black overflow-hidden p-4 text-white bg-no-repeat bg-center bg-cover bg-[url('/backpic1.jpg')] border-2 border-black"
//             >
//               <div className="relative h-[60%] w-full rounded-md">
//                 <Image
//                   src={val.pictures[0].replace("bg-[url('", "").replace("')]", "")}
//                   alt={val.name}
//                   layout="fill"
//                   objectFit="contain"
//                   priority={ind < 3}
//                 />
//               </div>

//               <div className="relative">
//                 <Image
//                   src={logo}
//                   alt={`${unwrappedParams.manufacture}logo.png`}
//                   width={48}
//                   height={48}
//                   className="absolute right-5 bottom-2"
//                 />

//                 <h1 className="text-2xl font-semibold my-2">{val.name}</h1>
//                 <h2 className="text-lg my-2 text-white/70">{val.price}</h2>
//                 <Link href={`/Inventory/${unwrappedParams.manufacture}/${val.route}`}>
//                   <button className="py-2 px-4 rounded-md text-white bg-red-800 uppercase font-semibold text-xs tracking-tighter">
//                     View Bikes
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

















// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { hayabusaBikeData, kawasakiBikeData, royalEnfieldBikeData } from "../bikeData";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface Params {
//   manufacture: string;
// }

// export default function Page({ params }: { params: Params }) {
//   const [BikeArray, setBikeArray] = useState<BikeDataType[]>([]);
//   const [logo, setLogo] = useState<string>("");

//   useEffect(() => {
//     switch (params.manufacture) {
//       case "hayabusa":
//         setBikeArray(hayabusaBikeData);
//         setLogo("/hayalogo.png");
//         break;
//       case "kawasaki":
//         setBikeArray(kawasakiBikeData);
//         setLogo("/kawalogo.png");
//         break;
//       case "royalenfield":
//         setBikeArray(royalEnfieldBikeData);
//         setLogo("/royallogo.png");
//         break;
//       default:
//         setBikeArray([]);
//         setLogo("");
//         break;
//     }
//   }, [params]);

//   if (!params) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div
//       className="h-auto w-full bg-black pt-16 bg-no-repeat bg-center bg-cover"
//       style={{
//         backgroundImage:
//           "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/backpic1.jpg)",
//       }}
//     >
//       <h1 className="text-white w-full text-7xl text-center my-6 font-bold txt uppercase drop-shadow-txt">
//         {params.manufacture} Collection
//       </h1>
//       <div className="flex gap-8 flex-wrap items-center justify-center p-5">
//         {BikeArray.map((val, ind) => (
//           <div key={ind} className="h-[440px] w-[380px] overflow-hidden shadow-Bike rounded-xl">
//             <motion.div
//               initial={{ transform: "translateY(100%)" }}
//               animate={{ transform: "translateY(0%)" }}
//               transition={{ duration: 0.1, delay: ind * 0.15 }}
//               className="relative h-full w-full bg-black overflow-hidden p-4 text-white bg-no-repeat bg-center bg-cover bg-[url('/backpic1.jpg')] border-2 border-black"
//             >
//               <div className="relative h-[60%] w-full rounded-md">
//                 <Image
//                   src={val.pictures[0].replace("bg-[url('", "").replace("')]", "")}
//                   alt={val.name}
//                   layout="fill"
//                   objectFit="contain"
//                   priority={ind < 3}
//                 />
//               </div>

//               <div className="relative">
//                 <Image
//                   src={logo}
//                   alt={`${params.manufacture}logo.png`}
//                   width={48}
//                   height={48}
//                   className="absolute right-5 bottom-2"
//                 />

//                 <h1 className="text-2xl font-semibold my-2">{val.name}</h1>
//                 <h2 className="text-lg my-2 text-white/70">{val.price}</h2>
//                 <Link href={`/Inventory/${params.manufacture}/${val.route}`}>
//                   <button className="py-2 px-4 rounded-md text-white bg-red-800 uppercase font-semibold text-xs tracking-tighter">
//                     View Bikes
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
















// 'use client';

// import { useEffect, useState } from "react";
// import { hayabusaBikeData, kawasakiBikeData, royalEnfieldBikeData } from "../bikeData";
// import { motion } from "framer-motion";
// import Link from "next/link";

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface Params {
//   manufacture: string;
// }

// export default function Page({ params }: { params: Params }) {
//   const [BikeArray, setBikeArray] = useState<BikeDataType[]>([]);
//   const [logo, setLogo] = useState<string>("");

//   useEffect(() => {
//     switch (params.manufacture) {
//       case "hayabusa":
//         setBikeArray(hayabusaBikeData);
//         setLogo("/hayalogo.png");
//         break;
//       case "kawasaki":
//         setBikeArray(kawasakiBikeData);
//         setLogo("/kawalogo.png");
//         break;
//       case "royalenfield":
//         setBikeArray(royalEnfieldBikeData);
//         setLogo("/royallogo.png");
//         break;
//       default:
//         setBikeArray([]);
//         setLogo("");
//         break;
//     }
//   }, [params]);

//   return (
//     <div className="h-auto w-full bg-black pt-16">
//       <h1 className="text-white text-7xl text-center my-6 font-bold uppercase">{params.manufacture} Collection</h1>
//       <div className="flex gap-8 flex-wrap items-center justify-center p-5">
//         {BikeArray.map((val, ind) => (
//           <div key={ind} className="h-[440px] w-[380px] overflow-hidden shadow-Bike rounded-xl">
//             <motion.div
//               initial={{ transform: "translateY(100%)" }}
//               animate={{ transform: "translateY(0%)" }}
//               transition={{ duration: 0.1, delay: ind * 0.15 }}
//               className="relative h-full w-full bg-black overflow-hidden p-4 text-white"
//             >
//               <div className="relative h-[60%] w-full rounded-md">
//                 <img
//                   src={val.pictures[0]}
//                   alt={val.name}
//                   className="object-contain w-full h-full"
//                 />
//               </div>

//               <div className="relative">
//                 <img
//                   src={logo}
//                   alt={`${params.manufacture} logo`}
//                   width={48}
//                   height={48}
//                   className="absolute right-5 bottom-2"
//                 />
//                 <h1 className="text-2xl font-semibold my-2">{val.name}</h1>
//                 <h2 className="text-lg my-2 text-white/70">{val.price}</h2>
//                 <Link href={`/Inventory/${params.manufacture}/${val.route}`}>
//                   <button className="py-2 px-4 rounded-md text-white bg-red-800 uppercase font-semibold text-xs">
//                     View Bikes
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
