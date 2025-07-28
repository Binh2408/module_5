import axios from "axios";

export let classList = [
  {
    id: 1,
    name: "C02",
  },
  {
    id: 2,
    name: "C03",
  },
  {
    id: 3,
    name: "C04",
  },
];

// export function findAll() {
// return ([...classList]);
// }

export async function findAll() {
  try {
    const response = await axios.get("http://localhost:8080/classCG");
    return response.data;
  } catch (error) {
    console.log("Error" + error);
  }
}
