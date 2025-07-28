import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { findById, updateById } from "../service/studentService";
import { findAll } from "../service/classService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Button } from "react-bootstrap";
import * as Yup from "yup";
import { toast } from "react-toastify";

function EditComponent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [classList, setClassList] = useState([]);
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const student = await findById(id);
      if (student) {
        setInitialValues({
          id: student.id,
          name: student.name,
          subject: student.subject,
          classCG: JSON.stringify(student.classCG),
        });
      }
    };
    fetchStudent();
  }, [id]);

  useEffect(() => {
    // setClassList([...findAll()]);
    const fetchDataClasses = async () => {
      const list = await findAll();
      setClassList(list);
    };
    fetchDataClasses();
  }, []);

  const handleUpdate = async (values) => {
    try {
      const updatedStudent = {
        ...values,
        classCG: JSON.parse(values.classCG),
      };
      await updateById(updatedStudent.id, updatedStudent);
      toast.success("Update success!");
      navigate("/list");
    } catch (error) {
      toast.error("Updated failed");
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Please input name")
      .matches(/^[A-Z]\w+$/, "Name must start with a capital letter"),
    subject: Yup.array()
      .min(1, "Please select at least one subject")
      .required("Please select at least one subject"),
    classCG: Yup.string().required("Please select a class"),
  });

  if (!initialValues) return <div>Loading...</div>;

  return (
    <Container className="mt-4">
      <h2>Edit Student</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleUpdate}
        validationSchema={validationSchema}
        //giúp formik cập nhật initialValues sau khi useEffect fetch dữ liệu xong
        enableReinitialize
      >
        <Form>
          <div className="mb-3">
            <label className="form-label">Enter name:</label>
            <Field name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>

          <div className="mb-3">
            <label className="form-label">Subjects:</label>
            {["JavaScript", "Java", "React"].map((subj, index) => (
              <div key={index} className="form-check">
                <Field
                  type="checkbox"
                  name="subject"
                  value={subj}
                  className="form-check-input"
                  id={`subject-${subj}`}
                />
                <label htmlFor={`subject-${subj}`} className="form-check-label">
                  {subj}
                </label>
              </div>
            ))}
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
            Save Changes
          </Button>
        </Form>
      </Formik>
    </Container>
  );
}

export default EditComponent;
