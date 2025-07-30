import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { findAllProduct } from "../service/productService";

function ListComponent() {
  const [productList, setProductList] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await findAllProduct();
      setProductList(data);
    };
    fetchProduct();
  }, []);
  //Format giá tiền
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  //Format ngày tháng
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Product List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Image</th>
            {/* <th>Date Entry</th> */}
            <th>Status</th>
            {/* <th>Address</th> */}
            <th>Category</th>
            {/* <th>Description</th> */}
            <th>Detail</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {productList.length > 0 ? (
            productList.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{formatCurrency(product.price)}</td>
                <td>{product.quantity}</td>
                <td>
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                {/* <td>{formatDate(product.importDate)}</td> */}
                <td>{product.status}</td>
                {/* <td>{product.addresses.join(", ")}</td> */}
                <td>{product.category?.name}</td>
                {/* <td>{product.description}</td> */}
                <td>
                    <Button
                        variant="info"
                        size="sm"
                        as={Link}
                        to={`/detail/${product.id}`}
                    >
                        Detail
                    </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center text-danger">
                Not found products
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListComponent;
