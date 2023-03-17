import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/footer";
import "./index.css";
import LoginPage from "./pages/loginPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoginPage />
    <Footer />
  </React.StrictMode>
);
