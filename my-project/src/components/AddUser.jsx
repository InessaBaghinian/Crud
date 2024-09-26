import React, { useState } from "react";
import { addUser } from "../Service/Api";
import { useNavigate } from "react-router-dom";


const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: ""
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const history = useNavigate();

  const valueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetail = async () => {
    await addUser(user);
    history("/all");
  };

  return (
    <div>
      <div>
        <h1> Add New Student </h1>
        <div>
          <label> Name </label>
          <input onChange={(e) => valueChange(e)} name="name" value={name} />
        </div>
        <div>
          <label> User Name </label>
          <input
            onChange={(e) => valueChange(e)}
            name="username"
            value={username}
          />
        </div>
        <div>
          <label> Email </label>
          <input onChange={(e) => valueChange(e)} name="email" value={email} />
        </div>
        <div>
          <label> Phone No. </label>
          <input onChange={(e) => valueChange(e)} name="phone" value={phone} />
        </div>
        <button
          onClick={() => addUserDetail()}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
