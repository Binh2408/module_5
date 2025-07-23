import { Component } from "react";
import { getAll, add } from "../service/job";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: "",
      },
    };
  }
  componentDidMount() {
    this.setState({
      list: getAll(),
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prev) => ({
      item: {
        ...prev.student,
        [name]: name === "id" ? Number(value) : value,
      },
    }));
  };

  handleAddItem = () => {
    add(this.state.item);
    this.setState({
      item: {
        name: "",
      },
    });
    if (this.props.setAddedFlag) {
      this.props.setAddedFlag();
    }
  };
  render() {
    return (
      <>
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.item.name}
          placeholder="Nhập công việc"
        />
        <button onClick={this.handleAddItem}>Save</button>
      </>
    );
  }
}

export default App;
