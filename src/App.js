import "./App.css";
import Home from "./pages/Home";
import { Navigate, Route, Routes, json } from "react-router-dom";
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

function App() {
  const dark = useSelector((state) => state.slider.dark);
  let [loading, setLoading] = useState(true);
  const { isAdmin } = useSelector((state) => state.auth);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
          <Route
            path="/"
            element={isAdmin ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/register"
            element={isAdmin ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={isAdmin ? <Navigate to="/" /> : <Login />}
          />
          <Route path={`/filterProduct/:type`} element={<FilterProduct />} />
          <Route
            path={`/filterProduct/:type/:id`}
            element={<SingleProduct />}
          />
          <Route element={<Products />} path={`/products/:num`} />
          <Route element={<Cart />} path={`/cart`} />
        </Routes>
      )}
    </div>
  );
}

export default App;
