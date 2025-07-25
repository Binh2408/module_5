import "./App.css";
import ListComponent from "./component/ListComponent";
import AddComponent from "./component/AddComponent";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderComponent from "./component/HeaderComponent";
import DetailComponent from "./component/DetailComponent";
import EditComponent from "./component/EditComponent";
function App() {
  return (
    <>
    <HeaderComponent/>
      <Routes>
        <Route path={"/list"} element={<ListComponent />} />
        <Route path={"/add"} element={<AddComponent />} />
        <Route path={"/detail/:id"} element={<DetailComponent />} />
        <Route path={"/edit/:id"} element={<EditComponent />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
