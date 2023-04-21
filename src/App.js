import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import FilterProduct from "./pages/FilterProduct/FilterProduct";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Products from "./pages/Products/Products";
import Cart from "./pages/Cart/Cart";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };
function App() {
  const dark = useSelector((state) => state.slider.dark);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`App ${dark ? "dark" : "light"}`}>
      {loading ? (
        <div className="sweet-loading">
          <ClipLoader
            color="#D0021B"
            loading={loading}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<FilterProduct />} path={`/filterProduct/:type`} />
          <Route
            element={<SingleProduct />}
            path={`/filterProduct/:type/:id`}
          />
          <Route element={<Products />} path={`/products/:num`} />
          <Route element={<Cart />} path={`/cart`} />
        </Routes>
      )}
    </div>
  );
}

export default App;
