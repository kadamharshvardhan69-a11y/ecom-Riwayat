import { useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "../compontes/Redux/productSlice";

function AdminProducts() {
  const products = useSelector(state => state.products.list);
  const dispatch = useDispatch();

  return (
    <div className="admin-main">
      <h2>All Sarees</h2>

      {products.map(p => (
        <div className="admin-product" key={p.id}>
          <img src={p.image} />
          <div>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <p>{p.description}</p>

            <button>Edit</button>
            <button onClick={() => dispatch(deleteProduct(p.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminProducts;
