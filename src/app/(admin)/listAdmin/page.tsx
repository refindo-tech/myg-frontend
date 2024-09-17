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
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import { SearchIcon, TrashIcon, AddCircleIcon } from "@/components/adminComponent/icon";
import AddAdminModal from "@/components/adminComponent/listAdmin/AddAdminModal";
import DeleteAdminModal from "@/components/adminComponent/listAdmin/DeleteAdminModal";

// Define the Admin interface
interface Admin {
  id: number;
  name: string;
  email: string;
  role: string;
  userLabel: string;
  profilePicture: string | null;
}

// Initial admin data
const initialAdmins: Admin[] = [
  {
    id: 1,
    name: "admin",
    email: "admin@gmail.com",
    role: "ADMIN",
    userLabel: "MYA",
    profilePicture: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 2,
    name: "testuser",
    email: "testuser@test.com",
    role: "ADMIN",
    userLabel: "MY Beautica",
    profilePicture: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 3,
    name: "Titik Sofianingsih",
    email: "user1@test.com",
    role: "ADMIN",
    userLabel: "MY Academy",
    profilePicture: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 4,
    name: "Maya Qorina",
    email: "user2@test.com",
    role: "ADMIN",
    userLabel: "SAHABAT_MY_ACADEMI",
    profilePicture: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    id: 5,
    name: "Linda",
    email: "user3@test.com",
    role: "ADMIN",
    userLabel: "DISTRIBUTOR",
    profilePicture: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
];

const ListAdminPage: React.FC = () => {
  const [listAdmin, setListAdmin] = useState<Admin[]>(initialAdmins);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const { isOpen: isAddModalOpen, onOpen: onOpenAddModal, onOpenChange: onOpenChangeAddModal } = useDisclosure();
  const { isOpen: isDeleteModalOpen, onOpen: onOpenDeleteModal, onOpenChange: onOpenChangeDeleteModal } = useDisclosure();
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);

  const filteredAdmins = listAdmin.filter((admin) =>
    admin.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const pages = Math.ceil(filteredAdmins.length / rowsPerPage);
  const paginatedAdmins = filteredAdmins.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const handleAddAdmin = (newAdmin: Omit<Admin, 'id'>) => {
    const newId = listAdmin.length + 1;
    const adminWithId = { ...newAdmin, id: newId };
    setListAdmin([...listAdmin, adminWithId]);
  };

  const handleDeleteAdmin = (admin: Admin) => {
    setSelectedAdmin(admin);
    onOpenDeleteModal();
  };

  const confirmDeleteAdmin = () => {
    if (selectedAdmin) {
      setListAdmin(listAdmin.filter((admin) => admin.id !== selectedAdmin.id));
      setSelectedAdmin(null);
    }
  };

  const onPreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    if (page < pages) setPage((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full px-6 py-6">
      <div className="font-openSans text-4xl text-abugelap mb-6">
        List Akun Admin
      </div>

      <Card className="bg-white rounded-2xl border p-6">
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search by name..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            startContent={<SearchIcon />}
            fullWidth
            className="max-w-[20rem]"
          />
          <Button
            className="bg-kuning2"
            variant="light"
            startContent={<AddCircleIcon />}
            onPress={onOpenAddModal}
          >
            Tambah Admin
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableColumn>No</TableColumn>
            <TableColumn>Name</TableColumn>
            <TableColumn>Role</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {paginatedAdmins.map((admin, index) => (
              <TableRow key={admin.id}>
                <TableCell>{(page - 1) * rowsPerPage + index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                      <Avatar 
                        radius="sm" 
                        src={admin.profilePicture || "https://i.pravatar.cc/150?u=a04258114e29026702d"} 
                      />
                    <div className="flex flex-col">
                      <div>{admin.name}</div>
                      <div className="text-tiny text-default-400">
                        {admin.email}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>{admin.role}</div>
                  <div className="text-tiny text-default-400">{admin.userLabel}</div>
                </TableCell>
                <TableCell>
                  <Button
                    variant="light"
                    startContent={<TrashIcon />}
                    onClick={() => handleDeleteAdmin(admin)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

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

      <AddAdminModal
        isOpen={isAddModalOpen}
        onOpenChange={onOpenChangeAddModal}
        onAddAdmin={handleAddAdmin}
      />

      <DeleteAdminModal
        isOpen={isDeleteModalOpen}
        onOpenChange={onOpenChangeDeleteModal}
        onDeleteAdmin={confirmDeleteAdmin}
        adminName={selectedAdmin?.name || ""}
      />
    </div>
  );
};

export default ListAdminPage;