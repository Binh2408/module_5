import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { add } from "../service/studentService";
import { findAll } from "../service/classService";
import * as Yup from "yup";
import { Container, Button } from "react-bootstrap";

function AddComponent() {
  const navigate = useNavigate();
  const [classList, setClassList] = useState([]);
  useEffect(() => {
    // setClassList([...findAll()]);
    const fetchDataClasses = async () => {
      const list = await findAll();
      setClassList(list);
    };
    fetchDataClasses();
  }, []);

  const [student, setStudent] = useState({
    // id: "",
    name: "",
    subject: [],
    classCG: "",
  });

  const handleAdd = async (value) => {
    value = {
      ...value,
      classCG: JSON.parse(value.classCG),
    };
    await add(value);
    navigate("/list");
    toast.success("Add success!!!");
  };

  const handleValidate = Yup.object({
    name: Yup.string()
      .required("Please input name")
      .matches(/^[A-Z]\w+$/, "Name must start with a capital letter"),
    subject: Yup.array()
      .min(1, "Please select at least one subject")
      .required(),
    classCG: Yup.string().required("Please select a class"),
  });

  return (
    <Container className="mt-4">
      <h2>Add Student</h2>
      <Formik
        initialValues={student}
        onSubmit={handleAdd}
        validationSchema={handleValidate}
      >
        <Form>
          <div className="mb-3">
            <label className="form-label">Enter name:</label>
            <Field name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label className="form-label">Subjects:</label>
            <div className="form-check">
              <Field
                type="checkbox"
                name="subject"
                value="JavaScript"
                className="form-check-input"
              />
              <label className="form-check-label">JavaScript</label>
            </div>
            <div className="form-check">
              <Field
                type="checkbox"
                name="subject"
                value="Java"
                className="form-check-input"
              />
              <label className="form-check-label">Java</label>
            </div>
            <div className="form-check">
              <Field
                type="checkbox"
                name="subject"
                value="React"
                className="form-check-input"
              />
              <label className="form-check-label">React</label>
            </div>
            <ErrorMessage
              name="subject"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Class:</label>
            <Field as="select" name="classCG" className="form-select">
              <option value="">-- Select class --</option>
              {classList.map((cls, index) => (
                <option key={index} value={JSON.stringify(cls)}>
                  {cls.name}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="classCG"
              component="div"
              className="text-danger"
            />
          </div>

          <Button type="submit" variant="primary">
            Save
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default AddComponent;
