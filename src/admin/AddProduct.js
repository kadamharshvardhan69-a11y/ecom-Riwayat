import React, { useState } from "react";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const [preview, setPreview] = useState(null);

  // 📸 Handle image upload (LOCAL preview only)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setPreview(imageURL);
    setForm({ ...form, image: imageURL });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Saree Added (STATIC PAGE)
-------------------------
Name: ${form.name}
Price: ₹${form.price}
Description: ${form.description}
    `);

    // Reset form
    setForm({ name: "", price: "", description: "", image: "" });
    setPreview(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Saree</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Saree Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={styles.input}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          style={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Image Url"
          value={form.Url}
          onChange={(e) => setForm({ ...form, Url: e.target.value })}
          style={styles.input}
          required
        />


        {preview && (
          <img src={preview} alt="Preview" style={styles.preview} />
        )}

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          style={styles.textarea}
          required
        ></textarea>

        <button type="submit" style={styles.button}>
          Add Saree
        </button>
      </form>
    </div>
  );
}

export default AddProduct;

/* 🎨 Inline styles (no CSS file needed) */
const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    fontFamily: "Arial"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  input: {
    padding: "10px",
    fontSize: "16px"
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    minHeight: "80px"
  },
  preview: {
    width: "150px",
    borderRadius: "8px",
    alignSelf: "center"
  },
  button: {
    background: "#c2185b",
    color: "#fff",
    padding: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "6px"
  }
};
