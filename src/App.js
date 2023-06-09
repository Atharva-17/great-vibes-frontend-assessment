import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditProduct from "./components/EditProduct";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/add">
          <AddProduct />
        </Route>
        <Route exact path="/edit/:id">
          <EditProduct />
        </Route>
      </Router>
    </>
  );
}

export default App;
