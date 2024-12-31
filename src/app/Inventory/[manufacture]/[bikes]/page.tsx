
// "use client";

  

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft } from "react-icons/md";
// import { MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar } from "react-icons/io";
// import { IoMdStarHalf } from "react-icons/io";
// import { IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//    hayabusaBikeData, kawasakiBikeData, royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define types
// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// export default function Page({ params }: { params: Params }) {
//   const [unwrappedParams, setUnwrappedParams] = useState<Params | null>(null);
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null); // Default null

//   useEffect(() => {
//     const fetchParams = async () => {
//       setUnwrappedParams(await params);
//     };
//     fetchParams();
//   }, [params]);

//   // Update BikeData when unwrappedParams are available
//   useEffect(() => {
//     if (unwrappedParams) {
//       const bikeData = checkBikeData();
//       setBikeData(bikeData);
//     }
//   }, [unwrappedParams]);

//   const checkBikeData = () => {
//     let selectedModel: BikeDataType[] = [];
//     if (unwrappedParams) {
//       switch (unwrappedParams.manufacture) {
       
//         case "hayabusa":
//           selectedModel = hayabusaBikeData;
//           break;
//         case "kawasaki":
//           selectedModel = kawasakiBikeData;
//           break;
//         case "royalenfield":
//           selectedModel = royalEnfieldBikeData;
//           break;
      
//       }
//       let selectedBike = selectedModel.find((val) => val.route === unwrappedParams.bikes);
//       return selectedBike || selectedModel[0];
//     }
//     return null;
//   };

//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!;
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${unwrappedParams?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

 

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1
//         ? setRightDis(true)
//         : setRightDis(false);
//     } else {
//       setLeftDis(true);  
//       setRightDis(true);
//     }
  
//     setStartAnimate(true);
//   }, [slide, BikeData]);
  

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => unwrappedParams?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     let starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5)); 
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; // Show loading state while waiting for BikeData
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>







// "use client";

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define types
// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// export default function Page({ params }: { params: Params }) {
//   const [unwrappedParams, setUnwrappedParams] = useState<Params | null>(null);
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null); // Default null

//   // Set unwrappedParams when params are available
//   useEffect(() => {
//     setUnwrappedParams(params); // No need to await, params is already available
//   }, [params]);

//   // Update BikeData when unwrappedParams are available
//   useEffect(() => {
//     if (unwrappedParams) {
//       const bikeData = checkBikeData();
//       setBikeData(bikeData);
//     }
//   }, [unwrappedParams]);

//   // Function to check the selected bike data based on params
//   const checkBikeData = () => {
//     let selectedModel: BikeDataType[] = [];
//     if (unwrappedParams) {
//       switch (unwrappedParams.manufacture) {
//         case "hayabusa":
//           selectedModel = hayabusaBikeData;
//           break;
//         case "kawasaki":
//           selectedModel = kawasakiBikeData;
//           break;
//         case "royalenfield":
//           selectedModel = royalEnfieldBikeData;
//           break;
//       }
//       const selectedBike = selectedModel.find((val) => val.route === unwrappedParams.bikes);
//       return selectedBike || selectedModel[0];
//     }
//     return null;
//   };

