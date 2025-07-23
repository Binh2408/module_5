import { Component } from "react";
import { getAll } from "../service/job";
import App from "./App";
class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
      isAdded: false,
    };
  }
  componentDidMount() {
    this.setState({
      list: getAll(),
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isAdded === false && this.state.isAdded === true) {
      this.handleLoadItems();
    }
  }
  handleLoadItems = () => {
    this.setState({
      list: getAll(),
      isAdded: false,
    });
  };
  render() {
    return (
      <>
        <App setAddedFlag={() => this.setState({ isAdded: true })} />
        {this.state.list &&
          this.state.list.map((job, index) => (
            <ul key={index}>
              <li>{job.name}</li>
            </ul>
          ))}
      </>
    );
  }
}

export default ListComponent;
