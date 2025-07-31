import axios from "axios";
export async function findAllCategory() {
  try {
    // const response = await axios.get("http://localhost:8080/categories");
    const response = await axios.get("https://json-server-api-test-2.onrender.com/categories");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
