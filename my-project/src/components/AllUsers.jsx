import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/Api"
import { Link } from "react-router-dom"



const AllUsers = () => {
  const [addData, setAddData] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setAddData(response.data);
  };
  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  return (
    <table >
      <tr>
        <td>
          <th> ID </th>
          <th> Name </th>
          <th> UserName </th> 
          <th> Email </th>
          <th> Phone </th> 
          <th> </th>
        </td>
      </tr>
      <tr>
        { addData.map((user) => (
          <td>
            <th> {user.id} </th>
            <th> {user.name} </th>
            <th> {user.username} </th>
            <th> {user.email} </th>
            <th> {user.phone} </th>
            <tr>
              <bottun  component={Link} style={{ marginRight: "15px" }} to={`/edit/${user.id}`} >
                Edit
              </bottun>
              <bottun  onClick={() => deleteUserData(user.id)} >
                Delete
              </bottun>
            </tr>
          </td>
        ))}
      </tr>
    </table>
  );
};

export default AllUsers;
