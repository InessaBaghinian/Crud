import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../Api";
import { Link } from "react-router-dom";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


const Students = () => {
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead> ID </TableHead>
            <TableHead> Full Name </TableHead>
            <TableHead> UserName </TableHead>
            <TableHead> Email </TableHead>
            <TableHead> Phone </TableHead>
            <TableHead> </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Admin@gmail.com</TableCell>
            <TableCell>000-000-000-000-000</TableCell>
            <TableCell></TableCell>
          </TableRow>
          {addData.map((user, index) => (
            <TableRow key={index}>
              <TableCell> {user.id} </TableCell>
              <TableCell> {user.name} </TableCell>
              <TableCell> {user.username} </TableCell>
              <TableCell> {user.email} </TableCell>
              <TableCell> {user.phone} </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link
                  to={`/students/${user.id}/edit`}
                  >
                  <Button> Edit </Button></Link>
      
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">Delete </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your
                              account and remove your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction variant="destructive" onClick={() => deleteUserData(user.id)}>Delete </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>

            </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
};

export default Students;
