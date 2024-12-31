// // app/inventory/[manufacture]/[bikes]/params.ts

import { hayabusaBikeData } from "@/app/Inventory/bikeData"; // Corrected import path
import { kawasakiBikeData } from "@/app/Inventory/bikeData" // Corrected import path
import { royalEnfieldBikeData } from "@/app/Inventory/bikeData" // Corrected import path



interface Params {
    manufacture: string;
    bikes: string;
  }
  
//   export async function generateStaticParams(): Promise<{ params: Params }[]> {
//     const paths: { params: Params }[] = [];
  
//     hayabusaBikeData.forEach(bike => {
//       paths.push({
//         params: { manufacture: 'hayabusa', bikes: bike.route },
//       });
//     });
  
//     kawasakiBikeData.forEach(bike => {
//       paths.push({
//         params: { manufacture: 'kawasaki', bikes: bike.route },
//       });
//     });
  
//     royalEnfieldBikeData.forEach(bike => {
//       paths.push({
//         params: { manufacture: 'royal-enfield', bikes: bike.route },
//       });
//     });
  
//     return paths; // Returning static paths
//   }







export async function generateStaticParams(): Promise<{ params: Params }[]> {
  const paths: { params: Params }[] = [];

  hayabusaBikeData.forEach(bike => {
    paths.push({
      params: { manufacture: "hayabusa", bikes: bike.route },
    });
  });

  kawasakiBikeData.forEach(bike => {
    paths.push({
      params: { manufacture: "kawasaki", bikes: bike.route },
    });
  });

  royalEnfieldBikeData.forEach(bike => {
    paths.push({
      params: { manufacture: "royal-enfield", bikes: bike.route },
    });
  });

  return paths; // Ensure the returned value is an array of { params: Params }
}
