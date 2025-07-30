import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListComponent from "./component/ListComponent";
import HeaderComponent from "./component/HeaderComponent";
import { ToastContainer } from "react-toastify";
import AddComponent from "./component/AddComponent";
import DetaiComponent from "./component/DetailComponent";
import EditComponent from "./component/EditComponent";

function App() {
  return (
    <>
    <HeaderComponent />
      <Routes>
        <Route path={"/list"} element={<ListComponent />} />
        <Route path={"/add"} element={<AddComponent />} />
        <Route path={"/detail/:id"} element={<DetaiComponent />} />
        <Route path={"/edit/:id"} element={<EditComponent />} />

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
