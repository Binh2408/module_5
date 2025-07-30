import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListComponent from "./component/ListComponent";
import HeaderComponent from "./component/HeaderComponent";
import { ToastContainer } from "react-bootstrap";
import AddComponent from "./component/AddComponent";

function App() {
  return (
    <>
    <HeaderComponent />
      <Routes>
        <Route path={"/list"} element={<ListComponent />} />
        <Route path={"/add"} element={<AddComponent />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
