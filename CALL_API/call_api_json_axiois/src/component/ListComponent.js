import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

import { findAllProduct, search } from "../service/productService";
import DeleteComponent from "./DeleteComponent";
import { findAllCategory } from "../service/categoryService";
import SearchComponent from "./SearchComponent";

function ListComponent() {
  const [productList, setProductList] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState({
    id: 0,
    name: "",
    price: "",
    quantity: "",
    imageUrl: "",
    addresses: [],
    category: "",
    description: "",
  });

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const handleShowDeleteModal = (deleteProduct) => {
    setIsShowModal((pre) => !pre);
    setDeleteProduct(deleteProduct);
  };

  const handleCloseDeleteModal = () => {
    setIsShowModal((pre) => !pre);
  };
  const [searchName, setSearchName] = useState("");
  const [selectedCate, setSelectedCate] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [size, setSize] = useState(5);
  useEffect(() => {
    const fetchData = async () => {
      const { data, totalRecord } = await search(
        searchName,
        selectedCate,
        page,
        size,
        fromDate,
        toDate
      );
      setProductList(data);
      setTotalPage(() => Math.ceil(totalRecord / size));
      setProductList(data);
    };
    fetchData();
    // console.log(selectedCate);
    // console.log(searchName);
  }, [isShowModal, searchName, selectedCate, page, size, fromDate, toDate]);

  //phải có để mỗi lần search nó load lại page
  useEffect(() => {
    setPage(1);
  }, [searchName, selectedCate]);

  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const data = await findAllCategory();
      setCategoryList(data);
    };
    fetchCategory();
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
  const handlePre = () => {
    if (page > 1) {
      setPage((pre) => pre - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPage) {
      setPage((pre) => pre + 1);
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-3">Product List</h2>
      <SearchComponent
        searchName={searchName}
        setSearchName={setSearchName}
        categoryList={categoryList}
        selectedCate={selectedCate}
        setSelectedCate={setSelectedCate}
        fromDate={fromDate}
        setFromDate={setFromDate}
        toDate={toDate}
        setToDate={setToDate}
      />
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
                {/* <td>{product.status === "Available" ? "Còn hàng":"Hết hàng"}</td> */}
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
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleShowDeleteModal(product)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    as={Link}
                    to={`/edit/${product.id}`}
                  >
                    Edit
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
      <Pagination className="justify-content-center mt-4">
        <Pagination.Prev disabled={page === 1} onClick={handlePre}>
          Previous
        </Pagination.Prev>
        {[...Array(totalPage)].map((e, i) => (
          <Pagination.Item
            key={i}
            active={i + 1 === page}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next disabled={page === totalPage} onClick={handleNext}>
          Next
        </Pagination.Next>
      </Pagination>

      <DeleteComponent
        isShowModal={isShowModal}
        deleteProduct={deleteProduct}
        handleCloseDeleteModal={handleCloseDeleteModal}
      />
    </Container>
  );
}

export default ListComponent;
