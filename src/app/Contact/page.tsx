
"use client";
import React, { useState, FormEvent } from "react";
import { MdSend } from "react-icons/md";

const Contact = () => {
  const [btnHover, setBtnHover] = useState(false);
  const [btnClick, setBtnClick] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState("");

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBtnClick(true);
    setResult("Sending...");

    setTimeout(() => {
      setBtnClick(false);
    }, 500);

    const formData = new FormData(event.target as HTMLFormElement);

    // Use your Web3Forms Access Key here
    formData.append("access_key", "218de58b-9b19-41ec-b356-824d07903ff4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult("Submission failed. Please try again.");
      }
    } catch (error) {
      setResult("There was an error submitting the form.");
      if (process.env.NODE_ENV === "development") {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <main
      id="contact"
      className="h-auto w-full bg-no-repeat bg-center bg-cover flex flex-col pt-16 sm:px-0 px-2"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/backpic1.jpg)",
      }}
    >
      <h1 className="txt xs:text-6xl text-5xl drop-shadow-txt uppercase w-full text-center py-5 font-bold xxs:translate-y-0 translate-y-5">
        Contact
      </h1>
      <div className="h-auto w-full flex md:flex-row flex-col items-center">
        {/* Left Section */}
        <section className="h-auto md:w-1/2 xs:w-4/5 w-full flex items-center justify-center">
          <div className="h-auto md:w-[90%] w-full bg-black shadow-car rounded-lg text-white px-4 py-5 flex flex-col my-10 gap-2 border-[0.5px] border-red-950 ">
            <h1 className="xs:text-4xl text-3xl capitalize font-semibold">
              Contact Details
            </h1>
            <p className="xs:text-lg text-sm text-white/60 font-semibold">
              Feel Free To Contact Us
            </p>
            <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-cyan-700 rounded-xl">
              <b>Name:</b> Muhammad Soban Saud
            </h2>
            <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-cyan-700 rounded-xl">
              <b>Email:</b> sobansaud3@gmail.com
            </h2>
            <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-cyan-700 rounded-xl">
              <b>Phone:</b> +92 329 9274846
            </h2>
            <h2 className="xs:text-xl xxs:text-lg text-sm w-full py-4 px-2 bg-cyan-700 rounded-xl">
              <b>Address: </b> Karachi, Pakistan
            </h2>
          </div>
        </section>

        {/* Right Section */}
        <section className="h-auto md:w-1/2 xs:w-4/5 w-full py-10 flex items-center justify-center text-white ">
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
                  className="rounded-md h-14 w-full bg-cyan-700 px-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className=" text-xl capitalize font-semibold">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(data) => setEmail(data.target.value)}
                  required
                  className="rounded-md h-14 w-full bg-cyan-700 px-2 "
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className=" text-xl capitalize font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={msg}
                  onChange={(data) => setMsg(data.target.value)}
                  required
                  className="rounded-md sm:h-32 h-24 w-full bg-cyan-700 px-2 py-1"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="text-sm mt-2 h-10 w-28 rounded-md text-red-800/50 border-red-800/50 font-bold border-2 uppercase flex gap-2 items-center justify-center overflow-hidden"
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                  type="submit"
                >
                  <h3>Send</h3>
                  <span className="h-5 w-5 flex items-center justify-center">
                    <MdSend
                      className={`h-full w-full ${btnHover && "scale-125 duration-100"} ${
                        btnClick && "translate-x-20 opacity-0 duration-300"
                      }`}
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div className="text-center pt-10 text-white">
        <p>{result}</p>
      </div>
    </main>
  );
};

export default Contact;
