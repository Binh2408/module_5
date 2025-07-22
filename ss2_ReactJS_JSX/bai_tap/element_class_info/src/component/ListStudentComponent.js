import { students } from "../service/Student";

function ListStudentComponent() {
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.company}</td>
              <td>{student.contact}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListStudentComponent;
