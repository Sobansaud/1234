
//   export const harleyDavidsonBikeData: BikeDataType[] = [
//     {
//       name: "Harley Davidson Street Glide",
//       brand: "harley-davidson",
//       price: "$21,999",
//       features: "G",
//       route: "harley-street-glide",
//       pictures: [
//         "bg-[url('/harley/street-glide/4.webp)]",
//         "bg-[url('/harley/street-glide/1.webp')]",
//         "bg-[url('/harley/street-glide/2.webp')]",
//         "bg-[url('/harley/street-glide/3.webp')]",
//         "bg-[url('/harley/street-glide/5.webp')]",
//       ],
//     },
//     {
//       name: "Harley Davidson Iron 883",
//       brand: "harley-davidson",
//       price: "$8,999",
//       features: "E",
//       route: "harley-iron-883",
//       pictures: [
//         "bg-[url('/harley/iron-883/3.webp')]",
//         "bg-[url('/harley/iron-883/2.webp')]",
//         "bg-[url('/harley/iron-883/1.webp')]",
//         "bg-[url('/harley/iron-883/4.webp')]",
//         "bg-[url('/harley/iron-883/5.webp')]",
//       ],
//     },
//     {
//       name: "Harley Davidson Road King",
//       brand: "harley-davidson",
//       price: "$22,999",
//       features: "A",
//       route: "harley-road-king",
//       pictures: [
//         "bg-[url('/harley/road-king/5.webp')]",
//         "bg-[url('/harley/road-king/1.webp')]",
//         "bg-[url('/harley/road-king/2.webp')]",
//         "bg-[url('/harley/road-king/3.webp')]",
//         "bg-[url('/harley/road-king/4.webp')]",
//       ],
//     },
//     {
//       name: "Harley Davidson Fat Boy",
//       brand: "harley-davidson",
//       price: "$19,999",
//       features: "C",
//       route: "harley-fat-boy",
//       pictures: [
//         "bg-[url('/harley/fat-boy/5.webp')]",
//         "bg-[url('/harley/fat-boy/1.webp')]",
//         "bg-[url('/harley/fat-boy/2.webp')]",
//         "bg-[url('/harley/fat-boy/3.webp')]",
//         "bg-[url('/harley/fat-boy/4.webp')]",
//       ],
//     },
//     {
//       name: "Harley Davidson Night Rod Special",
//       brand: "harley-davidson",
//       price: "$16,499",
//       features: "F",
//       route: "harley-night-rod-special",
//       pictures: [
//         "bg-[url('/harley/night-rod-special/3.webp')]",
//         "bg-[url('/harley/night-rod-special/1.webp')]",
//         "bg-[url('/harley/night-rod-special/2.webp')]",
//         "bg-[url('/harley/night-rod-special/4.webp')]",
//         "bg-[url('/harley/night-rod-special/5.webp')]",
//       ],
//     },
//     {
//       name: "Harley Davidson Sportster S",
//       brand: "harley-davidson",
//       price: "$15,000",
//       features: "H",
//       route: "harley-sportster-s",
//       pictures: [
//         "bg-[url('/harley/sportster-s/3.webp')]",
//         "bg-[url('/harley/sportster-s/1.webp')]",
//         "bg-[url('/harley/sportster-s/2.webp')]",
//         "bg-[url('/harley/sportster-s/4.webp')]",
//         "bg-[url('/harley/sportster-s/5.webp')]",
//       ],
//     },
//     {
//       name: "Harley Davidson Roadster",
//       brand: "harley-davidson",
//       price: "$11,299",
//       features: "B",
//       route: "harley-roadster",
//       pictures: [
//         "bg-[url('/harley/roadster/5.webp')]",
//         "bg-[url('/harley/roadster/1.webp')]",
//         "bg-[url('/harley/roadster/2.webp')]",
//         "bg-[url('/harley/roadster/3.webp')]",
//         "bg-[url('/harley/roadster/4.webp')]",
//       ],
//     },
//     {
//       name: "Harley Davidson Heritage Classic",
//       brand: "harley-davidson",
//       price: "$21,999",
//       features: "I",
//       route: "harley-heritage-classic",
//       pictures: [
//         "bg-[url('/harley/heritage-classic/4.webp')]",
//         "bg-[url('/harley/heritage-classic/1.webp')]",
//         "bg-[url('/harley/heritage-classic/2.webp')]",
//         "bg-[url('/harley/heritage-classic/3.webp')]",
//         "bg-[url('/harley/heritage-classic/5.webp')]",
//       ],
//     },
//     {
//       name: "Harley Davidson Pan America 1250",
//       brand: "harley-davidson",
//       price: "$17,700",
//       features: "J",
//       route: "harley-pan-america-1250",
//       pictures: [
//         "bg-[url('/harley/pan-america-1250/4.webp')]",
//         "bg-[url('/harley/pan-america-1250/1.webp')]",
//         "bg-[url('/harley/pan-america-1250/2.webp')]",
//         "bg-[url('/harley/pan-america-1250/3.webp')]",
//         "bg-[url('/harley/pan-america-1250/5.webp')]",
//       ],
//     },
//     {
//       name: "Harley Davidson Softail Slim",
//       brand: "harley-davidson",
//       price: "$14,999",
//       features: "D",
//       route: "harley-softail-slim",
//       pictures: [
//         "bg-[url('/harley/softail-slim/3.webp')]",
//         "bg-[url('/harley/softail-slim/1.webp')]",
//         "bg-[url('/harley/softail-slim/2.webp')]",
//         "bg-[url('/harley/softail-slim/4.webp')]",
//         "bg-[url('/harley/softail-slim/5.webp')]",
//       ],
//     },
//   ];


