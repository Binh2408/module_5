import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { cities } from "./service/City.js";
function App() {
  const thead = React.createElement(
    "thead",
    null,
    React.createElement("tr", null, [
      React.createElement("th", { key: "id" }, "ID"),
      React.createElement("th", { key: "name" }, "Name"),
    ])
  );
  const tbody = React.createElement(
    "tbody",
    null,
    cities.map((cities) =>
      React.createElement("tr", { key: cities.id }, [
        React.createElement("td", { key: "id" }, cities.id),
        React.createElement("td", { key: "name" }, cities.name),
      ])
    )
  );

  const table = React.createElement(
    "table",
    null,
    [thead, tbody]
  );
  return table;
}

export default App;
