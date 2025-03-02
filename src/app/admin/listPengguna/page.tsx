"use client";
import React, { useState, useEffect } from "react";
import {
  Button, Input, Avatar, Card, Table, TableHeader, TableColumn, TableBody,
  TableRow, TableCell, Chip, Pagination, Modal, ModalContent, ModalHeader,
  ModalBody, ModalFooter, useDisclosure,
  Tab,
} from "@nextui-org/react";
import { SearchIcon, TrashIcon } from "@/components/adminComponent/icon";
import { getAllUsers, deleteUserById } from "@/lib/admin/listUser/listUserServiceAPI"; 
import dayjs from 'dayjs';

interface UserProfile {
  profileId: number;
  userId: number;
  fullName: string;
  address: string;
  phoneNumber: string;
  socialMedia: string;
  profilePicture: string | null;
  studioName: string | null;
  ktpPicture: string | null;
  studioLogo: string | null;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
}

interface User {
  userId: number;
  email: string;
  userLabel: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
  userProfiles: UserProfile[];
}

const ListPengguna = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Mendapatkan semua pengguna dari API saat komponen dimuat
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    fetchUsers();
  }, []);

  // Filter berdasarkan input pencarian
  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(filterValue.toLowerCase()) ||
      user.userProfiles[0]?.fullName.toLowerCase().includes(filterValue.toLowerCase())
  );

  // Pagination logic for user page
  const pages = Math.ceil(filteredUsers.length / rowsPerPage);
  const paginatedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Menampilkan modal konfirmasi hapus
  const handleDeleteUser = (user: User) => {
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  // Konfirmasi penghapusan pengguna
  const confirmDeleteUser = async () => {
    if (selectedUser) {
      try {
        await deleteUserById(selectedUser.userId);
        setUsers(users.filter((user) => user.userId !== selectedUser.userId));
        setIsDeleteModalOpen(false);
        setSelectedUser(null);
      } catch (error) {
        console.error(`Failed to delete user with ID ${selectedUser.userId}`, error);
      }
    }
  };

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "Admin";
      case "SUPER_ADMIN":
        return "Super Admin";
      default:
        return role;
    }
  };
  

  return (
    <div className="w-full h-full px-6 py-6">
      {/* Page Header */}
      <div className="font-openSans text-4xl text-abugelap mb-6">List Pengguna</div>

      {/* Card Container */}
      <Card className="bg-white rounded-2xl border p-6">
        {/* Search input */}
        <div className="flex justify-end mb-4">
          <Input
            placeholder="Search by name..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            startContent={<SearchIcon />}
            fullWidth
            className="max-w-[20rem]"
          />
        </div>

        {/* Table to display users */}
        <Table>
          <TableHeader>
            <TableColumn>Name</TableColumn>
            <TableColumn>User Aplikasi</TableColumn>
            <TableColumn>Actions</TableColumn>
            <TableColumn>No Telpon</TableColumn>
            <TableColumn>Alamat</TableColumn>
            <TableColumn>Ulang Tahun</TableColumn>
          </TableHeader>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar radius="sm" src={user.userProfiles[0]?.profilePicture ?? ''} />
                    <div className="flex flex-col">
                      <div>{user.userProfiles[0]?.fullName}</div>
                      <div className="text-tiny text-default-400">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{user.userLabel}</TableCell>
                <TableCell>{user.userProfiles[0]?.phoneNumber}</TableCell>
                <TableCell>{user.userProfiles[0]?.address}</TableCell>
                <TableCell>{dayjs(user.userProfiles[0]?.birthdate).format("DD MM YYYY")}</TableCell>
                <TableCell>
                  <Button
                    variant="light"
                    startContent={<TrashIcon />}
                    onClick={() => handleDeleteUser(user)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination Controls */}
        <div className="flex mt-4 items-center justify-center">
          <Button isDisabled={page <= 1} size="sm" variant="flat" onPress={() => setPage(page - 1)}>
            Previous
          </Button>
          <Pagination
            isCompact
            total={pages}
            initialPage={page}
            onChange={(page) => setPage(page)}
            variant="light"
          />
          <Button isDisabled={page >= pages} size="sm" variant="flat" onPress={() => setPage(page + 1)}>
            Next
          </Button>
        </div>
      </Card>

      {/* Modal for Deleting User */}
      <Modal isOpen={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirm Deletion</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete <strong>{selectedUser?.userProfiles[0]?.fullName}</strong>?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onPress={() => { confirmDeleteUser(); onClose(); }}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ListPengguna;
