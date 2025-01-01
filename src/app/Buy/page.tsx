
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PiHandshake } from "react-icons/pi";
import Link from "next/link";

interface CarDataType {
  name: string;
  price: string;
  features: string;
  pictures: string[];
  route: string;
  brand: string;
}

const Buy = () => {
  const [name, setName] = useState<string>("");
  const [msg, setMsg] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const [data, setData] = useState<CarDataType[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartData = JSON.parse(localStorage.getItem("cartData") || "[]");
      if (cartData) {
        setData(cartData);
      }
    }
  }, []);

  const setTotal = () => {
    let total = 0;
    data.forEach((val: CarDataType) => {
      const purePrice = parseFloat(val.price.slice(1).replace(",", ""));
      total += purePrice;
    });
    return `$${total.toLocaleString()}`;
  };

  const emptyCarData = () => {
    try {
      localStorage.setItem("cartData", "[]");
    } catch {
      // Error handling if needed
    }
    setOrderPlaced(false);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setOrderPlaced(true);
    setName("");
    setEmail("");
    setMsg("");
    setAddress("");

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "218de58b-9b19-41ec-b356-824d07903ff4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setOrderPlaced(false);
      } else {
        setOrderPlaced(false);
        setMsg(data.message);
      }
    } catch {
      setOrderPlaced(false);
      setMsg("Something went wrong, please try again.");
    }
  };

  return (
    <main
      id="contact"
      className="relative h-auto w-full bg-no-repeat bg-center bg-cover flex flex-col pt-16 sm:px-0 px-2"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/backpic1.jpg)",
      }}
    >
      <div
        className={`fixed xs:h-[400px] h-[350px] xs:w-[350px] w-[300px] rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] bg-no-repeat bg-center bg-cover ${orderPlaced ? "flex" : "hidden"} flex-col items-center justify-between text-white py-8 px-4 shadow-car`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/backpic1.jpg)",
        }}
      >
        <div className="flex flex-col items-center justify-start w-full">
          <h1 className="txt font-bold text-4xl uppercase mb-2"></h1>
          <h2 className="opacity-60 xs:mb-5 mb-2 xs:text-[16px] text-[14px]">
            Excellence in every ride, passion in every detail
          </h2>
          <p className="uppercase text-red-800">Thank you for choosing us</p>
          <p className="text-white xs:text-xl text-lg text-center">
            Your Order Has Been Placed Successfully.
          </p>
          <span className="h-14 w-14 mt-4">
            <PiHandshake className="h-full w-full text-white" />
          </span>
        </div>
        <Link href="/">
          <button
            className="text-xs font-semibold uppercase bg-red-800 rounded-md py-2 px-4"
            onClick={emptyCarData}
          >
            Closed
          </button>
        </Link>
      </div>
      <div
        className={`fixed h-screen w-screen backdrop-blur-glass z-[80] ${orderPlaced ? "flex" : "hidden"}`}
      ></div>

      <h1 className="txt xs:text-6xl text-5xl drop-shadow-txt uppercase w-full text-center py-5 font-bold xxs:translate-y-0 translate-y-5">
        Your Order Is Completed
      </h1>
      <div className="h-auto w-full flex md:flex-row flex-col items-center">
        {/* LEFT SECTION */}
        <section className="h-auto md:w-1/2 xs:w-4/5 w-full flex items-center justify-center">
          <div className="h-screen md:w-[90%] relative w-full bg-black shadow-car rounded-lg text-white px-4 py-5 flex flex-col my-10 gap-2 border-[0.5px] border-red-950">
            <h1 className="xs:text-4xl text-3xl capitalize font-semibold">
              Sm-Collection
            </h1>
            <p className="xs:text-sm text-xs text-white/60 font-semibold">
              Driven by excellence, fueled by passion.
            </p>
            <h1 className="text-white">
              <b>Total Amount:</b> {setTotal()}
            </h1>
            <div className="flex flex-wrap overflow-y-auto items-center justify-center gap-5 py-5 px-4">
              {data.map((val: CarDataType, ind: number) => (
                <div
                  key={ind}
                  className="h-[220px] w-[180px] overflow-hidden shadow-car rounded-xl"
                >
                  <motion.div
                    initial={{ transform: "translateY(100%)" }}
                    animate={{ transform: "translateY(0%)" }}
                    transition={{ duration: 0.5, delay: ind * 0.15 }}
                    className="relative h-full w-full bg-black overflow-hidden p-4 text-white bg-no-repeat bg-center bg-cover bg-[url('/d.jpg')] border-2 border-black"
                  >
                    <div
                      className={`relative h-[60%] w-full bg-no-repeat bg-center bg-contain ${val.pictures[0]} rounded-md bg-transparent`}
                    ></div>
                    <div className="relative">
                      <h1 className="text-xs font-semibold my-2">{val.name}</h1>
                      <h2 className="text-xs my-2 text-white/70">{val.price}</h2>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT SECTION */}
        <section className="h-auto md:w-1/2 xs:w-4/5 w-full py-10 flex items-center justify-center text-white">
          <div className="h-full md:w-[90%] px-0 py-[4px] w-full bg-black shadow-car flex items-center justify-center rounded-lg border-[0.5px] border-red-950 xxs:translate-y-0 -translate-y-10">
            <form
              onSubmit={submitHandler}
              className="h-[98.5%] w-[98.5%] bg-black rounded-lg px-10 py-6 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xl capitalize font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(data) => setName(data.target.value)}
                  required
                  className="rounded-md h-14 w-full bg-zinc-900 px-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className=" text-xl capitalize font-semibold">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(data) => setEmail(data.target.value)}
                  required
                  className="rounded-md h-14 w-full bg-zinc-900 px-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address" className=" text-xl capitalize font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(data) => setAddress(data.target.value)}
                  required
                  className="rounded-md h-14 w-full bg-zinc-900 px-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className=" text-xl capitalize font-semibold">
                  Text Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={msg}
                  onChange={(data) => setMsg(data.target.value)}
                  required
                  className="rounded-md sm:h-32 h-24 w-full bg-zinc-900 px-2 py-1"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="text-xs py-2 px-4 rounded-md text-red-800/50 border-red-800/50 font-bold  border-2 uppercase flex gap-2 items-center justify-center overflow-hidden"
                  type="submit"
                >
                  Order Placed
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Buy;
