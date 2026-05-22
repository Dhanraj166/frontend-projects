import { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z ]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!nameRegex.test(formData.name)) {
      setError("Invalid Name");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      setError("Invalid Email");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setError("Invalid Phone Number");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      /><br /><br />

      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      /><br /><br />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      /><br /><br />

      <button type="submit">Submit</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default FormValidation;