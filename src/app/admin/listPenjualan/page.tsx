"use client";
import React, { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Input,
  Button,
  Card,
} from "@nextui-org/react";
import { SearchIcon, DetailIcon } from "@/components/adminComponent/icon";

interface Transaction {
  kodeTransaksi: string;
  namaPembeli: string;
  totalPembelian: string;
}

const transactions: Transaction[] = [
  { kodeTransaksi: "P0001", namaPembeli: "John Doe", totalPembelian: "912000" },
  { kodeTransaksi: "P0002", namaPembeli: "Jane Smith", totalPembelian: "120000" },
  { kodeTransaksi: "P0003", namaPembeli: "Alice Johnson", totalPembelian: "150000" },
  { kodeTransaksi: "P0004", namaPembeli: "John Doe", totalPembelian: "200000" },
  { kodeTransaksi: "P0005", namaPembeli: "Jane Smith", totalPembelian: "220000" },
  { kodeTransaksi: "P0006", namaPembeli: "Alice Johnson", totalPembelian: "180000" },
  { kodeTransaksi: "P0007", namaPembeli: "Bob Brown", totalPembelian: "300000" },
];

export const formatToRupiah = (number: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace("IDR", "IDR ");
};

const TransactionTable = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const rowsPerPage = 7;

  // Calculate filtered transactions based on the search query
  const filteredTransactions = useMemo(() => {
    return transactions.filter(
      (transaction) =>
        transaction.kodeTransaksi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.namaPembeli.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.totalPembelian.includes(searchQuery)
    );
  }, [searchQuery]);

  // Calculate pages based on filtered transactions
  const pages = Math.ceil(filteredTransactions.length / rowsPerPage);

  // Memoized items for pagination
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredTransactions.slice(start, end);
  }, [page, filteredTransactions]);

  return (
    <div className="w-full h-full px-6 py-6">
      {/* Page Header */}
      <div className="font-openSans text-4xl text-abugelap mb-6">List Penjualan Produk</div>

      {/* Card Container */}
      <Card className="bg-white rounded-2xl border p-6">
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <Input
              placeholder="Search..."
              startContent={<SearchIcon size={18} />}
              className="max-w-[20rem]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
            />
          </div>
          <Table
            aria-label="Transaction table"
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={page}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
            classNames={{
              wrapper: "min-h-[222px]",
            }}
          >
            <TableHeader>
              <TableColumn>KODE TRANSAKSI</TableColumn>
              <TableColumn>NAMA PEMBELI</TableColumn>
              <TableColumn>TOTAL PEMBELIAN</TableColumn>
              <TableColumn>AKSI</TableColumn>
            </TableHeader>
            <TableBody items={items}>
              {(item) => (
                <TableRow key={item.kodeTransaksi}>
                  <TableCell>{item.kodeTransaksi}</TableCell>
                  <TableCell>{item.namaPembeli}</TableCell>
                  <TableCell>{formatToRupiah(Number(item.totalPembelian))}</TableCell>
                  <TableCell>
                    <Button isIconOnly size="sm" variant="light" className="w-max">
                      <DetailIcon size={18} />
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default TransactionTable;
