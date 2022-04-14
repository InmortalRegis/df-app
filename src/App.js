import "./App.css";
import data from "./assets/data.json";
import ProductView from "./views/ProductView";
function App() {
  return (
    <div className="app">
      {data &&
        data.products.map((product) => (
          <ProductView key={product.id} product={product} />
        ))}
    </div>
  );
}

export default App;
