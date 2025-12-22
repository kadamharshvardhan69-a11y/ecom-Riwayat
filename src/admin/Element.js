import { useDispatch } from "react-redux";
import { addProduct } from "../compontes/Redux/productSlice";
import { useState } from "react";

function AddProduct() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProduct({
      ...form,
      id: Date.now()
    }));
  };

  return (
    <div className="admin-main">
      <h2>Add New Saree</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        <input placeholder="Saree Name" onChange={e => setForm({...form, name: e.target.value})} />
        <input placeholder="Price" onChange={e => setForm({...form, price: e.target.value})} />
        <input placeholder="Image URL" onChange={e => setForm({...form, image: e.target.value})} />
        <textarea placeholder="Description" onChange={e => setForm({...form, description: e.target.value})}></textarea>

        <button>Add Saree</button>
      </form>
    </div>
  );
}

export default AddProduct;
