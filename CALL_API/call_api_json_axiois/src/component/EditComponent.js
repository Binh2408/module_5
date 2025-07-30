import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById, updateProductById } from "../service/productService";
import { findAllCategory } from "../service/categoryService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Button, Card, Row, Col, Form as BootstrapForm } from "react-bootstrap";
import * as Yup from "yup";
import { toast } from "react-toastify";

function EditComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categoryList, setCategoryList] = useState([]);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await findProductById(id);
      if (product) {
        setInitialValues({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          imageUrl: product.imageUrl,
          importDate: product.importDate,
          addresses: product.addresses || [],
          category: JSON.stringify(product.category),
          description: product.description,
        });
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchCategory = async () => {
      const list = await findAllCategory();
      setCategoryList(list);
    };
    fetchCategory();
  }, []);

  const handleUpdate = async (values) => {
    try {
      const updatedProduct = {
        ...values,
        category: JSON.parse(values.category),
        status: values.quantity > 0 ? "Available" : "Out of Stock",
      };
      await updateProductById(updatedProduct.id, updatedProduct);
      toast.success("Updated Success");
      navigate("/list");
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please input (Name)"),
    price: Yup.number().min(50000, "Minimum is 50.000đ").required("Please input (Price)"),
    addresses: Yup.array().min(1, "Select at least one").required("Address is required"),
    quantity: Yup.number().min(5, "Minimum is 5").required("Please input (Quantity)"),
    category: Yup.string().required("Please select a category"),
    importDate: Yup.date()
      .required("Import date is required")
      .max(new Date(), "Import date can't be in the future"),
  });

  if (!initialValues) return <div className="text-center mt-5">Loading...</div>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header as="h4" className="text-center">Edit Product</Card.Header>
        <Card.Body>
          <div className="text-center mb-4">
            {initialValues.imageUrl && (
              <img
                src={initialValues.imageUrl}
                alt={initialValues.name}
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
            )}
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={handleUpdate}
            validationSchema={validationSchema}
            enableReinitialize
          >
            <Form>
              <Row>
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Product Name</BootstrapForm.Label>
                    <Field name="name" className="form-control" />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Price</BootstrapForm.Label>
                    <Field type="number" name="price" className="form-control" />
                    <ErrorMessage name="price" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Quantity</BootstrapForm.Label>
                    <Field type="number" name="quantity" className="form-control" />
                    <ErrorMessage name="quantity" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Image URL</BootstrapForm.Label>
                    <Field type="text" name="imageUrl" className="form-control" />
                    <ErrorMessage name="imageUrl" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Import Date</BootstrapForm.Label>
                    <Field
                      type="date"
                      name="importDate"
                      className="form-control"
                      max={new Date().toISOString().split("T")[0]}
                    />
                    <ErrorMessage name="importDate" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group className="mb-3">
                    <BootstrapForm.Label>Category</BootstrapForm.Label>
                    <Field as="select" name="category" className="form-select">
                      <option value="">-- Select Category --</option>
                      {categoryList.map((cate, index) => (
                        <option key={index} value={JSON.stringify(cate)}>
                          {cate.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name="category" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                </Col>
              </Row>

              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Label>Address(es)</BootstrapForm.Label>
                <div className="ms-2">
                  {["Đà Nẵng", "Huế", "Quảng Bình"].map((address, index) => (
                    <div key={index} className="form-check">
                      <Field
                        type="checkbox"
                        name="addresses"
                        value={address}
                        className="form-check-input"
                        id={`address-${index}`}
                      />
                      <label htmlFor={`address-${index}`} className="form-check-label">
                        {address}
                      </label>
                    </div>
                  ))}
                  <ErrorMessage name="addresses" component="div" className="text-danger" />
                </div>
              </BootstrapForm.Group>

              <div className="text-end">
                <Button type="submit" variant="success">Save Changes</Button>
                <Button variant="secondary" className="ms-2" onClick={() => navigate("/list")}>
                  Back to List
                </Button>
              </div>
            </Form>
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default EditComponent;
