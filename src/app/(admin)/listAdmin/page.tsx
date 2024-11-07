"use client";
import React, { useState, useEffect } from "react";
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
import ListAdminService from "@/lib/admin/listAdmin/listAdminServiceAPI";
import Swal from 'sweetalert2';

interface AdminData {
  adminId: number;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
  userLabel: string;
  createdAt: string;
  updatedAt: string;
}

const ListAdminPage: React.FC = () => {
  const [listAdmin, setListAdmin] = useState<AdminData[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [totalPages, setTotalPages] = useState(1);
  const { isOpen: isAddModalOpen, onOpen: onOpenAddModal, onOpenChange: onOpenChangeAddModal } = useDisclosure();
  const { isOpen: isDeleteModalOpen, onOpen: onOpenDeleteModal, onOpenChange: onOpenChangeDeleteModal } = useDisclosure();
  const [selectedAdmin, setSelectedAdmin] = useState<AdminData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const getProfilePictureUrl = (path: string) => `${process.env.NEXT_PUBLIC_BASE_API}/${path}`;


  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const { data } = await ListAdminService.getAllAdmins(page, limit, filterValue);
        setListAdmin(data.results.admins);
        setTotalPages(data.results.pagination.totalPages);
      } catch (error: any) {
        console.error("Failed to fetch admins:", error);
        setError("Failed to fetch admin list. Please try again.");
      }
    };
    fetchAdmins();
  }, [page, limit, filterValue]);

  const handleAddAdmin = async (formData: FormData) => {
    try {
      setError(null);
      const { data } = await ListAdminService.registerAdmin(formData);
      setListAdmin((prevAdmins) => [...prevAdmins, data.results]);
      onOpenChangeAddModal();
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Admin has been successfully added.',
      });
    } catch (error: any) {
      console.error("Failed to add Admin:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: error.response?.data?.meta?.message || error.message || 'Unknown error occurred while adding admin.',
      });
    }
  };

  const handleDeleteAdmin = (admin: AdminData) => {
    setSelectedAdmin(admin);
    onOpenDeleteModal();
  };

  const confirmDeleteAdmin = async () => {
    if (selectedAdmin) {
      try {
        await ListAdminService.deleteAdmin(selectedAdmin.adminId);
        setListAdmin((prevAdmins) =>
          prevAdmins.filter((admin) => admin.adminId !== selectedAdmin.adminId)
        );
        setSelectedAdmin(null);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Admin has been successfully deleted.',
        });
      } catch (error: any) {
        console.error("Error deleting admin:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'An unknown error occurred while deleting the admin.',
        });
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
  

  const onPreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full px-6 py-6">
      <div className="font-openSans text-4xl text-abugelap mb-6">List Akun Admin</div>

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
            <TableColumn>Team</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {listAdmin.map((admin, index) => (
              <TableRow key={admin.adminId}>
                <TableCell>{(page - 1) * limit + index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar
                      radius="sm"
                      src={getProfilePictureUrl(admin.profilePicture) || "https://i.pravatar.cc/150?u=a04258114e29026702d"}
                    />
                    <div className="flex flex-col">
                      <div>{admin.name}</div>
                      <div className="text-tiny text-default-400">{admin.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>{getRoleDisplayName(admin.role)}</div>
                </TableCell>
                <TableCell>
                  <div>{admin.userLabel}</div>
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
              total={totalPages}
              initialPage={page}
              onChange={(newPage) => setPage(newPage)}
              variant="light"
            />
            <Button
              isDisabled={page >= totalPages}
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
