import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductModalProvider } from "./context/ProductModalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductModalProvider>
    <App />
  </ProductModalProvider>
);
