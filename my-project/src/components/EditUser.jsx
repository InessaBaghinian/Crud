import React, { useEffect, useState } from 'react';
import { addUser, editUser, getUsers } from "../Service/Api"
import { useNavigate, useParams } from "react-router-dom"

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: ""
};

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    loadUserData();
  }, []);
  const loadUserData = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const valueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const editUserDetail = async () => {
    await editUser(id, user);
    history("/all");
  };

  return (
    <div>
      <div>
        <h1> Update User </h1>
        <div>
            <label> Name </label>
            <input onChange={(e) => valueChange(e)} name="name" value={name} />
        </div>
        <div>
            <label> User Name </label>
            <input onChange={(e) => valueChange(e)} name="username" value={username} />
        </div>
        <div>
            <label> Email </label>
            <input onChange={(e) => valueChange(e)} name="email" value={email} />
        </div>
        <div>
            <label> Phone No. </label>
            <input onChange={(e) => valueChange(e)} name="phone" value={phone} />
        </div>
        <button onClick={() => editUserDetail()} >
          Update User
        </button>
      </div>
    </div>
  );
};

export default EditUser;
