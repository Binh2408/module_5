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

export async function findProductById(id) {
    try {
        const response = await axios.get("http://localhost:8080/products/"+id);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}

export async function deleteProductById(id) {
    try {
        const response = await axios.delete("http://localhost:8080/products/"+id);
    } catch (error) {
        console.log(error);   
    }
}

export async function updateProductById(id, product) {
    try {
        const response = await axios.put("http://localhost:8080/products/"+id,product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function search(searchName,searchCate,page,size) {
    let url =  `http://localhost:8080/products?name_like=${searchName}&category.id=${searchCate}&_page=${page}&_limit=${size}`;
    if (searchCate === "") {
        url= `http://localhost:8080/products?name_like=${searchName}&_page=${page}&_limit=${size}`
    }

    try {
        const response = await axios.get(url);
        const data = response.data;
        const totalRecord = response.headers['x-total-count'];
        return {data,totalRecord};
    } catch (error) {
        console.log(error);
        
    }
}



