// /app/profile/DataProfile.tsx

"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  Input,
  Avatar,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Tabs,
  Tab,
  Card,
  CardBody,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import images from "../../../public/images/images";

const DataProfile = () => {
  const [selected, setSelected] = useState("data-pengguna");
  const [pembelianData, setPembelianData] = useState<{ id: number; kode: string; deskripsi: string; harga: string; status: string; avatar: string; }[]>([]);
  const [acaraData, setAcaraData] = useState<{ id: number; nama: string; tanggal: string; status: string; }[]>([]);
  const [userData, setUserData] = useState({
    avatar: '',
    name: '',
    role: '',
    email: ''
  });

  const statusColorMap: { [key: string]: string } = {
    Segera: "success",
    Done: "warning",
    default: "default",
  };

  useEffect(() => {
    const fetchData = async () => {
      // Simulasi mengambil data dari database
      const pembelian = [
        {
          id: 1,
          kode: "001",
          deskripsi: "Produk A",
          harga: "Rp 1,000,000",
          status: "Retail",
          avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d"
        },
        {
          id: 2,
          kode: "002",
          deskripsi: "Produk B",
          harga: "Rp 2,000,000",
          status: "Distributor",
          avatar: "https://i.pravatar.cc/150?u=a04258a2462d826713d"
        },
      ];

      const acara = [
        {
          id: 1,
          nama: "Webinar React",
          tanggal: "2024-07-20 10:00",
          status: "Segera",
        },
        {
          id: 2,
          nama: "Workshop Next.js",
          tanggal: "2024-08-15 14:00",
          status: "Done",
        },
      ];

      const user = {
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        name: "Farah Adelia Putri",
        role: "Sahabat My Academy",
        email: "farah@example.com"
      };

      setPembelianData(pembelian);
      setAcaraData(acara);
      setUserData(user);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-full">
      {/* Navbar */}
      <div className="w-full">
        <Navbar shouldHideOnScroll className="flex shadow-md w-full">
          <NavbarBrand className="flex justify-start items-start w-1/2">
            <Image src={images.myg_logo.src} alt="Image" className="w-14" />
          </NavbarBrand>

          <NavbarContent className="hidden sm:flex gap-4 xl:gap-16" justify="center">
            <NavbarItem>
              <Link href="#" className="font-playfair font-semibold text-kuning2">Home</Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page" className="font-playfair font-semibold text-zinc ">Your Material</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" className="font-playfair text-zinc font-semibold">Discussion</Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2 font-openSans">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>
      </div>

      {/* Content */}
      <div className="bg-slate-100 w-full h-full px-6 py-6 xl:flex xl:py-20 xl:flex-col xl:px-44">
        <div className="font-playfair font-semibold text-4xl text-kuning">Profile</div>

        <Card className="bg-white rounded-lg border p-6 mt-6">
          <CardBody>
            <div className="flex items-center gap-4">
              <Avatar src={userData.avatar} size="lg" />
              <div>
                <div className="font-semibold text-lg">{userData.name}</div>
                <div className="text-sm text-gray-500">{userData.role}</div>
                <div className="text-sm text-gray-500">{userData.email}</div>
              </div>
            </div>

            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              variant="underlined"
              selectedKey={selected}
              onSelectionChange={(value) => setSelected(value as string)}
              className="mt-6 border-b-medium"
            >
              {/* Setting Profile */}
              <Tab key="data-pengguna" title="Data Profile">
                <form className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4 xl:w-3/5">
                  <Input isRequired label="Nama" value={userData.name} />
                  <Input isRequired label="Nomor Telepon" value="62588XXXXXXXX" type="tel" />
                  <Input isRequired label="Tanggal Lahir" placeholder="MM/DD/YYYY" type="date" />
                  <Input isRequired label="Sosial Media" value="farahadeliaputri" />
                  <Input className="xl:col-span-2" isRequired label="Alamat" value={userData.email} />
                  <div className="flex justify-start">
                    <Button variant="light" className="bg-kuning2 text-white font-semibold font-openSans">Simpan Perubahan</Button>
                  </div>
                </form>
              </Tab>

              {/* Informasi Pembelian */}
              <Tab key="pembelian" title="Pembelian">
                <div className="flex flex-col gap-4 p-4">
                  <Table aria-label="Informasi Pembelian">
                    <TableHeader>
                      <TableColumn>KODE PEMBELIAN</TableColumn>
                      <TableColumn>DESKRIPSI</TableColumn>
                      <TableColumn>TOTAL HARGA</TableColumn>
                      <TableColumn>STATUS PEMBELIAN</TableColumn>
                      <TableColumn>ACTION</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {pembelianData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.kode}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar radius="sm" src={item.avatar} />
                              <span>{item.deskripsi}</span>
                            </div>
                          </TableCell>
                          <TableCell>{item.harga}</TableCell>
                          <TableCell>{item.status}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="bordered" className="text-kuning2 font-semibold font-openSans border-kuning2">Detail</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Tab>

              {/* Informasi Acara */}
              <Tab key="acara" title="Acara">
                <div className="flex flex-col gap-4 p-4">
                  <Table aria-label="Informasi Acara">
                    <TableHeader>
                      <TableColumn>NAMA ACARA</TableColumn>
                      <TableColumn>TANGGAL, WAKTU</TableColumn>
                      <TableColumn>STATUS</TableColumn>
                      <TableColumn>ACTION</TableColumn>
                    </TableHeader>
                    <TableBody>
                      {acaraData.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.nama}</TableCell>
                          <TableCell>{item.tanggal}</TableCell>
                          <TableCell>
                            <Chip className="capitalize" color={statusColorMap[item.status] as "success" | "warning" | "default" | "secondary" | "primary" | "danger" | undefined} size="sm" variant="flat"> 
                              {item.status}
                            </Chip>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="bordered" className="text-kuning2 font-semibold font-openSans border-kuning2">Detail</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DataProfile;
