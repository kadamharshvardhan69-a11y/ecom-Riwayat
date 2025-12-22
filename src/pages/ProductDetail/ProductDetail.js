import { useParams } from "react-router-dom";
import products from "../../compontes/Data/Product";
import { useDispatch } from "react-redux";
import { addToCart } from "../../compontes/Redux/Cartslice";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />

      <div className="details">
        <h2>{product.name}</h2>
       <h3>Rs. {product.price.toLocaleString("en-IN")}</h3>

        {/* <h4>{product.description}</h4> */}


        <p className="description">{product.description}</p>

        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
