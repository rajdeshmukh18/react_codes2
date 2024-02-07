import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import MyForm from "./MyForm.jsx";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<MyForm />);
