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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="max-w-sm mx-auto">
        <h1 className="text-green-600 font-bold text-3xl text-center"> Update User </h1>
        <div>
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"> Name </label>
            <input 
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            onChange={(e) => valueChange(e)} 
            name="name" 
            value={name} />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"> User Name </label>
            <input 
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            onChange={(e) => valueChange(e)} 
            name="username" 
            value={username} />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"> Email </label>
            <input 
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            onChange={(e) => valueChange(e)} 
            name="email" 
            value={email} />
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"> Phone No. </label>
            <input 
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            onChange={(e) => valueChange(e)} 
            name="phone" 
            value={phone} />
        </div>
        <button 
        className="w-full flex justify-center py-2 px-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
        onClick={() => editUserDetail()}>
          Update Student
        </button>
      </div>
    </div>
  );
};

export default EditUser;
