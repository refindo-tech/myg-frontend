"use client";
import React, { useState } from "react";
import {
  Button,
  Input,
  Avatar,
  Card,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  user,
} from "@nextui-org/react";
import {
    SearchIcon,
    TrashIcon,
    AddCircleIcon,
    EditIcon,
    DetailIcon,
  } from "@/components/adminComponent/icon";

const DataUser = [
    {
        userId: 1,
        email: "user1@gmail.com",
        fullName: "User 1",
        userLabel: "Sahabat My Academy",
        role: "MEMBER",
        userProfiles: {
            profileId: 1,
            userId: 1,
            fullName: "User 1",
            address: "Jl. Raya",
            phoneNumber: "08123456789",
            socialMedia: "@user1",
            profilePicture: null,
            studioName: null,
            ktpPicture: null,
            studioLogo: null,
            birthdate: "2001-01-01T00:00:00.000Z",
            createdAt: "2024-07-30T20:41:00.528Z",
            updatedAt: "2024-07-30T20:41:00.528Z",
        },
    },
    {
        userId: 2,
        email: "user2@gmail.com",
        fullName: "User 2",
        userLabel: "Sahabat My Academy",
        role: "MEMBER",
        userProfiles: {
            profileId: 2,
            userId: 2,
            fullName: "User 2",
            address: "Jl. Raya",
            phoneNumber: "08123456789",
            socialMedia: "@user2",
            profilePicture: null,
            studioName: null,
            ktpPicture: null,
            studioLogo: null,
            birthdate: "2001-01-01T00:00:00.000Z",
            createdAt: "2024-07-30T20:41:00.528Z",
            updatedAt: "2024-07-30T20:41:00.528Z",
        },
    },
];

const statusColorMap: { [key: string]: string } = {
    active: "success",
    inactive: "danger",
  };

