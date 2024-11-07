"use client";
import React, { useState, useEffect, useMemo } from "react";
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
  Select,
  SelectItem,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Pagination,
} from "@nextui-org/react";
import { SearchIcon, TrashIcon } from "@/components/adminComponent/icon";
import ListReviewService, { Review } from "@/lib/admin/listReview/listReviewServiceAPI";
import { toast } from "react-hot-toast";

const ListTestimonialPage = () => {
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectedTestimonial, setSelectedTestimonial] = useState<{ id: number; name: string } | null>(null);
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;  // Display 10 items per page
  const { isOpen, onOpen, onClose } = useDisclosure();

  const loadTestimonials = async () => {
    try {
        const [approvedResponse, pendingResponse] = await Promise.all([
            ListReviewService.getAllTestimonials({ isApproved: true, limit: rowsPerPage, page }),
            ListReviewService.getAllTestimonials({ isApproved: false, limit: rowsPerPage, page })
        ]);

        const approvedTestimonials = Array.isArray(approvedResponse.meta.message) 
            ? approvedResponse.meta.message.flat()
            : [];

        const pendingTestimonials = Array.isArray(pendingResponse.meta.message)
            ? pendingResponse.meta.message.flat()
            : [];

        const allTestimonials = [...approvedTestimonials, ...pendingTestimonials];
        
        setTestimonials(allTestimonials);
        localStorage.setItem('testimonials', JSON.stringify(allTestimonials));
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        toast.error(error instanceof Error ? error.message : "Failed to fetch testimonials");
    }
  };


  useEffect(() => {
    loadTestimonials();
  }, []);

  const filteredTestimonials = useMemo(() => {
    return testimonials
      .filter((t) => t.name.toLowerCase().includes(filterValue.toLowerCase()))
      .sort((a, b) => {
        if (a.isApproved !== b.isApproved) {
          return b.isApproved ? 1 : -1;
        }
        return b.reviewId - a.reviewId;
      });
  }, [testimonials, filterValue]);

  const pages = Math.ceil(filteredTestimonials.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedTestimonials = filteredTestimonials.slice(startIndex, startIndex + rowsPerPage);

  const handleStatusChange = async (id: number, newStatus: boolean) => {
    try {
      await ListReviewService.toggleApprovalStatus(id, newStatus);
      const updatedTestimonials = testimonials.map(t => 
        t.reviewId === id ? { ...t, isApproved: newStatus } : t
      );
      setTestimonials(updatedTestimonials);
      localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
      toast.success(`Status successfully ${newStatus ? "approved" : "unapproved"}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to update status");
    }
  };

  const handleDeleteTestimonial = (id: number, name: string) => {
    setSelectedTestimonial({ id, name });
    onOpen();
  };

  const confirmDeleteTestimonial = async () => {
    if (selectedTestimonial) {
      try {
        await ListReviewService.deleteTestimonial(selectedTestimonial.id);
        const updatedTestimonials = testimonials.filter(
          t => t.reviewId !== selectedTestimonial.id
        );
        setTestimonials(updatedTestimonials);
        localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
        toast.success("Testimonial deleted successfully");
        onClose();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Failed to delete testimonial");
      }
    }
  };

  const getRowKey = (testimonial: Review, index: number) => {
    return `testimonial-${testimonial.reviewId}-${index}`;
  };

  return (
    <div className="w-full h-full px-6 py-6">
      <div className="font-openSans text-4xl text-abugelap mb-6">List Testimonials</div>
        <Card className="bg-white rounded-2xl border p-6">
          <Input
            placeholder="Search by user name..."
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
            startContent={<SearchIcon />}
            className="max-w-[20rem] mb-4"
          />
          <Table aria-label="Testimonials">
            <TableHeader>
              <TableColumn>No</TableColumn>
              <TableColumn>Nama User</TableColumn>
              <TableColumn>Testimoni</TableColumn>
              <TableColumn>Status</TableColumn>
              <TableColumn>Aksi</TableColumn>
            </TableHeader>
            <TableBody>
              {paginatedTestimonials.map((testimonial, index) => (
                <TableRow key={getRowKey(testimonial, index)}>
                  <TableCell>{startIndex + index + 1}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div>{testimonial.name}</div>
                      <div className="text-tiny text-default-400">{testimonial.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{testimonial.comment}</TableCell>
                  <TableCell>
                    <Select
                      defaultSelectedKeys={[testimonial.isApproved.toString()]}
                      onChange={(e) => handleStatusChange(testimonial.reviewId, e.target.value === "true")}
                    >
                      <SelectItem key="true" value="true">Approved</SelectItem>
                      <SelectItem key="false" value="false">Pending</SelectItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="light"
                      startContent={<TrashIcon />}
                      onPress={() => handleDeleteTestimonial(testimonial.reviewId, testimonial.name)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex mt-4 items-center justify-center">
            <div className="flex w-[40%] justify-center items-center gap-2">
              <Button isDisabled={page <= 1} size="sm" variant="flat" onPress={() => setPage(prev => prev - 1)}>Previous</Button>
              <Pagination isCompact total={pages} initialPage={page} onChange={(page) => setPage(page)} variant="light" />
              <Button isDisabled={page >= pages} size="sm" variant="flat" onPress={() => setPage(prev => prev + 1)}>Next</Button>
            </div>
          </div>
        </Card>

        <Modal isOpen={isOpen} onOpenChange={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Confirm Deletion</ModalHeader>
                <ModalBody>
                  <p>
                    Are you sure you want to delete{" "}
                    <strong>{selectedTestimonial?.name}</strong>'s testimonial?
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={confirmDeleteTestimonial}>
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
