import "bootstrap/dist/css/bootstrap.css"
import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
     console.log("login")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        className="form-control my-2"
        name="email"
        placeholder="Input email ..."
        onChange={handleChangeText}
      />
      <input
        type="password"
        className="form-control my-2"
        name="password"
        placeholder="Input password ..."
        onChange={handleChangeText}
      />
      <button className="btn btn-primary mt-3" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
