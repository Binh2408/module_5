import { Form, Formik, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { findAllCategory } from "../service/categoryService";
import { addProduct } from "../service/productService";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";

function AddComponent() {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCategory = async () => {
      const data = await findAllCategory();
      setCategoryList(data);
    };
    fetchCategory();
  }, []);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    imageUrl: "",
    addresses: [],
    category: "",
    description: "",
  });

  const getToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleAdd = async (value) => {
    const status = value.quantity > 0 ? "Available" : "Out of Stock";
    const newProduct = {
      ...value,
      importDate: getToday(),
      status,
      category: JSON.parse(value.category),
    };
    await addProduct(newProduct);
    navigate("/list");
    toast.success("Add success");
    console.log(newProduct);
  };

  const handleValidate = Yup.object({
    name: Yup.string().required("Please input (Name)"),
    price: Yup.number()
      .min(50000, "Please input at least 50.000đ")
    //   .typeError("Must be a number")
      .required("Please input (Price) "),
    addresses: Yup.array()
      .min(1, "Please select at least one")
      .required("Please choose (Address)"),
    quantity: Yup.number()
      .min(5, "Please input at least 5")
    //   x`.typeError("Must be a number")
      .required("Please input (Quantity)"),
    category: Yup.string().required("Plase select (Category) of Product"),
  });

  return (
    <Container className="mt-4">
      <h2>Add Product</h2>
      <Formik
        initialValues={product}
        onSubmit={handleAdd}
        validationSchema={handleValidate}
      >
        <Form>
          <div className="mb-3">
            <label className="form-label">Enter name:</label>
            <Field name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div>
            <label className="form-label">Enter price:</label>
            <Field type="number" name="price" className="form-control" />
            <ErrorMessage
              name="price"
              component="div"
              className="text-danger"
            />
          </div>
          <div>
            <label className="form-label">Enter quantity:</label>
            <Field type="number" name="quantity" className="form-control" />
            <ErrorMessage
              name="quantity"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL:</label>
            <Field type="text" name="imageUrl" className="form-control" />
            <ErrorMessage
              name="imageUrl"
              className="text-danger"
              component="div"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Address Buy:</label>
            <div className="form-check">
              <Field
                type="checkbox"
                name="addresses"
                value="Đà Nẵng"
                className="form-check-input"
              />
              <label className="form-check-label">Đà Nẵng</label>
            </div>
            <div className="form-check">
              <Field
                type="checkbox"
                name="addresses"
                value="Huế"
                className="form-check-input"
              />
              <label className="form-check-label">Huế</label>
            </div>
            <div className="form-check">
              <Field
                type="checkbox"
                name="addresses"
                value="Quảng Bình"
                className="form-check-input"
              />
              <label className="form-check-label">Quảng Bình</label>
            </div>
            <ErrorMessage
              name="addresses"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category:</label>
            <Field as="select" name="category" className="form-select">
              <option value="">-- Select Category --</option>
              {categoryList.map((cls, index) => (
                <option key={index} value={JSON.stringify(cls)}>
                  {cls.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="category"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Description:</label>
            <Field type="text" name="description" className="form-control" />
            <ErrorMessage
              name="description"
              component="div"
              className="text-danger"
            />
          </div>
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate("/list")}
            className="ms-2"
          >
            Back to List
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default AddComponent;
