"use client";
import React, { useState } from "react";
import {
  Button,
  Input,
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
  Select,
  SelectItem,
} from "@nextui-org/react";
import {
  SearchIcon,
  TrashIcon,
} from "@/components/adminComponent/icon";

// Initial testimonial data
const testimonialData = [
  {
    reviewId: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    comment: "Great product, really enjoyed using it!",
    isApproved: true,
    createdAt: "2024-07-31T08:00:00.000Z",
    updatedAt: "2024-07-31T08:00:00.000Z",
  },
  {
    reviewId: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    comment: "Excellent customer service and fast shipping!",
    isApproved: true,
    createdAt: "2024-07-31T10:00:00.000Z",
    updatedAt: "2024-07-31T10:00:00.000Z",
  },
  {
    reviewId: 5,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    comment: "Affordable and worth every penny!",
    isApproved: false,
    createdAt: "2024-07-31T12:00:00.000Z",
    updatedAt: "2024-07-31T12:00:00.000Z",
  },
];

const ListTestimonialPage = () => {
  const [listTestimonials, setListTestimonials] = useState(testimonialData);
  const [filterValue, setFilterValue] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);

  interface Testimonial {
    id: number;
    name: string;
  }
  
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Handle search filter
  const filteredTestimonials = listTestimonials.filter((testimonial) =>
    testimonial.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  // Pagination logic
  const pages = Math.ceil(filteredTestimonials.length / rowsPerPage);
  const paginatedTestimonials = filteredTestimonials.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Update testimonial status
  const handleStatusChange = (id: number, newStatus: boolean) => {
    const updatedTestimonials = listTestimonials.map((testimonial) =>
      testimonial.reviewId === id
        ? { ...testimonial, isApproved: newStatus }
        : testimonial
    );

    // Reorder testimonials based on new status
    updatedTestimonials.sort((a, b) => Number(b.isApproved) - Number(a.isApproved));
    setListTestimonials(updatedTestimonials);
  };

  // Delete testimonial function
  const handleDeleteTestimonial = (id: number, name: string) => {
    setSelectedTestimonial({ id, name });
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteTestimonial = () => {
    if (selectedTestimonial) {
      setListTestimonials(
        listTestimonials.filter(
          (testimonial) => testimonial.reviewId !== selectedTestimonial.id
        )
      );
      setIsDeleteModalOpen(false);
      setSelectedTestimonial(null);
    }
  };

  // Pagination button handlers
  const onPreviousPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    if (page < pages) setPage((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full px-6 py-6">
      {/* Page Header */}
      <div className="font-openSans text-4xl text-abugelap mb-6">
        List Testimoni
      </div>

      {/* Card Container */}
      <Card className="bg-white rounded-2xl border p-6">
        {/* Search */}
        <div className="flex justify-between mb-4">
          <Input
            placeholder="Search by user name..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            startContent={<SearchIcon />}
            fullWidth
            className="max-w-[20rem]"
          />
        </div>

        {/* Table to display testimonials */}
        <Table>
          <TableHeader>
            <TableColumn>No</TableColumn>
            <TableColumn>Nama User</TableColumn>
            <TableColumn>Testimoni</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Aksi</TableColumn>
          </TableHeader>
          <TableBody className="flex items-center">
            {paginatedTestimonials.map((testimonial, index) => (
              <TableRow key={testimonial.reviewId}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <div>{testimonial.name}</div>
                    <div className="text-tiny text-default-400">
                      {testimonial.email}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{testimonial.comment}</TableCell>
                <TableCell>
                  <Select
                    placeholder="Select Status"
                    value={testimonial.isApproved.toString()}
                    onChange={(value) =>
                      handleStatusChange(testimonial.reviewId, (value.target as HTMLSelectElement).value === "true")
                    }
                  >
                    <SelectItem key="true" value="true">
                      Approved
                    </SelectItem>
                    <SelectItem key="false" value="false">
                      Pending
                    </SelectItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <Button
                    variant="light"
                    startContent={<TrashIcon />}
                    onClick={() =>
                      handleDeleteTestimonial(
                        testimonial.reviewId,
                        testimonial.name
                      )
                    }
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

      {/* Modal for Deleting Testimonial */}
      <Modal
        isOpen={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirm Deletion
              </ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to delete{" "}
                  <strong>{selectedTestimonial?.name}</strong>?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    confirmDeleteTestimonial();
                    onClose();
                  }}
                >
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

export default ListTestimonialPage;
