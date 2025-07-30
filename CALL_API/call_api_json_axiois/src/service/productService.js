import axios from "axios";

export async function findAllProduct() {
    try {
        const response = await axios.get("http://localhost:8080/products");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function addProduct(product) {
    try {
        const response = await axios.post("http://localhost:8080/products",product);
    } catch (error) {
        console.log(error);
        
    }
}