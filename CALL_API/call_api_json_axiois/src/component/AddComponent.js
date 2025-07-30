import { Form, Formik, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
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

  const [product] = useState({
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
    toast.success("Add success");
    navigate("/list");
  };

  const handleValidate = Yup.object({
    name: Yup.string().required("Please input name"),
    price: Yup.number().min(50000, "Min is 50.000đ").required("Price required"),
    quantity: Yup.number().min(5, "Min is 5").required("Quantity required"),
    addresses: Yup.array().min(1, "Select at least one"),
    category: Yup.string().required("Choose a category"),
  });

  return (
    <Container className="mt-4">
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title className="text-center mb-4">🛒 Add New Product</Card.Title>
          <Formik
            initialValues={product}
            onSubmit={handleAdd}
            validationSchema={handleValidate}
          >
            <Form>
              <Row className="mb-3">
                <Col>
                  <label className="form-label">Name</label>
                  <Field name="name" className="form-control" />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </Col>
                <Col>
                  <label className="form-label">Price</label>
                  <Field type="number" name="price" className="form-control" />
                  <ErrorMessage name="price" component="div" className="text-danger" />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <label className="form-label">Quantity</label>
                  <Field type="number" name="quantity" className="form-control" />
                  <ErrorMessage name="quantity" component="div" className="text-danger" />
                </Col>
                <Col>
                  <label className="form-label">Image URL</label>
                  <Field type="text" name="imageUrl" className="form-control" />
                  <ErrorMessage name="imageUrl" component="div" className="text-danger" />
                </Col>
              </Row>

              <div className="mb-3">
                <label className="form-label">Address Buy</label>
                <div className="form-check">
                  <Field type="checkbox" name="addresses" value="Đà Nẵng" className="form-check-input" />
                  <label className="form-check-label">Đà Nẵng</label>
                </div>
                <div className="form-check">
                  <Field type="checkbox" name="addresses" value="Huế" className="form-check-input" />
                  <label className="form-check-label">Huế</label>
                </div>
                <div className="form-check">
                  <Field type="checkbox" name="addresses" value="Quảng Bình" className="form-check-input" />
                  <label className="form-check-label">Quảng Bình</label>
                </div>
                <ErrorMessage name="addresses" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <Field as="select" name="category" className="form-select">
                  <option value="">-- Select Category --</option>
                  {categoryList.map((cls, index) => (
                    <option key={index} value={JSON.stringify(cls)}>
                      {cls.name}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="category" component="div" className="text-danger" />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <Field name="description" className="form-control" />
                <ErrorMessage name="description" component="div" className="text-danger" />
              </div>

              <div className="d-flex justify-content-end gap-2">
                <Button variant="primary" type="submit">Save</Button>
                <Button variant="secondary" onClick={() => navigate("/list")}>Back</Button>
              </div>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddComponent;
