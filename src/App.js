import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/shared/Navbar";
import ShopCart from "./components/ShopCart";
import Perload from "./components/shared/Perload";

// Context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import FilterContextProvider from "./context/FilterContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <FilterContextProvider>
        <CartContextProvider>
          <Navbar />
          <Perload />
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Store} />
            <Route path="/cart" component={ShopCart} />
            <Redirect to="/products" />
          </Switch>
        </CartContextProvider>
      </FilterContextProvider>
    </ProductContextProvider>
  );
}

export default App;
