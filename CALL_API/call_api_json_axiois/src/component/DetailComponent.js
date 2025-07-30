import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findProductById } from "../service/productService";
import {
  Alert,
  Card,
  Col,
  Container,
  Row,
  Button,
  Form,
} from "react-bootstrap";

function DetaiComponent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await findProductById(id);
      setProduct(data);
    };
    fetchData();
  }, [id]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (!product) {
    return (
      <Alert variant="danger" className="mt-3 text-center">
        Product not found
      </Alert>
    );
  }

  return (
    <Container className="mt-4">
      <Card className="shadow-lg">
        <Card.Body>
          <Card.Title className="text-center mb-4">📦 Product Detail</Card.Title>

          <Form>
            <div className="text-center mb-3">
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>

            <Row className="mb-3">
              <Col>
                <Form.Label>ID</Form.Label>
                <Form.Control value={product.id} readOnly />
              </Col>
              <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control value={product.name} readOnly />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Label>Price</Form.Label>
                <Form.Control value={formatCurrency(product.price)} readOnly />
              </Col>
              <Col>
                <Form.Label>Quantity</Form.Label>
                <Form.Control value={product.quantity} readOnly />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Label>Import Date</Form.Label>
                <Form.Control value={formatDate(product.importDate)} readOnly />
              </Col>
              <Col>
                <Form.Label>Status</Form.Label>
                <Form.Control
                  value={
                    product.status
                  }
                  readOnly
                />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Address Buy</Form.Label>
              <Form.Control
                value={product.addresses?.join(", ") || ""}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                value={product.category?.name || ""}
                readOnly
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={product.description || ""}
                rows={2}
                readOnly
              />
            </Form.Group>

            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={() => navigate("/list")}>
                ← Back
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default DetaiComponent;
