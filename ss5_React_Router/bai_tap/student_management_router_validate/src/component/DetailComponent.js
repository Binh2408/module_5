import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findById } from "../service/studentService";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function DetailComponent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const result = findById(+id);
    setStudent(result);
    console.log("ID param from URL:", id);
    console.log("Find result:", result);
  }, [id]);

  if (!student) {
    return <Alert variant="danger" className="mt-3 text-center">Student not found</Alert>;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header as="h5" className="bg-primary text-white">Student Details</Card.Header>
            <Card.Body>
              <Card.Text><strong>ID:</strong> {student.id}</Card.Text>
              <Card.Text><strong>Name:</strong> {student.name}</Card.Text>
              <Card.Text><strong>Subjects:</strong> {student.subject.join(", ")}</Card.Text>
              <Card.Text><strong>Class:</strong> {student.classCG?.name}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailComponent;