interface BikeDataType {
  name: string;
  price: string;
  brand: string;
  features: string;
  pictures: string[];
  route: string;
}
interface DescriptionType {
  feature: string;
  description: string;
}
interface BikeRatingType {
  features: string;
  rating: string;
}
interface ReportArrayType {
  text: string;
  percentage: number
}
interface ReportDataType {
  category: string;
  data:  ReportArrayType[]
}
export interface BikeFeatersType {
  img: string;
  name: string
}
 
  export const hayabusaBikeData: BikeDataType[] = [
    {
      name: "Suzuki Hayabusa 2023",
      brand: "hayabusa",
      price: "$18,599",
      features: "D",
      route: "hayabusa-2023",
      pictures: [
        "bg-[url('/hayabusa/2023/2.webp')]",
        "bg-[url('/hayabusa/2023/3.webp')]",
        "bg-[url('/hayabusa/2023/1.webp')]",
        "bg-[url('/hayabusa/2023/4.webp')]",
        "bg-[url('/hayabusa/2023/5.webp')]",
      ],
    },
    {
      name: "Suzuki Hayabusa 1300",
      brand: "hayabusa",
      price: "$16,999",
      features: "H",
      route: "hayabusa-1300",
      pictures: [
        "bg-[url('/hayabusa/1300/3.webp')]",
        "bg-[url('/hayabusa/1300/1.webp')]",
        "bg-[url('/hayabusa/1300/2.webp')]",
        "bg-[url('/hayabusa/1300/4.webp')]",
        "bg-[url('/hayabusa/1300/5.webp')]",
      ],
    },
    {
      name: "Suzuki Hayabusa Turbo",
      brand: "hayabusa",
      price: "$24,999",
      features: "A",
      route: "hayabusa-turbo",
      pictures: [
        "bg-[url('/hayabusa/turbo/3.webp')]",
        "bg-[url('/hayabusa/turbo/1.webp')]",
        "bg-[url('/hayabusa/turbo/2.webp')]",
        "bg-[url('/hayabusa/turbo/4.webp')]",
        "bg-[url('/hayabusa/turbo/5.webp')]",
      ],
    },
    {
      name: "Suzuki Hayabusa Limited Edition",
      brand: "hayabusa",
      price: "$26,500",
      features: "G",
      route: "hayabusa-limited-edition",
      pictures: [
        "bg-[url('/hayabusa/limited-edition/3.webp')]",
        "bg-[url('/hayabusa/limited-edition/1.webp')]",
        "bg-[url('/hayabusa/limited-edition/2.webp')]",
        "bg-[url('/hayabusa/limited-edition/4.webp')]",
        "bg-[url('/hayabusa/limited-edition/5.webp')]",
      ],
    },
    {
      name: "Suzuki Hayabusa 20th Anniversary",
      brand: "hayabusa",
      price: "$22,000",
      features: "F",
      route: "hayabusa-20th-anniversary",
      pictures: [
        "bg-[url('/hayabusa/20th-anniversary/3.webp')]",
        "bg-[url('/hayabusa/20th-anniversary/1.webp')]",
        "bg-[url('/hayabusa/20th-anniversary/2.webp')]",
        "bg-[url('/hayabusa/20th-anniversary/4.webp')]",
        "bg-[url('/hayabusa/20th-anniversary/5.webp')]",

      ],
    },
    {
      name: "Suzuki Hayabusa GSX1300R",
      brand: "hayabusa",
      price: "$17,999",
      features: "B",
      route: "hayabusa-gsx1300r",
      pictures: [
        "bg-[url('/hayabusa/gsx1300r/2.webp')]",
        "bg-[url('/hayabusa/gsx1300r/1.webp')]",
        "bg-[url('/hayabusa/gsx1300r/4.webp')]",
        "bg-[url('/hayabusa/gsx1300r/3.webp')]",
        "bg-[url('/hayabusa/gsx1300r/5.webp')]",

      ],
    },
    {
      name: "Suzuki Hayabusa Bikebon Edition",
      brand: "hayabusa",
      price: "$23,500",
      features: "J",
      route: "hayabusa-Bikebon-edition",
      pictures: [
        "bg-[url('/hayabusa/carbon-edition/3.webp')]",
        "bg-[url('/hayabusa/carbon-edition/4.webp')]",
        "bg-[url('/hayabusa/carbon-edition/3.webp')]",
        "bg-[url('/hayabusa/carbon-edition/1.webp')]",
        "bg-[url('/hayabusa/carbon-edition/2.webp')]",
      ],
    },
    {
      name: "Suzuki Hayabusa SE",
      brand: "hayabusa",
      price: "$20,499",
      features: "E",
      route: "hayabusa-se",
      pictures: [
        "bg-[url('/hayabusa/se/3.webp')]",
        "bg-[url('/hayabusa/se/1.webp')]",
        "bg-[url('/hayabusa/se/2.webp')]",
      ],
    },
    {
      name: "Suzuki Hayabusa 2nd Gen",
      brand: "hayabusa",
      price: "$19,000",
      features: "C",
      route: "hayabusa-2nd-gen",
      pictures: [
        "bg-[url('/hayabusa/2nd-gen/3.webp')]",
        "bg-[url('/hayabusa/2nd-gen/1.webp')]",
        "bg-[url('/hayabusa/2nd-gen/2.webp')]",
        "bg-[url('/hayabusa/2nd-gen/4.webp')]",
        "bg-[url('/hayabusa/2nd-gen/5.webp')]",
      ],
    },
    {
      name: "Suzuki Hayabusa Black Edition",
      brand: "hayabusa",
      price: "$21,000",
      features: "I",
      route: "hayabusa-black-edition",
      pictures: [
        "bg-[url('/hayabusa/black-edition/3.webp')]",
        "bg-[url('/hayabusa/black-edition/1.webp')]",
        "bg-[url('/hayabusa/black-edition/2.webp')]",
        "bg-[url('/hayabusa/black-edition/4.webp')]",
        "bg-[url('/hayabusa/black-edition/5.webp')]",
      ],
    },
  ];
  
  

  export const kawasakiBikeData: BikeDataType[] = [
    {
      name: "Kawasaki Ninja H2",
      price: "$29,000",
      features: "H",
      brand: "kawasaki",
      route: "kawasaki-ninja-h2",
      pictures: [
        "bg-[url('/kawasaki/ninja-h2/3.webp')]",
        "bg-[url('/kawasaki/ninja-h2/4.webp')]",
        "bg-[url('/kawasaki/ninja-h2/5.webp')]",
        "bg-[url('/kawasaki/ninja-h2/1.webp')]",
        "bg-[url('/kawasaki/ninja-h2/2.webp')]",
      ],
    },
    {
      name: "Kawasaki ZX-10R",
      price: "$16,999",
      features: "D",
      brand: "kawasaki",
      route: "kawasaki-zx-10r",
      pictures: [
        "bg-[url('/kawasaki/zx-10r/3.webp')]",
        "bg-[url('/kawasaki/zx-10r/5.webp')]",
        "bg-[url('/kawasaki/zx-10r/4.webp')]",
        "bg-[url('/kawasaki/zx-10r/1.webp')]",
        "bg-[url('/kawasaki/zx-10r/2.webp')]",
      ],
    },
    {
      name: "Kawasaki Z900",
      price: "$8,399",
      features: "F",
      brand: "kawasaki",
      route: "kawasaki-z900",
      pictures: [
        "bg-[url('/kawasaki/z900/3.webp')]",
        "bg-[url('/kawasaki/z900/4.webp')]",
        "bg-[url('/kawasaki/z900/1.webp')]",
        "bg-[url('/kawasaki/z900/2.webp')]",
        "bg-[url('/kawasaki/z900/5.webp')]",

      ],
    },
    {
      name: "Kawasaki Vulcan S",
      price: "$7,499",
      features: "A",
      brand: "kawasaki",
      route: "kawasaki-vulcan-s",
      pictures: [
        "bg-[url('/kawasaki/vulcan-s/3.webp')]",
        "bg-[url('/kawasaki/vulcan-s/2.webp')]",
        "bg-[url('/kawasaki/vulcan-s/1.webp')]",
        "bg-[url('/kawasaki/vulcan-s/4.webp')]",
        "bg-[url('/kawasaki/vulcan-s/5.webp')]",

      ],
    },
    {
      name: "Kawasaki Ninja 400",
      price: "$5,499",
      features: "G",
      brand: "kawasaki",
      route: "kawasaki-ninja-400",
      pictures: [
        "bg-[url('/kawasaki/ninja-400/4.webp')]",
        "bg-[url('/kawasaki/ninja-400/5.webp')]",
        "bg-[url('/kawasaki/ninja-400/3.webp')]",
        "bg-[url('/kawasaki/ninja-400/1.webp')]",
        "bg-[url('/kawasaki/ninja-400/2.webp')]",
      ],
    },
    {
      name: "Kawasaki Ninja ZX-6R",
      price: "$10,999",
      features: "J",
      brand: "kawasaki",
      route: "kawasaki-ninja-zx-6r",
      pictures: [
        "bg-[url('/kawasaki/ninja-zx-6r/4.webp')]",
        "bg-[url('/kawasaki/ninja-zx-6r/3.webp')]",
        "bg-[url('/kawasaki/ninja-zx-6r/5.webp')]",
        "bg-[url('/kawasaki/ninja-zx-6r/1.webp')]",
        "bg-[url('/kawasaki/ninja-zx-6r/2.webp')]",
      ],
    },
    {
      name: "Kawasaki KX450",
      price: "$9,299",
      features: "C",
      brand: "kawasaki",
      route: "kawasaki-kx450",
      pictures: [
        "bg-[url('/kawasaki/kx450/3.webp')]",
        "bg-[url('/kawasaki/kx450/4.webp')]",
        "bg-[url('/kawasaki/kx450/2.webp')]",
        "bg-[url('/kawasaki/kx450/1.webp')]",
        "bg-[url('/kawasaki/kx450/5.webp')]",

      ],
    },
    {
      name: "Kawasaki Versys 1000",
      price: "$13,699",
      features: "I",
      brand: "kawasaki",
      route: "kawasaki-versys-1000",
      pictures: [
        "bg-[url('/kawasaki/versys-1000/3.webp')]",
        "bg-[url('/kawasaki/versys-1000/4.webp')]",
        "bg-[url('/kawasaki/versys-1000/5.webp')]",
        "bg-[url('/kawasaki/versys-1000/1.webp')]",
        "bg-[url('/kawasaki/versys-1000/2.webp')]",
      ],
    },
    {
      name: "Kawasaki Ninja ZX-14R",
      price: "$15,199",
      features: "E",
      brand: "kawasaki",
      route: "kawasaki-ninja-zx-14r",
      pictures: [
        "bg-[url('/kawasaki/ninja-zx-14r/4.webp')]",
        "bg-[url('/kawasaki/ninja-zx-14r/1.webp')]",
        "bg-[url('/kawasaki/ninja-zx-14r/2.webp')]",
        "bg-[url('/kawasaki/ninja-zx-14r/3.webp')]",
        "bg-[url('/kawasaki/ninja-zx-14r/5.webp')]",
      ],
    },
    {
      name: "Kawasaki Z650",
      price: "$7,499",
      features: "B",
      brand: "kawasaki",
      route: "kawasaki-z650",
      pictures: [
        "bg-[url('/kawasaki/z650/3.webp')]",
        "bg-[url('/kawasaki/z650/4.webp')]",
        "bg-[url('/kawasaki/z650/5.webp')]",
        "bg-[url('/kawasaki/z650/1.webp')]",
        "bg-[url('/kawasaki/z650/2.webp')]",
      ],
    },
  ];
  

  export const royalEnfieldBikeData: BikeDataType[] = [
    {
      name: "Royal Enfield Classic 350",
      price: "$5,290",
      features: "B",
      brand: "royal-enfield",
      route: "royal-enfield-classic-350",
      pictures: [
        "bg-[url('/royal-enfield/classic-350/4.webp')]",
        "bg-[url('/royal-enfield/classic-350/3.webp')]",
        "bg-[url('/royal-enfield/classic-350/1.webp')]",
        "bg-[url('/royal-enfield/classic-350/2.webp')]",

      ],
    },
    {
      name: "Royal Enfield Interceptor 650",
      price: "$7,499",
      features: "D",
      brand: "royal-enfield",
      route: "royal-enfield-interceptor-650",
      pictures: [
        "bg-[url('/royal-enfield/interceptor-650/1.webp')]",
        "bg-[url('/royal-enfield/interceptor-650/2.webp')]",
        "bg-[url('/royal-enfield/interceptor-650/3.webp')]",
        "bg-[url('/royal-enfield/interceptor-650/4.webp')]",
      ],
    },
    {
      name: "Royal Enfield Meteor 350",
      price: "$4,399",
      features: "G",
      brand: "royal-enfield",
      route: "royal-enfield-meteor-350",
      pictures: [
        "bg-[url('/royal-enfield/meteor-350/4.webp')]",
        "bg-[url('/royal-enfield/meteor-350/3.webp')]",
        "bg-[url('/royal-enfield/meteor-350/1.webp')]",
        "bg-[url('/royal-enfield/meteor-350/2.webp')]",
      ],
    },
    {
      name: "Royal Enfield Continental GT 650",
      price: "$7,190",
      features: "A",
      brand: "royal-enfield",
      route: "royal-enfield-continental-gt-650",
      pictures: [
        "bg-[url('/royal-enfield/continental-gt-650/1.webp')]",
        "bg-[url('/royal-enfield/continental-gt-650/2.webp')]",
        "bg-[url('/royal-enfield/continental-gt-650/4.webp')]",
      ],
    },
    {
      name: "Royal Enfield Himalayan",
      price: "$5,090",
      features: "C",
      brand: "royal-enfield",
      route: "royal-enfield-himalayan",
      pictures: [
        
        "bg-[url('/royal-enfield/himalayan/1.webp')]",
        "bg-[url('/royal-enfield/himalayan/3.webp')]",
        "bg-[url('/royal-enfield/himalayan/4.webp')]",
        "bg-[url('/royal-enfield/himalayan/2.webp')]",

      ],
    },
    {
      name: "Royal Enfield Bullet 350",
      price: "$4,200",
      features: "I",
      brand: "royal-enfield",
      route: "royal-enfield-bullet-350",
      pictures: [
        "bg-[url('/royal-enfield/bullet-350/3.webp')]",
        "bg-[url('/royal-enfield/bullet-350/4.webp')]",
        "bg-[url('/royal-enfield/bullet-350/1.webp')]",
        "bg-[url('/royal-enfield/bullet-350/2.webp')]",
      ],
    },
    {
      name: "Royal Enfield Super Meteor 650",
      price: "$8,999",
      features: "E",
      brand: "royal-enfield",
      route: "royal-enfield-super-meteor-650",
      pictures: [
        "bg-[url('/royal-enfield/super-meteor-650/3.webp')]",
        "bg-[url('/royal-enfield/super-meteor-650/2.webp')]",
        "bg-[url('/royal-enfield/super-meteor-650/4.webp')]",
        "bg-[url('/royal-enfield/super-meteor-650/1.webp')]",
      ],
    },
    {
      name: "Royal Enfield Thunderbird X",
      price: "$4,799",
      features: "J",
      brand: "royal-enfield",
      route: "royal-enfield-thunderbird-x",
      pictures: [
        "bg-[url('/royal-enfield/thunderbird-x/4.webp')]",
        "bg-[url('/royal-enfield/thunderbird-x/3.webp')]",
        "bg-[url('/royal-enfield/thunderbird-x/1.webp')]",
        "bg-[url('/royal-enfield/thunderbird-x/2.webp')]",
      ],
    },
    {
      name: "Royal Enfield Classic 500",
      price: "$5,590",
      features: "F",
      brand: "royal-enfield",
      route: "royal-enfield-classic-500",
      pictures: [
        "bg-[url('/royal-enfield/classic-500/4.webp')]",
        "bg-[url('/royal-enfield/classic-500/3.webp')]",
        "bg-[url('/royal-enfield/classic-500/1.webp')]",
        "bg-[url('/royal-enfield/classic-500/2.webp')]",

      ],
    },
    {
      name: "Royal Enfield Bullet X500",
      price: "$5,200",
      features: "H",
      brand: "royal-enfield",
      route: "royal-enfield-bullet-x500",
      pictures: [
        "bg-[url('/royal-enfield/bullet-x500/2.webp')]",
        "bg-[url('/royal-enfield/bullet-x500/3.webp')]",
        "bg-[url('/royal-enfield/bullet-x500/4.webp')]",
        "bg-[url('/royal-enfield/bullet-x500/1.webp')]",

      ],
    },
  ];
