import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditProduct from "./components/EditProduct";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Route exact path="https://great-vibes-frontend-assessment.netlify.app/">
          <Products />
        </Route>
        <Route exact path="https://great-vibes-frontend-assessment.netlify.app/add">
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