const ListPengguna = () => {
    const [ListUser, setListUser] = useState(DataUser);
    const [filterValue, setFilterValue] = useState("");
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(5);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<{ userId: number, fullName: string, email: string, role: string, userLabel: string, userProfiles: {} } | null>(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  

    const [newUser, setNewUser] = useState<{
        email: string;
        fullName: string;
        role: string;
        userLabel: string;
        userProfiles: {
            profileId: number;
            userId: number;
            fullName: string;
            address: string;
            phoneNumber: string;
            socialMedia: string;
            profilePicture: File | null; // Update the type to allow null values
            studioName: null | string;
            ktpPicture: File | null; // Update the type to allow null values
            studioLogo: File | null; // Update the type to allow null values
            birthdate: string;
            createdAt: string;
            updatedAt: string;
        };
    }>({
        email: "",
        fullName: "",
        role: "",
        userLabel: "",
        userProfiles: {
            profileId: 0,
            userId: 0,
            fullName: "",
            address: "",
            phoneNumber: "",
            socialMedia: "",
            profilePicture: null,
            studioName: null,
            ktpPicture: null,
            studioLogo: null,
            birthdate: "",
            createdAt: "",
            updatedAt: "",
        },
    });

    // handle search user
    const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFilterValue(value);
    };

    // Pagination logic for user page
    const pages = Math.ceil(ListUser.length / rowsPerPage);
    const paginatedUser = ListUser.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
    );

    // Add new user input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setNewUser((prevState) => ({ ...prevState, imageUrl: file }));
        }
    };

    // Delete user function
    const handleDeleteUser = (userId: number, fullName: string) => {
        setSelectedUser({ userId, fullName, email: "", role: "", userLabel: "", userProfiles: {} });
        setIsDeleteModalOpen(true);
    };

    const confirmDeleteUser = () => {
        if (selectedUser) {
            setListUser(ListUser.filter((user) => user.userId !== selectedUser.userId));
            console.log(`User with id ${selectedUser.userId} deleted`);
            setIsDeleteModalOpen(false);
            setSelectedUser(null);
        }
    };

    // Edit user function
    const handleEditUser = (userId: number, fullName: string) => {
        setSelectedUser({ userId, fullName, email: "", role: "", userLabel: "", userProfiles: {} });
        setIsEditModalOpen(true);
    }

    const confirmEditUser = () => {
        if (selectedUser) {
            setListUser(ListUser.filter((user) => user.userId !== selectedUser.userId));
            console.log(`User with id ${selectedUser.userId} edited`);
            setIsEditModalOpen(false);
            setSelectedUser(null);
        }
    }
  
  
    // Pagination button handlers
    const onPreviousPage = () => {
      if (page > 1) setPage((prev) => prev - 1);
    };
  
    const onNextPage = () => {
      if (page < pages) setPage((prev) => prev + 1);
    };

    // // Function to update an user
    // const handleAddUser = () => {
    //     const newUserId = ListUser.length + 1;
    //     const newUserData = {
    //         userId: newUserId,
    //         email: newUser.email,
    //         fullName: newUser.fullName,
    //         role: newUser.role,
    //         userLabel: newUser.userLabel,
    //         userProfiles: newUser.userProfiles,
    //     };
    
    //     setListUser([...ListUser, newUserData]); // Add to the list
    //     onOpenChange(); // Close modal
    
    //     // Reset the form after submission
    //     setNewUser({
    //         email: "",
    //         fullName: "",
    //         role: "",
    //         userLabel: "",
    //         userProfiles: {
    //             profileId: 0,
    //             userId: 0,
    //             fullName: "",
    //             address: "",
    //             phoneNumber: "",
    //             socialMedia: "",
    //             profilePicture: null,
    //             studioName: "",
    //             ktpPicture: null,
    //             studioLogo: null,
    //             birthdate: "",
    //             createdAt: "",
    //             updatedAt: "",
    //         },
    //     });
    // };
    
  
    return (
      <div className="w-full h-full px-6 py-6">
        {/* Page Header */}
        <div className="font-openSans text-4xl text-abugelap mb-6">
          List Layanan
        </div>
  
        {/* Card Container */}
        <Card className="bg-white rounded-2xl border p-6">
          {/* Search and Add layanan */}
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
  
          {/* Table to display layanan */}
          <Table>
            <TableHeader>
              <TableColumn>Name</TableColumn>
              <TableColumn>Role</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              {paginatedUser.map((DataUser) => (
                <TableRow key={DataUser.userId}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar radius="sm" src={DataUser.userProfiles.profilePicture ?? ''} />
                      <div className="flex flex-col">
                        <div>{DataUser.fullName}</div>
                        <div className="text-tiny text-default-400">
                            {DataUser.email}
                        </div>
                    </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col items-start gap-2">
                        <div>{DataUser.role}</div>
                        <div>{DataUser.userLabel}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Chip>
                        Status
                    </Chip>
                  </TableCell>
                  <TableCell className="flex items-center justify-start">
                    <Button
                      variant="light"
                      startContent={<EditIcon />}
                      onClick={() => handleEditUser(DataUser.userId, DataUser.fullName)}
                    />
                    <Button
                      variant="light"
                      startContent={<TrashIcon />}
                      onClick={() => handleDeleteUser(DataUser.userId, DataUser.fullName)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
  
          {/* Pagination Controls */}
          <div className="flex mt-4 items-center justify-center">
            <div className="flex w-[40%] justify-center items-center gap-2">
              <Button
                isDisabled={page <= 1}
                size="sm"
                variant="flat"
                onPress={onPreviousPage}
              >
                Previous
              </Button>
  
              <Pagination
                isCompact
                total={pages}
                initialPage={page}
                onChange={(page) => setPage(page)}
                variant="light"
              />
  
              <Button
                isDisabled={page >= pages}
                size="sm"
                variant="flat"
                onPress={onNextPage}
              >
                Next
              </Button>
            </div>
          </div>
        </Card>
  
        {/* Modal for Deleting Layanan */}
        <Modal
          isOpen={isDeleteModalOpen}
          onOpenChange={setIsDeleteModalOpen}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Confirm Deletion</ModalHeader>
                <ModalBody>
                  <p>Are you sure you want to delete <strong>{selectedUser?.fullName}</strong>?</p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={() => {
                    confirmDeleteUser();
                    onClose();
                  }}>
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