//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!;
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${unwrappedParams?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1 ? setRightDis(true) : setRightDis(false);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => unwrappedParams?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     let starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; // Show loading state while waiting for BikeData
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>


// "use client";

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define types
// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// // Correct the typing for Page component props
// interface PageProps {
//   params: Params;
// }

// export default function Page({ params }: PageProps) {
//   const [unwrappedParams, setUnwrappedParams] = useState<Params | null>(null);
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   // Set unwrappedParams when params are available
//   useEffect(() => {
//     setUnwrappedParams(params); 
//   }, [params]);

//   // Update BikeData when unwrappedParams are available
//   useEffect(() => {
//     if (unwrappedParams) {
//       const bikeData = checkBikeData();
//       setBikeData(bikeData);
//     }
//   }, [unwrappedParams]);

//   // Function to check the selected bike data based on params
//   const checkBikeData = () => {
//     let selectedModel: BikeDataType[] = [];
//     if (unwrappedParams) {
//       switch (unwrappedParams.manufacture) {
//         case "hayabusa":
//           selectedModel = hayabusaBikeData;
//           break;
//         case "kawasaki":
//           selectedModel = kawasakiBikeData;
//           break;
//         case "royalenfield":
//           selectedModel = royalEnfieldBikeData;
//           break;
//         default:
//           return null; // In case manufacture doesn't match any options
//       }
//       const selectedBike = selectedModel.find((val) => val.route === unwrappedParams.bikes);
//       return selectedBike || selectedModel[0]; 
//     }
//     return null;
//   };

//    const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!;
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${unwrappedParams?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1 ? setRightDis(true) : setRightDis(false);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => unwrappedParams?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     let starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; // Show loading state while waiting for BikeData
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
   












// "use client";

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define types
// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// // Correct the typing for Page component props
// interface PageProps {
//   params: Params;
// }

// export const getServerSideProps = async ({ params }: { params: Params }) => {
//   // You can fetch additional data here if needed.
//   return {
//     props: {
//       params, // Pass the params directly from dynamic routing
//     },
//   };
// };

// export default function Page({ params }: PageProps) {
//   const [unwrappedParams, setUnwrappedParams] = useState<Params | null>(null);
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   // Set unwrappedParams when params are available
//   useEffect(() => {
//     setUnwrappedParams(params); 
//   }, [params]);

//   // Update BikeData when unwrappedParams are available
//   useEffect(() => {
//     if (unwrappedParams) {
//       const bikeData = checkBikeData();
//       setBikeData(bikeData);
//     }
//   }, [unwrappedParams]);

//   // Function to check the selected bike data based on params
//   const checkBikeData = () => {
//     let selectedModel: BikeDataType[] = [];
//     if (unwrappedParams) {
//       switch (unwrappedParams.manufacture) {
//         case "hayabusa":
//           selectedModel = hayabusaBikeData;
//           break;
//         case "kawasaki":
//           selectedModel = kawasakiBikeData;
//           break;
//         case "royalenfield":
//           selectedModel = royalEnfieldBikeData;
//           break;
//         default:
//           return null; // In case manufacture doesn't match any options
//       }
//       const selectedBike = selectedModel.find((val) => val.route === unwrappedParams.bikes);
//       return selectedBike || selectedModel[0]; 
//     }
//     return null;
//   };

//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!;
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${unwrappedParams?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1 ? setRightDis(true) : setRightDis(false);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => unwrappedParams?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     let starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; // Show loading state while waiting for BikeData
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
    













// "use client";



// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define types
// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// interface PageProps {
//   params: Params; // Params should not be a promise
// }

// export default function Page({ params }: PageProps) {
//   const [unwrappedParams, setUnwrappedParams] = useState<Params | null>(null);
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   // Set unwrappedParams when params are available
//   useEffect(() => {
//     if (params) {
//       setUnwrappedParams(params); // Ensure params are available
//     }
//   }, [params]);

//   // Update BikeData when unwrappedParams are available
//   useEffect(() => {
//     if (unwrappedParams) {
//       const bikeData = checkBikeData();
//       setBikeData(bikeData);
//     }
//   }, [unwrappedParams]);

//   // Function to check the selected bike data based on params
//   const checkBikeData = () => {
//     let selectedModel: BikeDataType[] = [];
//     if (unwrappedParams) {
//       switch (unwrappedParams.manufacture) {
//         case "hayabusa":
//           selectedModel = hayabusaBikeData;
//           break;
//         case "kawasaki":
//           selectedModel = kawasakiBikeData;
//           break;
//         case "royalenfield":
//           selectedModel = royalEnfieldBikeData;
//           break;
//         default:
//           return null; // In case manufacture doesn't match any options
//       }
//       const selectedBike = selectedModel.find((val) => val.route === unwrappedParams.bikes);
//       return selectedBike || selectedModel[0]; 
//     }
//     return null;
//   };

//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!;
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${unwrappedParams?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1 ? setRightDis(true) : setRightDis(false);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => unwrappedParams?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; // Show loading state while waiting for BikeData
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
    






// Correct the 'PageProps' and ensure 'params' is handled correctly

// "use client";

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Correct PageProps type definition
// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// // Correct usage of params, without making it a Promise type.
// export default function Page({ params }: { params: Params }) {  // Make sure params is directly typed as Params
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   // Update BikeData based on params (directly passed into the component)
//   useEffect(() => {
//     const bikeData = checkBikeData(params);
//     setBikeData(bikeData);
//   }, [params]);

//   // Function to check the selected bike data based on params
//   const checkBikeData = (params: Params) => {
//     let selectedModel: BikeDataType[] = [];
//     switch (params.manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null;
//     }
//     const selectedBike = selectedModel.find((val) => val.route === params.bikes);
//     return selectedBike || selectedModel[0];
//   };

  


//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!;
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${unwrappedParams?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1 ? setRightDis(true) : setRightDis(false);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => unwrappedParams?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; // Show loading state while waiting for BikeData
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
     




// "use client";

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Correct PageProps type definition
// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// // Ensure that `params` is directly passed as an object, not a Promise
// interface PageProps {
//   params: Params; 
// }

// export default function Page({ params }: PageProps) {
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   // Update BikeData based on params (directly passed into the component)
//   useEffect(() => {
//     const bikeData = checkBikeData(params);
//     setBikeData(bikeData);
//   }, [params]);

//   // Function to check the selected bike data based on params
//   const checkBikeData = (params: Params): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (params.manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null;
//     }
//     const selectedBike = selectedModel.find((val) => val.route === params.bikes);
//     return selectedBike || selectedModel[0]; // Return the selected bike or default to the first model
//   };

//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!; // Added the "!" since you're certain it's not null at this point.
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${params?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1 ? setRightDis(true) : setRightDis(false);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => params?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; // Show loading state while waiting for BikeData
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
   














// "use client";

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// interface PageProps {
//   params: Params;
// }

// export default function Page({ params }: PageProps) {
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   useEffect(() => {
//     const bikeData = checkBikeData(params);
//     setBikeData(bikeData);
//   }, [params]);

//   const checkBikeData = (params: Params): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (params.manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null;
//     }
//     const selectedBike = selectedModel.find((val) => val.route === params.bikes);
//     return selectedBike || selectedModel[0];
//   };

//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!;
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${params?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1 ? setRightDis(true) : setRightDis(false);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => params?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
    






// "use client";



// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// interface PageProps {
//   params: Params; // Ensure params is passed correctly as an object
// }

// export default function Page({ params }: PageProps) {
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   useEffect(() => {
//     const bikeData = checkBikeData(params);
//     setBikeData(bikeData);
//   }, [params]);

//   const checkBikeData = (params: Params): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (params.manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null;
//     }
//     const selectedBike = selectedModel.find((val) => val.route === params.bikes);
//     return selectedBike || selectedModel[0];
//   };

  // const [btnAnim, setBtnAnim] = useState(false);
  // const [slide, setSlide] = useState(0);
  // const [leftDis, setLeftDis] = useState(true);
  // const [rightDis, setRightDis] = useState(false);
  // const [btnDis, setBtnDis] = useState(false);
  // const [startAnimate, setStartAnimate] = useState(false);
  // const [featureDis, setFeatureDis] = useState(false);
  // const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
  // const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!; 
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${params?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1 ? setRightDis(true) : setRightDis(false);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => params?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
   





// "use client";

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }



// interface PageProps {
//   params: {
//     manufacture: string;
//     bikes: string;
//   };
// }

// export default function Page({ params }: PageProps) {
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   useEffect(() => {
//     const bikeData = checkBikeData(params);
//     setBikeData(bikeData);
//   }, [params]);

//   const checkBikeData = (params: Params): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (params.manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null;
//     }
//     const selectedBike = selectedModel.find((val) => val.route === params.bikes);
//     return selectedBike || selectedModel[0];
//   };


  
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!; 
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${params?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       slide === 0 ? setLeftDis(true) : setLeftDis(false);
//       slide === BikeData.pictures.length - 1 ? setRightDis(true) : setRightDis(false);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => params?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
   

















// "use client"


// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// interface PageProps {
//   params: {
//     manufacture: string;
//     bikes: string;
//   };
// }

// export default function Page({ params }: PageProps) {
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   // Check and load bike data based on the route params
//   useEffect(() => {
//     const bikeData = checkBikeData(params);
//     setBikeData(bikeData);
//   }, [params]);

//   // Function to check and load bike data based on params
//   const checkBikeData = (params: Params): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (params.manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null; // Return null if manufacture is not recognized
//     }
//     const selectedBike = selectedModel.find((val) => val.route === params.bikes);
//     return selectedBike || selectedModel[0]; // Return the found bike or the first in the list
//   };

//   // Add selected bike to cart
//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${params?.manufacture}`);
//     }
//   };

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // Update button and animation state based on bike data and slide changes
//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }
//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   // Set the rating stars based on bike features
//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => params?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   // Function to arrange rating stars based on bike features
//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   // Control the slide show
//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   // Add the selected bike to the cart handler
//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   // Display a loading state until bike data is loaded
//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div
//         className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
//         onClick={scrollToTop}
//       ></div>







// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define types
// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// interface PageProps {
//   params: Params; 
// }



// export default function Page({ params }: PageProps) {
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);


//   useEffect(() => {
//     const bikeData = checkBikeData(params);
//     setBikeData(bikeData);
//   }, [params]);

//   const checkBikeData = (params: Params): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (params.manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null;
//     }
//     const selectedBike = selectedModel.find((val) => val.route === params.bikes);
//     return selectedBike || selectedModel[0];
//   };

//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${params.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData])

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => params.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div
//         className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
//         onClick={scrollToTop}
//       ></div>




// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define the Params interface
// interface Params {
//   manufacture: string;
//   bikes: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// // This should be the correct type
// export interface PageProps {
//   params: Params;
// }

// export async function generateMetadata({ params }: PageProps) {
//   // Ensure that you return a valid metadata structure
//   return {
//     title: `Bike details for ${params.manufacture}`,
//     description: `Find out more about ${params.manufacture} bikes.`
//   };
// }

// export default function Page({ params }: PageProps) {
//   // Use useParams to get the params from the dynamic route
//   const { manufacture, bikes } = params;  // Directly destructure from params

//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   // Check and load bike data based on the route params
//   useEffect(() => {
//     if (manufacture && bikes) {
//       const bikeData = checkBikeData(manufacture, bikes);
//       setBikeData(bikeData);
//     }
//   }, [manufacture, bikes]);

//   // Function to check and load bike data based on params
//   const checkBikeData = (manufacture: string, bikes: string): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null; // Return null if manufacture is not recognized
//     }
//     const selectedBike = selectedModel.find((val) => val.route === bikes);
//     return selectedBike || selectedModel[0]; // Return the found bike or the first in the list
//   };

//   // Add selected bike to cart
//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${manufacture}`);
//     }
//   };

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };




  
//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData])

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => params.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div
//         className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
//         onClick={scrollToTop}
//       ></div>












// 'use client'; // This marks this file as a client component

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define the Params interface
// interface Params {
//   manufacture: string;
//   bikes: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// export interface PageProps {
//   params: Params;
// }

// export default function Page({ params }: PageProps) {
//   const { manufacture, bikes } = params;  // Directly destructure from params

//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   // Check and load bike data based on the route params
//   useEffect(() => {
//     if (manufacture && bikes) {
//       const bikeData = checkBikeData(manufacture, bikes);
//       setBikeData(bikeData);
//     }
//   }, [manufacture, bikes]);

//   // Function to check and load bike data based on params
//   const checkBikeData = (manufacture: string, bikes: string): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null; // Return null if manufacture is not recognized
//     }
//     const selectedBike = selectedModel.find((val) => val.route === bikes);
//     return selectedBike || selectedModel[0]; // Return the found bike or the first in the list
//   };

//   // Add selected bike to cart
//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${manufacture}`);
//     }
//   };

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div
//         className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
//         onClick={scrollToTop}
//       ></div>
      



// 'use client'; // This marks this file as a client component

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define the Params interface
// interface Params {
//   manufacture: string;
//   bikes: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// export interface PageProps {
//   params: Params;
// }

// export default function Page({ params }: PageProps) {
//   const { manufacture, bikes } = params; // Destructure params

//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   // Check and load bike data based on the route params
//   useEffect(() => {
//     if (manufacture && bikes) {
//       const bikeData = checkBikeData(manufacture, bikes);
//       setBikeData(bikeData);
//     }
//   }, [manufacture, bikes]);

//   // Function to check and load bike data based on params
//   const checkBikeData = (manufacture: string, bikes: string): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null; // Return null if manufacture is not recognized
//     }
//     const selectedBike = selectedModel.find((val) => val.route === bikes);
//     return selectedBike || selectedModel[0]; // Return the found bike or the first in the list
//   };

//   // Add selected bike to cart
//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${manufacture}`);
//     }
//   };

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }




// 'use client'; // This marks this file as a client component

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define the Params interface
// interface Params {
//   manufacture: string;
//   bikes: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// export interface PageProps {
//   params: Params;
// }

// export default function Page({ params }: PageProps) {
//   const { manufacture, bikes } = params; // Destructure params

//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   // Check and load bike data based on the route params
//   useEffect(() => {
//     if (manufacture && bikes) {
//       const bikeData = checkBikeData(manufacture, bikes);
//       setBikeData(bikeData);
//     }
//   }, [manufacture, bikes]);

//   // Function to check and load bike data based on params
//   const checkBikeData = (manufacture: string, bikes: string): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null; // Return null if manufacture is not recognized
//     }
//     const selectedBike = selectedModel.find((val) => val.route === bikes);
//     return selectedBike || selectedModel[0]; // Return the found bike or the first in the list
//   };

//   // Add selected bike to cart
//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${manufacture}`);
//     }
//   };

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

  


//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div
//         className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
//         onClick={scrollToTop}
//       ></div>
   
     
   




// 'use client'; // This marks this file as a client component

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define the Params interface
// interface Params {
//   manufacture: string;
//   bikes: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// export interface PageProps {
//   params: Params;
// }

// const Page: React.FC<PageProps> = ({ params }) => {
//   const { manufacture, bikes } = params; // Destructure params

//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   // Check and load bike data based on the route params
//   useEffect(() => {
//     if (manufacture && bikes) {
//       const bikeData = checkBikeData(manufacture, bikes);
//       setBikeData(bikeData);
//     }
//   }, [manufacture, bikes]);

//   // Function to check and load bike data based on params
//   const checkBikeData = (manufacture: string, bikes: string): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null; // Return null if manufacture is not recognized
//     }
//     const selectedBike = selectedModel.find((val) => val.route === bikes);
//     return selectedBike || selectedModel[0]; // Return the found bike or the first in the list
//   };

//   // Add selected bike to cart
//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${manufacture}`);
//     }
//   };

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div
//         className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
//         onClick={scrollToTop}
//       ></div>






// "use client";


// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define the Params interface
// interface Params {
//   manufacture: string;
//   bikes: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// export interface PageProps {
//   params: Params | Promise<Params>;
// }

// const Page: React.FC<PageProps> = async ({ params }) => {
//   // Ensure params is a Promise, even if it's a resolved object
//   const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params));
//   const { manufacture, bikes } = resolvedParams; // Destructure params

//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   // Check and load bike data based on the route params
//   useEffect(() => {
//     if (manufacture && bikes) {
//       const bikeData = checkBikeData(manufacture, bikes);
//       setBikeData(bikeData);
//     }
//   }, [manufacture, bikes]);

//   // Function to check and load bike data based on params
//   const checkBikeData = (manufacture: string, bikes: string): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null; // Return null if manufacture is not recognized
//     }
//     const selectedBike = selectedModel.find((val) => val.route === bikes);
//     return selectedBike || selectedModel[0]; // Return the found bike or the first in the list
//   };

//   // Add selected bike to cart
//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${manufacture}`);
//     }
//   };

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

 
//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div
//         className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
//         onClick={scrollToTop}
//       ></div>






// "use client";
// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// interface Params {
//   manufacture: string;
//   bikes: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// // Update PageProps to have params as a direct object
// export interface PageProps {
//   params: Params;  // Make sure params is not a Promise
// }

// const Page: React.FC<PageProps> = ({ params }) => {
//   const { manufacture, bikes } = params; // Destructure params directly

//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   useEffect(() => {
//     if (manufacture && bikes) {
//       const bikeData = checkBikeData(manufacture, bikes);
//       setBikeData(bikeData);
//     }
//   }, [manufacture, bikes]);

//   const checkBikeData = (manufacture: string, bikes: string): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null; // Return null if manufacture is not recognized
//     }
//     const selectedBike = selectedModel.find((val) => val.route === bikes);
//     return selectedBike || selectedModel[0]; // Return the found bike or the first in the list
//   };

  


  

//   // Add selected bike to cart
//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${manufacture}`);
//     }
//   };

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

 
//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div
//         className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
//         onClick={scrollToTop}
//       ></div>




// 'use client'; // This marks this file as a client component

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define the Params interface
// interface Params {
//   manufacture: string;
//   bikes: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// export interface PageProps {
//   params: Promise<Params>;
// }

// const Page: React.FC<PageProps> = ({ params }) => {
//   const [resolvedParams, setResolvedParams] = useState<Params | null>(null);
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   // Ensure params is a Promise, even if it's a resolved object
//   useEffect(() => {
//     if (params instanceof Promise) {
//       params.then((resolved) => setResolvedParams(resolved));
//     } else {
//       setResolvedParams(params);
//     }
//   }, [params]);

//   useEffect(() => {
//     if (resolvedParams?.manufacture && resolvedParams?.bikes) {
//       const bikeData = checkBikeData(resolvedParams.manufacture, resolvedParams.bikes);
//       setBikeData(bikeData);
//     }
//   }, [resolvedParams]);

//   const checkBikeData = (manufacture: string, bikes: string): BikeDataType | null => {
//     let selectedModel: BikeDataType[] = [];
//     switch (manufacture) {
//       case "hayabusa":
//         selectedModel = hayabusaBikeData;
//         break;
//       case "kawasaki":
//         selectedModel = kawasakiBikeData;
//         break;
//       case "royalenfield":
//         selectedModel = royalEnfieldBikeData;
//         break;
//       default:
//         return null;
//     }
//     const selectedBike = selectedModel.find((val) => val.route === bikes);
//     return selectedBike || selectedModel[0];
//   };

//   // Add selected bike to cart
//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       if (BikeData) {
//         cartArray.push(BikeData);
//       }
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${resolvedParams?.manufacture}`);
//     }
//   };

//   // Scroll to the top of the page
//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }

//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => resolvedParams?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     const starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div
//         className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
//         onClick={scrollToTop}
//       ></div>
   














'use client'; // This marks this file as a client component

import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { PiEnvelopeFill } from "react-icons/pi";
import { MdPhone } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import {
  hayabusaBikeData,
  kawasakiBikeData,
  royalEnfieldBikeData,
  BikeFeautersData,
  BikeRatings,
  descriptionFunc,
  BikeDescriptions,
  ratingFunc,
  shufflingFeatures,
  setReport,
} from "../../bikeData";
import Link from "next/link";

// Define the Params interface
interface Params {
  manufacture: string;
  bikes: string;
}

interface BikeDataType {
  name: string;
  price: string;
  features: string;
  pictures: string[];
  route: string;
  brand: string;
}

interface BikeFeautersType {
  img: string;
  name: string;
}

export interface PageProps {
  params: Params;  // Directly use Params here instead of Promise<Params>
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [resolvedParams, setResolvedParams] = useState<Params | null>(null);
  const [BikeData, setBikeData] = useState<BikeDataType | null>(null);
  const [btnAnim, setBtnAnim] = useState(false);
  const [slide, setSlide] = useState(0);
  const [leftDis, setLeftDis] = useState(true);
  const [rightDis, setRightDis] = useState(false);
  const [btnDis, setBtnDis] = useState(false);
  const [startAnimate, setStartAnimate] = useState(false);
  const [featureDis, setFeatureDis] = useState(false);
  const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
  const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

  // Resolve params immediately (no need to wait for Promise here)
  useEffect(() => {
    setResolvedParams(params);  // Directly use the passed params
  }, [params]);

  useEffect(() => {
    if (resolvedParams?.manufacture && resolvedParams?.bikes) {
      const bikeData = checkBikeData(resolvedParams.manufacture, resolvedParams.bikes);
      setBikeData(bikeData);
    }
  }, [resolvedParams]);

  const checkBikeData = (manufacture: string, bikes: string): BikeDataType | null => {
    let selectedModel: BikeDataType[] = [];
    switch (manufacture) {
      case "hayabusa":
        selectedModel = hayabusaBikeData;
        break;
      case "kawasaki":
        selectedModel = kawasakiBikeData;
        break;
      case "royalenfield":
        selectedModel = royalEnfieldBikeData;
        break;
      default:
        return null;
    }
    const selectedBike = selectedModel.find((val) => val.route === bikes);
    return selectedBike || selectedModel[0];
  };

















  // Add selected bike to cart
  const addToCart = () => {
    if (typeof window !== "undefined") {
      let data = localStorage.getItem("cartData");
      if (!data) {
        localStorage.setItem("cartData", "[]");
        data = "[]";
      }
      const cartArray = JSON.parse(data);
      if (BikeData) {
        cartArray.push(BikeData);
      }
      localStorage.setItem("cartData", JSON.stringify(cartArray));
      localStorage.setItem("route", `/Inventory/${resolvedParams?.manufacture}`);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    setFeatureDis((val) => !val);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (BikeData?.pictures?.length) {
      setLeftDis(slide === 0);
      setRightDis(slide === BikeData.pictures.length - 1);
    } else {
      setLeftDis(true);
      setRightDis(true);
    }

    setStartAnimate(true);
  }, [slide, BikeData]);

  useEffect(() => {
    ratingStarsArrangment();
    setBikeFeauters(shufflingFeatures(BikeFeautersData));

    if (typeof window !== "undefined") {
      const storedCartData = localStorage.getItem("cartData");
      if (storedCartData) {
        const data: BikeDataType[] = JSON.parse(storedCartData);
        if (data.some((val) => resolvedParams?.bikes === val.route)) {
          addBikeHandler();
        }
      }
    }
  }, [BikeData]);

  const setReportPercent = () => {
    let count = 0;
    setReport(BikeData!.features).data.forEach((val) => {
      count += val.percentage;
    });
    return count / 50;
  };

  const ratingStarsArrangment = () => {
    const starsData: string[] = ["full", "full"];
    if (starsData.length <= 5) {
      if (BikeData?.features === "A" || BikeData?.features === "E") {
        starsData.push("half", "empty", "empty");
      } else if (BikeData?.features === "C" || BikeData?.features === "J") {
        starsData.push("full", "full", "half");
      } else if (BikeData?.features === "H" || BikeData?.features === "D") {
        starsData.push("full", "half", "empty");
      } else if (BikeData?.features === "B" || BikeData?.features === "F") {
        starsData.push("full", "full", "empty");
      } else {
        starsData.push("full", "full", "full");
      }
    }
    setStarsArrangment(starsData.slice(0, 5));
  };

  const slideController = (direction: string) => {
    direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
  };

  const addBikeHandler = () => {
    setBtnDis(true);
    setTimeout(() => {
      setBtnAnim(true);
    }, 100);
  };

  if (!BikeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
      <div
        className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
        onClick={scrollToTop}
      ></div>
    

    {/* SIDE BAR  */}
         <aside
            className={`mmd:relative absolute ${!featureDis && "-translate-y-[120%]" } z-10 mmd:w-[28vw] w-auto h-auto px-3 py-5 bg-red-900 ${
              !startAnimate ? "-translate-y-[120%]" : "mmd:translate-y-0"
            } duration-100`}
          >
            {/* SELLER DETAILS */}
            <section className="relative h-auto w-full border-2 border-black rounded-xl text-white py-5 px-4 flex flex-col gap-4 bg-black/70">
              <h1 className="w-full text-center text-3xl font-semibold capitalize mb-4">
                Seller Details
              </h1>
              <h3 className="text-xl">Dealer: Muhammad Soban Saud</h3>
              <h3 className="text-xl">Address: Karachi, Pakistan</h3>
              <h3 className="text-xl">Timings: 12:00 AM to 11:00 PM</h3>
              <div className="flex gap-5 flex-col mt-5">
                <Link href="/Contact">
                  <button className="h-14 rounded-2xl w-full text-md border-2 border-red-900 text-red-900 font-semibold uppercase flex items-center justify-center">
                    <span className="h-14 w-14 flex items-center justify-center">
                      <PiEnvelopeFill className="h-3/5 w-3/5" />
                    </span>
                    <h1 className="text-lg font-semibold">Send Message</h1>
                  </button>
                </Link>
                <Link href="/Contact">
                  <button className="h-14 pr-7 rounded-2xl w-full text-md border-2 border-red-900 text-red-900 font-semibold uppercase flex items-center justify-center">
                    <span className="h-14 w-14 flex items-center justify-center">
                      <MdPhone className="h-3/5 w-3/5" />
                    </span>
                    <h1 className="text-lg font-semibold">Phone</h1>
                  </button>
                </Link>
              </div>
            </section>
            {/* Bike FEATURES */}
            <section className="h-auto w-full mt-5 rounded-xl bg-center bg-contain bg-black/70 text-white py-5 px-4">
              <h1 className="w-full text-center text-3xl font-semibold capitalize mb-5">
                Bike Features
              </h1>
              <div className="h-auto w-full flex flex-col gap-2 py-2 px-2">
                {BikeFeauters?.map((val, ind) => (
                  <div key={ind} className="h-[12vh] w-full flex items-center justify-start gap-5 hover:text-red-800 cursor-pointer">
                    <span
                    // ${val.img}
                      className={`h-[5vh] w-[5vh] hover:scale-125 flex bg-no-repeat bg-center bg-cover ${val.img}`}
                    ></span>
                    <h3 className="text-xl font-semibold capitalize">
                      {val.name}
                    </h3>
                  </div>
                ))}
              </div>
            </section>

            </aside>  




            {/* LEFT SECTION */}
            <section
              className={`duration-100 mmd:w-[70vw] w-full ${!startAnimate && "-translate-x-[200%]"} ${featureDis ? "opacity-0" : "opacity-100"}`}
            >
              {/* BikeS */}
              <section className="relative h-auto w-full flex flex-col px-2">
                <div className="relative xs:h-28 h-auto w-full text-red-900 my-5">
                  <div
                    className={`bg-zinc-900 rounded-xl flex items-center justify-center border-2 border-[#331010] duration-500`}
                  >
                    <h1 className="font-bold sm:text-5xl xs:text-[5vw] text-3xl sm:py-7 py-5 text-center">{BikeData.name}</h1>
                  </div>
                </div>
                <div
                  className={`relative w-full xs:h-screen h-[70vh] bg-no-repeat bg-center bg-cover ${
                    !startAnimate && "-translate-x-full"
                  } duration-100`}
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/backpic1.jpg)",
                  }}
                 >
                  {/* Bike VIEW */}
                  <div className="absolute rounded-xl h-[60%] sm:w-[80%] w-full left-1/2 top-1/2 -translate-x-1/2  xs:-translate-y-[70%] -translate-y-[85%] bg-black overflow-hidden shadow-Bike">
                    <span
                      className={`absolute bottom-6 left-8 h-12 w-12 bg-black/30 rounded-full flex items-center justify-center cursor-pointer z-10 ${
                        leftDis && "hidden"
                      }`}
                      onClick={() => slideController("left")}
                    >
                      <MdKeyboardArrowLeft className="h-1/2 w-1/2 text-white" />
                    </span>
                    <span
                      className={`absolute bottom-6 right-8 h-12 w-12 bg-black/30 rounded-full flex items-center justify-center cursor-pointer z-10 ${
                        rightDis && "hidden"
                      }`}
                      onClick={() => slideController("right")}
                    >
                      <MdKeyboardArrowRight className="h-1/2 w-1/2 text-white" />
                    </span>
    
                    {BikeData.pictures.map((val, ind) => (
                      <div
                        key={ind}
                        className={`relative h-full w-full bg-center bg-contain bg-no-repeat ${val} duration-300 shadow-Biked`}
                        style={{
                          transform: `translateY(-${ind * 100}%) translateX(${
                            ind * 100
                          }%) translateX(-${slide}00%)`,
                        }}
                      ></div>
                    ))}
                  </div>
    
                  {/* Bike SMALL PICS */}
                  <div className="absolute left-1/2 md:bottom-5 xs:bottom-10 bottom-12 -translate-x-1/2 md:h-32 xs:h-24 h-20 xs:w-[75%] w-[60%] overflow-hidden">
                    {BikeData.pictures.map((val, ind) => (
                      <div
                        key={ind}
                        className={`relative h-[75%] md:w-36 xs:w-28 w-20 rounded-md bg-no-repeat bg-center bg-cover duration-50 border-white ${val} ${
                          slide === ind && "border-[3px]"
                        }`}
                        style={{
                          transform: `translateY(-${ind * 100}%) translateX(${
                            ind * 120
                          }%) translateX(-${slide * 120}%)`,
                        }}>
                        <div
                          className={`h-full w-full absolute top-0 left-0 bg-black/50 ${
                            slide === ind && "bg-transparent"
                          }`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              {/* Bike PRICE */}
              <section className="relative w-full flex justify-between bg-zinc-900 px-4 py-5 text-white rounded-xl overflow-hidden sm:flex-row flex-col">
                <div className="sm:w-auto w-full">
                <h1 className="sm:text-4xl xxs:text-3xl text-2xl font-semibold my-2">{BikeData.name}</h1>
                <h2 className="sm:text-xl xxs:text-lg text-sm font-semibold opacity-50">
                {BikeData.price}
                </h2>
                </div>
                
                <div className={`flex h-auto sm:w-1/2 w-full flex-row-reverse xxs:gap-5 gap-2 items-end justify-start`}>
                  <button
                    className={`py-2 xxs:px-4 px-2 xs:text-sm text-xs font-semibold xs:rounded-md rounded-sm bg-red-800 duration-100 ${
                      btnDis && "hidden"
                    }`}
                    onClick={() => {
                      addToCart();
                      addBikeHandler();
                    }}
                  >
                    Add To Cart
                  </button>
                  <button
                    className={`xs:py-2 py-1 xs:pr-4 xxs:pr-2 pr-1 xs:pl-6 xxs:pl-4 pl-2 text-sm font-semibold text-red-800 xs:rounded-md rounded-sm border-red-800 border-2 duration-500 items-center justify-center xs:gap-2 gap-1 ${
                      btnAnim ? "translate-y-0" : "translate-y-[500%]"
                    } ${btnDis ? "flex" : "hidden"}`}
                   >
                    <h3 className="xs:text-sm text-xs">Added</h3>
                    <span className="xs:h-5 h-3 xs:w-5 w-3 flex items-center justify-center">
                      <TiTickOutline className="h-4/5 w-4/5" />
                    </span>
                  </button>
                  <Link href="/Cart">
                    <button
                      className={`xs:py-[10px] py-[6px] xxs:px-4 px-2 xs:text-sm text-xs xxs:font-semibold font-normal xs:rounded-md rounded-sm bg-red-800 duration-100 ${
                        btnAnim ? "translate-y-0" : "translate-y-[500%]"
                      } ${btnDis ? "inline-block" : "hidden"}`}
                    >
                      View Cart
                    </button>
                  </Link>
                </div>
              </section>
              {/* DESCRIPTION */}
              <section className="h-auto w-full bg-zinc-900 py-10 my-5 text-white px-4 rounded-xl">
                <h1 className="text-3xl font-semibold mb-4">Description</h1>
                <p>
                  {descriptionFunc(BikeData.features, BikeDescriptions, BikeData.name)}
                </p>
              </section>
              <div className="h-auto w-full flex sm:flex-row flex-col gap-2 items-start justify-center">
                {/* REPORT */}
                <section className="relative h-auto w-full bg-zinc-900 rounded-xl px-4 py-5 text-white mb-5">
                  <h1 className="text-2xl font-semibold">
                    SM-AutoMobiles Inspection Report
                  </h1>
                  <h3 className="text-md font-semibold capitalize opacity-50">
                    All Are Verified
                  </h3>
                  <div className="relative text-lg font-semibold capitalize w-full border-b-[1px] pb-3 my-4">
                    Overall Rating
                    <p className="absolute right-0 top-1 text-sm">
                      {setReportPercent()} / 10
                    </p>
                  </div>
                  {setReport(BikeData.features).data.map((val, ind) => (
                    <div key={ind} className="relative h-[20%] w-full text-white py-2">
                      <p>{val.text}</p>
                      <p className="absolute right-1 top-3 text-sm">
                        {val.percentage}%
                      </p>
                      <div className="relative mt-1 h-2 w-full bg-white rounded-full overflow-hidden">
                        <div
                          className={`absolute left-0 h-full bg-red-800`}
                          style={{ width: `${val.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </section>
                {/* RATING */}
                <section className="h-auto w-full bg-zinc-900 rounded-xl py-5 px-4 mb-5 text-white flex items-center justify-center flex-col">
                  <h1 className="text-3xl font-semibold w-full text-center pb-3">
                    Rating Section
                  </h1>
                  <p>{ratingFunc(BikeData.features, BikeRatings, BikeData.name)}</p>
                  <div className="my-10 h-16 w-4/5 flex items-center justify-center">
                    {starsArrangment.map((val, ind) => {
                      let star: JSX.Element = (
                        <IoMdStar className="h-4/5 w-4/5 text-red-800" />
                      );
                      switch (val) {
                        case "full":
                          star = <IoMdStar className="h-4/5 w-4/5 text-red-800" />;
                          break;
                        case "half":
                          star = (
                            <IoMdStarHalf className="h-4/5 w-4/5 text-red-800" />
                          );
                          break;
                        case "empty":
                          star = (
                            <IoMdStarOutline className="h-4/5 w-4/5 text-red-800" />
                          );
                          break;
                      }
                      return (
                        <span
                          key={ind}
                          className="h-14 w-14 flex items-center justify-center">
                          {star}
                        </span>
                      );
                    })}
                  </div>
                </section>
              </div>
            </section>
          </div>
                  );
    }
    


export default Page






{/*  
//   const [unwrappedParams, setUnwrappedParams] = useState<Params | null>(null);
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   // Fetch and set params when page loads
//   useEffect(() => {
//     setUnwrappedParams(params); // No need to await, params is already available
//   }, [params]);

//   // Update BikeData when unwrappedParams are available
//   useEffect(() => {
//     if (unwrappedParams) {
//       const bikeData = checkBikeData();
//       setBikeData(bikeData);
//     }
//   }, [unwrappedParams]);

//   const checkBikeData = () => {
//     let selectedModel: BikeDataType[] = [];
//     if (unwrappedParams) {
//       switch (unwrappedParams.manufacture) {
//         case "hayabusa":
//           selectedModel = hayabusaBikeData;
//           break;
//         case "kawasaki":
//           selectedModel = kawasakiBikeData;
//           break;
//         case "royalenfield":
//           selectedModel = royalEnfieldBikeData;
//           break;
//       }
//       return selectedModel.find((val) => val.route === unwrappedParams.bikes) || selectedModel[0];
//     }
//     return null;
//   };

//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!;
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${unwrappedParams?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }
//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => unwrappedParams?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     let starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     setSlide((prevSlide) => direction === "left" ? prevSlide - 1 : prevSlide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; // Show loading state while waiting for BikeData
//   }

//   return (
//     <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
//       <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
   


     










{/* 


// "use client";

// import { useEffect, useState } from "react";
// import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import { PiEnvelopeFill } from "react-icons/pi";
// import { MdPhone } from "react-icons/md";
// import { TiTickOutline } from "react-icons/ti";
// import {
//   hayabusaBikeData,
//   kawasakiBikeData,
//   royalEnfieldBikeData,
//   BikeFeautersData,
//   BikeRatings,
//   descriptionFunc,
//   BikeDescriptions,
//   ratingFunc,
//   shufflingFeatures,
//   setReport,
// } from "../../bikeData";
// import Link from "next/link";

// // Define types
// interface Params {
//   bikes: string;
//   manufacture: string;
// }

// interface BikeDataType {
//   name: string;
//   price: string;
//   features: string;
//   pictures: string[];
//   route: string;
//   brand: string;
// }

// interface BikeFeautersType {
//   img: string;
//   name: string;
// }

// export default function Page({ params }: { params: Params }) {
//   const [unwrappedParams, setUnwrappedParams] = useState<Params | null>(null);
//   const [BikeData, setBikeData] = useState<BikeDataType | null>(null);

//   useEffect(() => {
//     setUnwrappedParams(params); // No need to await, params is already available
//   }, [params]);

//   // Update BikeData when unwrappedParams are available
//   useEffect(() => {
//     if (unwrappedParams) {
//       const bikeData = checkBikeData();
//       setBikeData(bikeData);
//     }
//   }, [unwrappedParams]);

//   const checkBikeData = () => {
//     let selectedModel: BikeDataType[] = [];
//     if (unwrappedParams) {
//       switch (unwrappedParams.manufacture) {
//         case "hayabusa":
//           selectedModel = hayabusaBikeData;
//           break;
//         case "kawasaki":
//           selectedModel = kawasakiBikeData;
//           break;
//         case "royalenfield":
//           selectedModel = royalEnfieldBikeData;
//           break;
//       }
//       return selectedModel.find((val) => val.route === unwrappedParams.bikes) || selectedModel[0];
//     }
//     return null;
//   };

//   const [btnAnim, setBtnAnim] = useState(false);
//   const [slide, setSlide] = useState(0);
//   const [leftDis, setLeftDis] = useState(true);
//   const [rightDis, setRightDis] = useState(false);
//   const [btnDis, setBtnDis] = useState(false);
//   const [startAnimate, setStartAnimate] = useState(false);
//   const [featureDis, setFeatureDis] = useState(false);
//   const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
//   const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);

//   const addToCart = () => {
//     if (typeof window !== "undefined") {
//       let data = localStorage.getItem("cartData");
//       if (!data) {
//         localStorage.setItem("cartData", "[]");
//         data = "[]";
//       }
//       const cartArray = JSON.parse(data);
//       const myBikeData: BikeDataType = BikeData!;
//       cartArray.push(myBikeData);
//       localStorage.setItem("cartData", JSON.stringify(cartArray));
//       localStorage.setItem("route", `/Inventory/${unwrappedParams?.manufacture}`);
//     }
//   };

//   const scrollToTop = () => {
//     setFeatureDis((val) => !val);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     if (BikeData?.pictures?.length) {
//       setLeftDis(slide === 0);
//       setRightDis(slide === BikeData.pictures.length - 1);
//     } else {
//       setLeftDis(true);
//       setRightDis(true);
//     }
//     setStartAnimate(true);
//   }, [slide, BikeData]);

//   useEffect(() => {
//     ratingStarsArrangment();
//     setBikeFeauters(shufflingFeatures(BikeFeautersData));

//     if (typeof window !== "undefined") {
//       const storedCartData = localStorage.getItem("cartData");
//       if (storedCartData) {
//         const data: BikeDataType[] = JSON.parse(storedCartData);
//         if (data.some((val) => unwrappedParams?.bikes === val.route)) {
//           addBikeHandler();
//         }
//       }
//     }
//   }, [BikeData]);

//   const setReportPercent = () => {
//     let count = 0;
//     setReport(BikeData!.features).data.forEach((val) => {
//       count += val.percentage;
//     });
//     return count / 50;
//   };

//   const ratingStarsArrangment = () => {
//     let starsData: string[] = ["full", "full"];
//     if (starsData.length <= 5) {
//       if (BikeData?.features === "A" || BikeData?.features === "E") {
//         starsData.push("half", "empty", "empty");
//       } else if (BikeData?.features === "C" || BikeData?.features === "J") {
//         starsData.push("full", "full", "half");
//       } else if (BikeData?.features === "H" || BikeData?.features === "D") {
//         starsData.push("full", "half", "empty");
//       } else if (BikeData?.features === "B" || BikeData?.features === "F") {
//         starsData.push("full", "full", "empty");
//       } else {
//         starsData.push("full", "full", "full");
//       }
//     }
//     setStarsArrangment(starsData.slice(0, 5));
//   };

//   const slideController = (direction: string) => {
//     setSlide((prevSlide) => direction === "left" ? prevSlide - 1 : prevSlide + 1);
//   };

//   const addBikeHandler = () => {
//     setBtnDis(true);
//     setTimeout(() => {
//       setBtnAnim(true);
//     }, 100);
//   };

//   if (!BikeData) {
//     return <div>Loading...</div>; // Show loading state while waiting for BikeData
//   }

  
  // return (
  //   <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
  //     <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer" onClick={scrollToTop}></div>
  */}




  
    //       </aside>  
    //         {/* LEFT SECTION */}
    //         <section
    //           className={`duration-100 mmd:w-[70vw] w-full ${!startAnimate && "-translate-x-[200%]"} ${featureDis ? "opacity-0" : "opacity-100"}`}
    //         >
    //           {/* BikeS */}
    //           <section className="relative h-auto w-full flex flex-col px-2">
    //             <div className="relative xs:h-28 h-auto w-full text-red-900 my-5">
    //               <div
    //                 className={`bg-zinc-900 rounded-xl flex items-center justify-center border-2 border-[#331010] duration-500`}
    //               >
    //                 <h1 className="font-bold sm:text-5xl xs:text-[5vw] text-3xl sm:py-7 py-5 text-center">{BikeData.name}</h1>
    //               </div>
    //             </div>
    //             <div
    //               className={`relative w-full xs:h-screen h-[70vh] bg-no-repeat bg-center bg-cover ${
    //                 !startAnimate && "-translate-x-full"
    //               } duration-100`}
    //               style={{
    //                 backgroundImage:
    //                   "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/backpic1.jpg)",
    //               }}
    //              >
    //               {/* Bike VIEW */}
    //               <div className="absolute rounded-xl h-[60%] sm:w-[80%] w-full left-1/2 top-1/2 -translate-x-1/2  xs:-translate-y-[70%] -translate-y-[85%] bg-black overflow-hidden shadow-Bike">
    //                 <span
    //                   className={`absolute bottom-6 left-8 h-12 w-12 bg-black/30 rounded-full flex items-center justify-center cursor-pointer z-10 ${
    //                     leftDis && "hidden"
    //                   }`}
    //                   onClick={() => slideController("left")}
    //                 >
    //                   <MdKeyboardArrowLeft className="h-1/2 w-1/2 text-white" />
    //                 </span>
    //                 <span
    //                   className={`absolute bottom-6 right-8 h-12 w-12 bg-black/30 rounded-full flex items-center justify-center cursor-pointer z-10 ${
    //                     rightDis && "hidden"
    //                   }`}
    //                   onClick={() => slideController("right")}
    //                 >
    //                   <MdKeyboardArrowRight className="h-1/2 w-1/2 text-white" />
    //                 </span>
    
    //                 {BikeData.pictures.map((val, ind) => (
    //                   <div
    //                     key={ind}
    //                     className={`relative h-full w-full bg-center bg-contain bg-no-repeat ${val} duration-300 shadow-Biked`}
    //                     style={{
    //                       transform: `translateY(-${ind * 100}%) translateX(${
    //                         ind * 100
    //                       }%) translateX(-${slide}00%)`,
    //                     }}
    //                   ></div>
    //                 ))}
    //               </div>
    
    //               {/* Bike SMALL PICS */}
    //               <div className="absolute left-1/2 md:bottom-5 xs:bottom-10 bottom-12 -translate-x-1/2 md:h-32 xs:h-24 h-20 xs:w-[75%] w-[60%] overflow-hidden">
    //                 {BikeData.pictures.map((val, ind) => (
    //                   <div
    //                     key={ind}
    //                     className={`relative h-[75%] md:w-36 xs:w-28 w-20 rounded-md bg-no-repeat bg-center bg-cover duration-50 border-white ${val} ${
    //                       slide === ind && "border-[3px]"
    //                     }`}
    //                     style={{
    //                       transform: `translateY(-${ind * 100}%) translateX(${
    //                         ind * 120
    //                       }%) translateX(-${slide * 120}%)`,
    //                     }}>
    //                     <div
    //                       className={`h-full w-full absolute top-0 left-0 bg-black/50 ${
    //                         slide === ind && "bg-transparent"
    //                       }`}
    //                     ></div>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </section>
    //           {/* Bike PRICE */}
    //           <section className="relative w-full flex justify-between bg-zinc-900 px-4 py-5 text-white rounded-xl overflow-hidden sm:flex-row flex-col">
    //             <div className="sm:w-auto w-full">
    //             <h1 className="sm:text-4xl xxs:text-3xl text-2xl font-semibold my-2">{BikeData.name}</h1>
    //             <h2 className="sm:text-xl xxs:text-lg text-sm font-semibold opacity-50">
    //             {BikeData.price}
    //             </h2>
    //             </div>
                
    //             <div className={`flex h-auto sm:w-1/2 w-full flex-row-reverse xxs:gap-5 gap-2 items-end justify-start`}>
    //               <button
    //                 className={`py-2 xxs:px-4 px-2 xs:text-sm text-xs font-semibold xs:rounded-md rounded-sm bg-red-800 duration-100 ${
    //                   btnDis && "hidden"
    //                 }`}
    //                 onClick={() => {
    //                   addToCart();
    //                   addBikeHandler();
    //                 }}
    //               >
    //                 Add To Cart
    //               </button>
    //               <button
    //                 className={`xs:py-2 py-1 xs:pr-4 xxs:pr-2 pr-1 xs:pl-6 xxs:pl-4 pl-2 text-sm font-semibold text-red-800 xs:rounded-md rounded-sm border-red-800 border-2 duration-500 items-center justify-center xs:gap-2 gap-1 ${
    //                   btnAnim ? "translate-y-0" : "translate-y-[500%]"
    //                 } ${btnDis ? "flex" : "hidden"}`}
    //                >
    //                 <h3 className="xs:text-sm text-xs">Added</h3>
    //                 <span className="xs:h-5 h-3 xs:w-5 w-3 flex items-center justify-center">
    //                   <TiTickOutline className="h-4/5 w-4/5" />
    //                 </span>
    //               </button>
    //               <Link href="/Cart">
    //                 <button
    //                   className={`xs:py-[10px] py-[6px] xxs:px-4 px-2 xs:text-sm text-xs xxs:font-semibold font-normal xs:rounded-md rounded-sm bg-red-800 duration-100 ${
    //                     btnAnim ? "translate-y-0" : "translate-y-[500%]"
    //                   } ${btnDis ? "inline-block" : "hidden"}`}
    //                 >
    //                   View Cart
    //                 </button>
    //               </Link>
    //             </div>
    //           </section>
    //           {/* DESCRIPTION */}
    //           <section className="h-auto w-full bg-zinc-900 py-10 my-5 text-white px-4 rounded-xl">
    //             <h1 className="text-3xl font-semibold mb-4">Description</h1>
    //             <p>
    //               {descriptionFunc(BikeData.features, BikeDescriptions, BikeData.name)}
    //             </p>
    //           </section>
    //           <div className="h-auto w-full flex sm:flex-row flex-col gap-2 items-start justify-center">
    //             {/* REPORT */}
    //             <section className="relative h-auto w-full bg-zinc-900 rounded-xl px-4 py-5 text-white mb-5">
    //               <h1 className="text-2xl font-semibold">
    //                 SM-AutoMobiles Inspection Report
    //               </h1>
    //               <h3 className="text-md font-semibold capitalize opacity-50">
    //                 All Are Verified
    //               </h3>
    //               <div className="relative text-lg font-semibold capitalize w-full border-b-[1px] pb-3 my-4">
    //                 Overall Rating
    //                 <p className="absolute right-0 top-1 text-sm">
    //                   {setReportPercent()} / 10
    //                 </p>
    //               </div>
    //               {setReport(BikeData.features).data.map((val, ind) => (
    //                 <div key={ind} className="relative h-[20%] w-full text-white py-2">
    //                   <p>{val.text}</p>
    //                   <p className="absolute right-1 top-3 text-sm">
    //                     {val.percentage}%
    //                   </p>
    //                   <div className="relative mt-1 h-2 w-full bg-white rounded-full overflow-hidden">
    //                     <div
    //                       className={`absolute left-0 h-full bg-red-800`}
    //                       style={{ width: `${val.percentage}%` }}
    //                     ></div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </section>
    //             {/* RATING */}
    //             <section className="h-auto w-full bg-zinc-900 rounded-xl py-5 px-4 mb-5 text-white flex items-center justify-center flex-col">
    //               <h1 className="text-3xl font-semibold w-full text-center pb-3">
    //                 Rating Section
    //               </h1>
    //               <p>{ratingFunc(BikeData.features, BikeRatings, BikeData.name)}</p>
    //               <div className="my-10 h-16 w-4/5 flex items-center justify-center">
    //                 {starsArrangment.map((val, ind) => {
    //                   let star: JSX.Element = (
    //                     <IoMdStar className="h-4/5 w-4/5 text-red-800" />
    //                   );
    //                   switch (val) {
    //                     case "full":
    //                       star = <IoMdStar className="h-4/5 w-4/5 text-red-800" />;
    //                       break;
    //                     case "half":
    //                       star = (
    //                         <IoMdStarHalf className="h-4/5 w-4/5 text-red-800" />
    //                       );
    //                       break;
    //                     case "empty":
    //                       star = (
    //                         <IoMdStarOutline className="h-4/5 w-4/5 text-red-800" />
    //                       );
    //                       break;
    //                   }
    //                   return (
    //                     <span
    //                       key={ind}
    //                       className="h-14 w-14 flex items-center justify-center">
    //                       {star}
    //                     </span>
    //                   );
    //                 })}
    //               </div>
    //             </section>
    //           </div>
    //         </section>
    //       </div>
    //               );
    // }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // "use client";
  // import { useEffect, useState } from "react";
  // import { MdKeyboardArrowLeft } from "react-icons/md";
  // import { MdKeyboardArrowRight } from "react-icons/md";
  // import { IoMdStar } from "react-icons/io";
  // import { IoMdStarHalf } from "react-icons/io";
  // import { IoMdStarOutline } from "react-icons/io";
  // import { PiEnvelopeFill } from "react-icons/pi";
  // import { MdPhone } from "react-icons/md";
  // import { TiTickOutline } from "react-icons/ti";
  // import {
  //   harleyDavidsonBikeData, hayabusaBikeData, kawasakiBikeData, royalEnfieldBikeData,
  //   BikeFeautersData,
  //   BikeRatings,
  //   descriptionFunc,
  //   BikeDescriptions,
  //   ratingFunc,
  //   shufflingFeatures,
  //   setReport,
  // } from "../../bikeData";
  // import Link from "next/link";
  
  // interface Params {
  //   bikes: string;
  //   manufacture: string;
  // }
  // interface BikeDataType {
  //   name: string;
  //   price: string;
  //   features: string;
  //   pictures: string[];
  //   route: string;
  //   brand:string;
  // }
  // interface BikeFeautersType {
  //   img: string;
  //   name: string;
  // }
  // export default function Page({ params }: { params: Params }) {
  // const checkBikeData = () => {
  //   let selectedModel: BikeDataType[] = [];
  //   switch (params.manufacture) {
      
  //     case "hayabusa":
  //       selectedModel = hayabusaBikeData;
  //       break;
  //     case "kawasaki":
  //       selectedModel = kawasakiBikeData;
  //       break;
  //     case "royalenfield":
  //       selectedModel = royalEnfieldBikeData;
  //       break;
  //       case "harley":
  //       selectedModel = harleyDavidsonBikeData;
  //       break;
  //   }
  //   let selectedBike = selectedModel.find((val) => val.route === params.bikes);
  //   return selectedBike || selectedModel[0];
  // };
  
  // const [btnAnim, setBtnAnim] = useState(false);
  // const [slide, setSlide] = useState(0);
  // const [leftDis, setLeftDis] = useState(true);
  // const [rightDis, setRightDis] = useState(false);
  // const [btnDis, setBtnDis] = useState(false);
  // const [startAnimate, setStartAnimate] = useState(false);
  // const [BikeData, setBikeData] = useState<BikeDataType>(() => checkBikeData());
  // const [featureDis, setFeatureDis] = useState(false);
  // const [starsArrangment, setStarsArrangment] = useState<string[]>([]);
  // const [BikeFeauters, setBikeFeauters] = useState<BikeFeautersType[] | null>(null);
  
  // const addToCart = () => {
  //   if (typeof window !== "undefined") {
  //     let data = localStorage.getItem("cartData");
  //     if (!data) {
  //       localStorage.setItem("cartData", "[]");
  //       data = "[]";
  //     }
  //     const cartArray = JSON.parse(data);
  //     const myBikeData: BikeDataType = BikeData;
  //     cartArray.push(myBikeData);
  //     localStorage.setItem("cartData", JSON.stringify(cartArray));
  //     localStorage.setItem("route", `/Inventory/${params.manufacture}`);
  //   }
  // };
  
  // const scrollToTop = () => {
  //   setFeatureDis((val) => !val);
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  
  // useEffect(() => {
  //   slide === 0 ? setLeftDis(true) : setLeftDis(false);
  //   slide === BikeData.pictures.length - 1
  //     ? setRightDis(true)
  //     : setRightDis(false);
  //   setStartAnimate(true);
  // }, [slide]);
  
  // useEffect(() => {
  //   ratingStarsArrangment();
  //   setBikeFeauters(shufflingFeatures(BikeFeautersData));
  
  //   if (typeof window !== "undefined") {
  //     const storedCartData = localStorage.getItem("cartData");
  //     if (storedCartData) {
  //       const data: BikeDataType[] = JSON.parse(storedCartData);
  //       if (data.some((val) => params.bikes === val.route)) {
  //         addBikeHandler();
  //       }
  //     }
  //   }
  // }, []);
  
  // const setReportPercent = () => {
  //   let count = 0;
  //   setReport(BikeData.features).data.forEach((val) => {
  //     count += val.percentage;
  //   });
  //   return count / 50;
  // };
  
  // const ratingStarsArrangment = () => {
  //   let starsData: string[] = ["full", "full"];
  //   if (starsData.length <= 5) {
  //     if (BikeData.features === "A" || BikeData.features === "E") {
  //       starsData.push("half", "empty", "empty");
  //     } else if (BikeData.features === "C" || BikeData.features === "J") {
  //       starsData.push("full", "full", "half");
  //     } else if (BikeData.features === "H" || BikeData.features === "D") {
  //       starsData.push("full", "half", "empty");
  //     } else if (BikeData.features === "B" || BikeData.features === "F") {
  //       starsData.push("full", "full", "empty");
  //     } else {
  //       starsData.push("full", "full", "full");
  //     }
  //   }
  //   setStarsArrangment(starsData.slice(0, 5)); 
  // };
  
  // const slideController = (direction: string) => {
  //   direction === "left" ? setSlide(slide - 1) : setSlide(slide + 1);
  // };
  
  // const addBikeHandler = () => {
  //   setBtnDis(true);
  //   setTimeout(() => {
  //     setBtnAnim(true);
  //   }, 100);
  // };
  
  
  //   return (
  //       <div className="relative bg-black h-auto w-full pt-16 flex flex-row-reverse gap-1 overflow-hidden">
  //         <div className="fixed mmd:hidden inline-block h-10 w-10 z-[100] bottom-5 right-5 bg-no-repeat bg-center bg-cover bg-[url('/feature-icon.svg')] cursor-pointer"
  //         onClick={scrollToTop}
  //         ></div>


  //         {/* SIDE BAR  */}
  //         <aside
  //           className={`mmd:relative absolute ${!featureDis && "-translate-y-[120%]" } z-10 mmd:w-[28vw] w-auto h-auto px-3 py-5 bg-red-900 ${
  //             !startAnimate ? "-translate-y-[120%]" : "mmd:translate-y-0"
  //           } duration-100`}
  //         >
  //           {/* SELLER DETAILS */}
  //           <section className="relative h-auto w-full border-2 border-black rounded-xl text-white py-5 px-4 flex flex-col gap-4 bg-black/70">
  //             <h1 className="w-full text-center text-3xl font-semibold capitalize mb-4">
  //               Seller Details
  //             </h1>
  //             <h3 className="text-xl">Dealer: Muhammad Soban Saud</h3>
  //             <h3 className="text-xl">Address: Karachi, Pakistan</h3>
  //             <h3 className="text-xl">Timings: 12:00 AM to 11:00 PM</h3>
  //             <div className="flex gap-5 flex-col mt-5">
  //               <Link href="/Contact">
  //                 <button className="h-14 rounded-2xl w-full text-md border-2 border-red-900 text-red-900 font-semibold uppercase flex items-center justify-center">
  //                   <span className="h-14 w-14 flex items-center justify-center">
  //                     <PiEnvelopeFill className="h-3/5 w-3/5" />
  //                   </span>
  //                   <h1 className="text-lg font-semibold">Send Message</h1>
  //                 </button>
  //               </Link>
  //               <Link href="/Contact">
  //                 <button className="h-14 pr-7 rounded-2xl w-full text-md border-2 border-red-900 text-red-900 font-semibold uppercase flex items-center justify-center">
  //                   <span className="h-14 w-14 flex items-center justify-center">
  //                     <MdPhone className="h-3/5 w-3/5" />
  //                   </span>
  //                   <h1 className="text-lg font-semibold">Phone</h1>
  //                 </button>
  //               </Link>
  //             </div>
  //           </section>
  //           {/* Bike FEATURES */}
  //           <section className="h-auto w-full mt-5 rounded-xl bg-center bg-contain bg-black/70 text-white py-5 px-4">
  //             <h1 className="w-full text-center text-3xl font-semibold capitalize mb-5">
  //               Bike Features
  //             </h1>
  //             <div className="h-auto w-full flex flex-col gap-2 py-2 px-2">
  //               {BikeFeauters?.map((val, ind) => (
  //                 <div key={ind} className="h-[12vh] w-full flex items-center justify-start gap-5 hover:text-red-800 cursor-pointer">
  //                   <span
  //                   // ${val.img}
  //                     className={`h-[5vh] w-[5vh] hover:scale-125 flex bg-no-repeat bg-center bg-cover ${val.img}`}
  //                   ></span>
  //                   <h3 className="text-xl font-semibold capitalize">
  //                     {val.name}
  //                   </h3>
  //                 </div>
  //               ))}
  //             </div>
  //           </section>























