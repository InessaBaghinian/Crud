import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../Service/Api"
import { Link } from "react-router-dom"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


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
    <Table >
<TableHeader >
  <TableRow>
    <TableHead > ID </TableHead>
    <TableHead > Name </TableHead>
    <TableHead > UserName </TableHead> 
    <TableHead > Email </TableHead>
    <TableHead > Phone </TableHead> 
    <TableHead> </TableHead>
  </TableRow>
</TableHeader>
<TableBody >
  { addData.map((user) => (
    <TableRow>
      <TableCell > {user.id} </TableCell>
      <TableCell > {user.name} </TableCell>
      <TableCell > {user.username} </TableCell>
      <TableCell > {user.email} </TableCell>
      <TableCell > {user.phone} </TableCell>
      <TableCell>
        <bottun> Edit  </bottun>
        <bottun  onClick={() => deleteUserData(user.id)}> Delete  </bottun>
      </TableCell>
      </TableRow>
  ))}
</TableBody>
</Table> 
  );
};

export default AllUsers;