export const BikeDescriptions = [
  {
    feature: "A",
    description:
      "The [Bike Name] delivers an unparalleled blend of performance and luxury. Engineered for those who demand excellence, this model boasts a sleek exterior and a finely-tuned engine that provides exceptional acceleration and handling. Inside, the cabin is meticulously designed, offering premium seating materials and advanced technology at your fingertips. With features like adaptive cruise control and a cutting-edge infotainment system, the [Bike Name] is perfect for those who want both comfort and control on every drive.",
  },
  {
    feature: "B",
    description:
      "Turn heads wherever you go with the stunning [Bike Name]. This Bike is the perfect combination of style and substance, featuring a dynamic design that's sure to make an impression. Under the hood, its powerful engine ensures every drive is a thrilling experience, while the advanced safety features keep you protected on the road. The interior is a haven of luxury, with plush seating and a high-tech dashboard that puts all essential controls within easy reach. The [Bike Name] is designed for those who refuse to compromise.",
  },
  {
    feature: "C",
    description:
      "Discover the next level of driving with the [Bike Name]. This vehicle is crafted to elevate your experience, whether you're commuting in the city or exploring winding country roads. With its refined design and cutting-edge technology, the [Bike Name] offers a smooth ride and seamless connectivity. The interior exudes luxury, featuring spacious seating and customizable lighting for a perfect ambiance. Combined with its advanced driver-assistance systems, the [Bike Name] ensures every journey is safe, efficient, and enjoyable.",
  },
  {
    feature: "D",
    description:
      "The [Bike Name] is where innovation meets performance. Powered by a robust engine and enhanced by superior handling, this Bike is built to deliver an exhilarating driving experience. Its aerodynamic design not only enhances speed but also improves fuel efficiency. Step inside the plush cabin and you'll be surrounded by top-of-the-line materials and intuitive controls, making every drive comfortable and convenient. With smart technology at your fingertips, the [Bike Name] is your perfect companion for both daily commutes and long adventures.",
  },
  {
    feature: "E",
    description:
      "Experience the ultimate in automotive engineering with the [Bike Name]. From the sleek, sporty exterior to the luxurious, tech-filled interior, this Bike is designed to impress. The powerful engine offers thrilling acceleration, while the advanced suspension ensures a smooth and controlled ride. Inside, the [Bike Name] is all about comfort and innovation, with a spacious cabin, ergonomic seating, and a state-of-the-art entertainment system. Whether you're on the highway or navigating through traffic, the [Bike Name] turns every drive into a first-class experience.",
  },
  {
    feature: "F",
    description:
      "Step into sophistication with the [Bike Name]. Built with meticulous attention to detail, this model combines a stylish exterior with exceptional performance. Its turbocharged engine delivers both power and efficiency, while the advanced safety features offer peace of mind at every turn. Inside, you'll find a refined interior, complete with leather seats, a premium sound system, and a panoramic sunroof. Whether you're heading to a business meeting or on a weekend getaway, the [Bike Name] ensures you arrive in style.",
  },
  {
    feature: "G",
    description:
      "The [Bike Name] is engineered for those who crave excitement and refinement in equal measure. Its precision handling and powerful engine deliver a dynamic driving experience, whether you're cruising along the coast or navigating city streets. Inside, the cabin is both spacious and luxurious, with features like customizable seating and ambient lighting that create a personalized driving environment. The [Bike Name] also includes the latest in safety and entertainment technology, making it the perfect choice for the modern driver.",
  },
  {
    feature: "H",
    description:
      "The [Bike Name] sets a new standard for luxury vehicles. This model is equipped with the latest in automotive technology, from its powerful engine to its intuitive infotainment system. The exterior design is sleek and modern, while the interior offers premium comfort with heated seats, a climate-controlled cabin, and a high-definition touchscreen interface. With safety features like lane departure warning and automatic emergency braking, the [Bike Name] gives you confidence on every drive. Experience the future of driving with the [Bike Name].",
  },
  {
    feature: "I",
    description:
      "Drive with confidence in the [Bike Name]. Designed for optimal performance and comfort, this Bike features a high-output engine that delivers impressive speed and agility. The bold, aerodynamic design enhances both style and efficiency, while the interior is packed with luxury amenities like leather upholstery, an advanced sound system, and a smart navigation display. With an array of driver-assistance features, the [Bike Name] ensures that you can handle any road with ease and precision.",
  },
  {
    feature: "J",
    description:
      "The [Bike Name] is more than just a Bike; it's a statement. This vehicle offers unparalleled performance thanks to its finely-tuned engine and cutting-edge engineering. The striking exterior design catches the eye, while the high-end interior provides comfort and sophistication for every passenger. With features like a touchscreen entertainment system, wireless charging, and surround-view cameras, the [Bike Name] delivers an elevated driving experience. Whether you're on a quick errand or a long road trip, the [Bike Name] makes every moment behind the wheel unforgettable.",
  },
];
export const descriptionFunc = (
  category: string,
  descriptionArr: DescriptionType[],
  BikeName: string,
) => {
  const displayVal:DescriptionType[] = descriptionArr.filter((val) => {
    if(val.feature === category)
      return val;
    });
  return displayVal[0].description.replaceAll("[Bike Name]", BikeName);  
};
export const BikeRatings: BikeRatingType[] = [
    { features: "A", rating: "[Bike Name] has been meticulously Bikeed for, exhibiting exceptional performance across the board. Every component has undergone rigorous inspection, ensuring a riding experience that is both smooth and safe. Perfect for riders who prioritize reliability and top-tier performance." },
    
    { features: "B", rating: "[Bike Name] showcases exceptional craftsmanship and attention to detail. From its flawless exterior to the engine's impeccable performance, this bike is a true testament to quality. Whether you're riding daily or taking it out for leisurely adventures, it delivers a refined touch of elegance." },
  
    { features: "C", rating: "[Bike Name] reflects a perfect balance of comfort and performance. With top-tier ratings across all categories, it provides a riding experience that is as enjoyable as it is reliable. Ideal for those who seek a harmonious blend of luxury and power." },
  
    { features: "D", rating: "[Bike Name] sets itself apart with its flawless condition and high-quality features. The inspection reveals no issues, offering peace of mind for both everyday commutes and special occasions. A trusted companion for discerning riders." },
  
    { features: "E", rating: "[Bike Name] is a truly exceptional machine, surpassing expectations in every department. The inspection highlights its outstanding build quality and remarkable performance. A perfect choice for those who appreciate the finer things in life, combining luxury with unparalleled reliability." },
  
    { features: "F", rating: "[Bike Name] is the epitome of excellence. Every detail has been meticulously engineered, with a flawless inspection report confirming its pristine condition. Ideal for those looking for a motorcycle that combines high-performance with superior craftsmanship." },
  
    { features: "G", rating: "[Bike Name] stands out as a class leader, offering an exceptional blend of power, comfort, and safety. With an inspection that confirms its superior condition, this bike is an ideal choice for riders who demand the very best in performance and reliability." },
  
    { features: "H", rating: "[Bike Name] impresses not only with its striking aesthetics but also with its mechanical perfection. The inspection report is flawless, indicating that it has been maintained to the highest standards. Perfect for riders who want a reliable and stylish ride that stands the test of time." },
  
    { features: "I", rating: "[Bike Name] scores impressively in all areas, ensuring a top-tier riding experience. With features in optimal condition, it delivers both luxury and performance, making it a standout option for those who appreciate superior craftsmanship and style." },
  
    { features: "J", rating: "[Bike Name] has been rigorously inspected and comes out with flying colors in every category. From its modern features to its rock-solid reliability, this bike is an excellent investment for those seeking durability, cutting-edge technology, and unmatched style." },
 
];
export const ratingFunc = (
  category: string, ratingArr: BikeRatingType[], BikeName: string
) => {
  const displayVal = ratingArr.filter((val) => {
    if(category === val.features)
      return val;
  });
  return displayVal[0].rating.replaceAll("[Bike Name]", BikeName);
}
export const BikeFeautersData: BikeFeatersType [] = [
    { img: "bg-[url('/bike-features/abs.svg')]", name: "ABS (Anti-lock Braking System)" },
  { img: "bg-[url('/bike-features/alloy-wheels.svg')]", name: "Alloy Wheels" },
  { img: "bg-[url('/bike-features/sport-mode.png')]", name: "Sport Mode" },
  { img: "bg-[url('/bike-features/navigation.svg')]", name: "Navigation System" },
  { img: "bg-[url('/bike-features/rear-camera.svg')]", name: "Rear Camera" },
  { img: "bg-[url('/bike-features/keyless.png')]", name: "Keyless Start" },
  { img: "bg-[url('/bike-features/handlebar-controls.png')]", name: "Handlebar Controls" },
  { img: "bg-[url('/bike-features/power-mirror.png')]", name: "Power Mirrors" },
  { img: "bg-[url('/bike-features/led-headlights.png')]", name: "LED Headlights" },
  { img: "bg-[url('/bike-features/blue.jpeg')]", name: "Bluetooth System" },
  { img: "bg-[url('/bike-features/cruise.jpeg')]", name: "Cruise Control" },
  { img: "bg-[url('/bike-features/tft.jpeg')]", name: "TFT Display" },
  { img: "bg-[url('/bike-features/heated.jpeg')]", name: "Heated Grips" },
];

 
export const shufflingFeatures = (features: BikeFeatersType[]) => {
  const savedData: BikeFeatersType[] = [...features];
  const returningArray: BikeFeatersType[] = [];
  for(let i = 0; i < 13; i++){
    const randomIndex: number = Math.floor(Math.random() * savedData.length);
    returningArray.push(savedData.splice(randomIndex, 1)[0])
  }
  return returningArray;
}
export const reportRates: ReportDataType[] = [

  {
    category: "A",
    data: [
      { text: "Engine Performance", percentage: 98 },
      { text: "Brakes (ABS)", percentage: 100 },
      { text: "Suspension", percentage: 95 },
      { text: "Tires & Rims", percentage: 97 },
      { text: "Lighting (LED Headlights)", percentage: 100 },
    ]
  },
  {
    category: "B",
    data: [
      { text: "Engine Performance", percentage: 96 },
      { text: "Brakes (ABS)", percentage: 99 },
      { text: "Suspension", percentage: 92 },
      { text: "Tires & Rims", percentage: 94 },
      { text: "Lighting (LED Headlights)", percentage: 98 },
    ]
  },
  {
    category: "C",
    data: [
      { text: "Engine Performance", percentage: 93 },
      { text: "Brakes (ABS)", percentage: 95 },
      { text: "Suspension", percentage: 98 },
      { text: "Tires & Rims", percentage: 96 },
      { text: "Lighting (LED Headlights)", percentage: 94 },
    ]
  },
  {
    category: "D",
    data: [
      { text: "Engine Performance", percentage: 91 },
      { text: "Brakes (ABS)", percentage: 94 },
      { text: "Suspension", percentage: 96 },
      { text: "Tires & Rims", percentage: 90 },
      { text: "Lighting (LED Headlights)", percentage: 92 },
    ]
  },
  {
    category: "E",
    data: [
      { text: "Engine Performance", percentage: 94 },
      { text: "Brakes (ABS)", percentage: 97 },
      { text: "Suspension", percentage: 95 },
      { text: "Tires & Rims", percentage: 96 },
      { text: "Lighting (LED Headlights)", percentage: 98 },
    ]
  },
  {
    category: "F",
    data: [
      { text: "Engine Performance", percentage: 92 },
      { text: "Brakes (ABS)", percentage: 96 },
      { text: "Suspension", percentage: 94 },
      { text: "Tires & Rims", percentage: 95 },
      { text: "Lighting (LED Headlights)", percentage: 97 },
    ]
  },
  {
    category: "G",
    data: [
      { text: "Engine Performance", percentage: 100 },
      { text: "Brakes (ABS)", percentage: 100 },
      { text: "Suspension", percentage: 100 },
      { text: "Tires & Rims", percentage: 100 },
      { text: "Lighting (LED Headlights)", percentage: 100 },
    ]
  },
  {
    category: "H",
    data: [
      { text: "Engine Performance", percentage: 94 },
      { text: "Brakes (ABS)", percentage: 97 },
      { text: "Suspension", percentage: 96 },
      { text: "Tires & Rims", percentage: 92 },
      { text: "Lighting (LED Headlights)", percentage: 95 },
    ]
  },
  {
    category: "I",
    data: [
      { text: "Engine Performance", percentage: 92 },
      { text: "Brakes (ABS)", percentage: 94 },
      { text: "Suspension", percentage: 96 },
      { text: "Tires & Rims", percentage: 93 },
      { text: "Lighting (LED Headlights)", percentage: 90 },
    ]
  },
  {
    category: "J",
    data: [
      { text: "Engine Performance", percentage: 98 },
      { text: "Brakes (ABS)", percentage: 99 },
      { text: "Suspension", percentage: 95 },
      { text: "Tires & Rims", percentage: 94 },
      { text: "Lighting (LED Headlights)", percentage: 98 },
    ]
  },
];
export const setReport = (category: string) => {
  const BikeReport = reportRates.filter((val) => {
    if(category === val.category){
      return val.data
    }
  })[0]
  return BikeReport;
}




























  
