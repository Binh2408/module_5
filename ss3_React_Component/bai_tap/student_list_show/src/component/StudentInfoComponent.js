import { Component } from "react";
import { getAll } from "../service/student";

class StudentInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount(){
        this.setState({
            students: getAll(),
        })
    }

    render () {
        return(
            <>
                <table border={1}>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    {this.state.students.map((student,index)=> (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </table>
            </>
        )
    }

}

export default StudentInfoComponent ;