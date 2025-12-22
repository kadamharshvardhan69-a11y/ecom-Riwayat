import React, { useState } from "react";
import "../styles/saree.css";

const AddSaree = () => {
  const [sarees, setSarees] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    color: "",
    description: "",
    image: null,
    preview: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setForm({
      ...form,
      image: file,
      preview: URL.createObjectURL(file)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updated = [...sarees];
      updated[editingIndex] = form;
      setSarees(updated);
      setEditingIndex(null);
    } else {
      setSarees([...sarees, form]);
    }

    setForm({
      name: "",
      price: "",
      color: "",
      description: "",
      image: null,
      preview: ""
    });
  };

  const handleEdit = (index) => {
    setForm(sarees[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setSarees(sarees.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-container">
      <h2>{editingIndex !== null ? "Edit Saree" : "Add Saree"}</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Saree Name" value={form.name} onChange={handleChange} required />
        <input name="color" placeholder="Color" value={form.color} onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />

        <input type="file" onChange={handleImage} />
        {form.preview && <img src={form.preview} className="preview" alt="preview" />}

        <button>{editingIndex !== null ? "Update Saree" : "Add Saree"}</button>
      </form>

      <h2>All Sarees</h2>
      <div className="grid">
        {sarees.map((s, i) => (
          <div className="card" key={i}>
            <img src={s.preview} alt={s.name} />
            <h3>{s.name}</h3>
            <p>₹{s.price}</p>
            <p>{s.color}</p>

            <button onClick={() => handleEdit(i)}>Edit</button>
            <button className="danger" onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddSaree;
