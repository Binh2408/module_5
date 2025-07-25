import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findById,updateById } from "../service/studentService";
import { Form, Button, Container } from "react-bootstrap";

function EditComponent() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [editStudent,setEditStudent] = useState({
        id:0,
        name:"",
        subject: [],
        classCG:{
            id:0,
            name:""
        }
    });

    useEffect(() => {
        const student = findById(id);
        if (student) {
            setEditStudent(student);
        }
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateById(editStudent);
        navigate("/list");
    }

    return <>
        <Container className="mt-4">
      <h3>Edit Student</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={editStudent.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>Subjects (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            value={editStudent.subject.join(", ")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formClass">
          <Form.Label>Class Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={editStudent.classCG.name}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
    </>
}

export default EditComponent ;