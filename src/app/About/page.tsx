
import Link from 'next/link';
import React from 'react';

const About = () => (
  <main
    className="h-auto w-full bg-no-repeat bg-cover bg-center flex items-center justify-center text-white md:flex-row flex-col"
    style={{
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/backpic1.jpg)',
    }}
  >
    <section className="md:w-1/2 w-[90%] sm:px-8 px-2 py-5 flex flex-col gap-5 md:mt-0 mt-16">
      <h1 className="txt drop-shadow-txt xs:text-5xl text-4xl uppercase font-bold">
        The SM-GARAGE Legacy
      </h1>
      <p className="sm:text-xl">
        At SM-GARAGE, we are more than just a place to buy bikes – we are a
        community of passionate riders and enthusiasts. From powerful sportbikes
        to sleek cruisers, we offer a curated collection of top-tier motorcycles
        for every rider. Our commitment goes beyond sales – we aim to provide an
        unforgettable experience where quality, performance, and customer service
        meet.
      </p>
      <button className="sm:w-28 w-24 px-2 py-2 sm:text-sm text-xs bg-red-800 rounded-md font-semibold capitalize">
        <Link href="/Contact">Get In Touch</Link>
      </button>
    </section>
    <section className="md:h-screen h-auto md:w-1/2 xxs:w-[90%] w-full py-5 flex md:items-center items-start justify-center">
      <div className="md:h-[45%] sm:h-[30vh] h-[20vh] w-[70%] shadow-car bg-no-repeat bg-center bg-cover bg-[url('/bikeanimation.jpg')] rounded-2xl"></div>
    </section>
  </main>
);

export default About;







