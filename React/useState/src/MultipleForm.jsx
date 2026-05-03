import { useState } from "react";

function Form() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: ""
  });

const [showData, setShowData] = useState(false);

  function handleChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setForm({
      ...form,
      [fieldName]: fieldValue
    });
  }

  function handleSubmit() {
    setShowData(true);
  }

  return (
    <>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="phone" onChange={handleChange} placeholder="Phone" />
      <input name="city" onChange={handleChange} placeholder="City" />
      <input name="password" onChange={handleChange} placeholder="Password" />

      <button onClick={handleSubmit}>Submit</button>

      {showData && (
        <div>
          <h3>Submitted Data</h3>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Phone: {form.phone}</p>
          <p>City: {form.city}</p>
          <p>Password: {form.password}</p>
        </div>
      )}
    </>
  );
}

export default Form;