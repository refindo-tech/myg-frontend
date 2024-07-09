"use client";
import React, { useState } from "react";
import { Input, Button, Checkbox, Image, Progress } from "@nextui-org/react";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";

export function Login() {

  return (
    <div className="flex flex-row h-full w-full mx-auto">
      {/* Bagian 1 */}
      <div className="items-center justify-center py-10 px-10 w-[60%] hidden xl:flex relative">
        <Image
            src={images.login_img.src}
            alt="Image"
            className="object-cover"
            style={{ width: "90%", height: "90%" }}
          />
      </div>

      {/* Bagian 2 */}
      <div className="flex flex-col mx-auto items-center sm:max-w-sm md:w-full xl:w-full xl:h-full xl:ml-0">

        <div className="flex flex-col mt-24 gap-6">
          <div className="w-full text-left">
            <h1 className="text-2xl font-bold font-playfair tracking-wider">Daftar Akun</h1>
            <p className="mt-2 text-sm font-normal font-openSans tracking-widest text-gray-600">
              Lengkapi data berikut untuk melanjutkan pendaftaran
            </p>
          </div>

          <div className="flex items-center justify-center pb-6 border-b-medium">
            <div className="flex items-center w-full justify-center space-x-4">
              <div className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-kuning2 text-10px text-white">1</div>
              <div className="w-[150px] mx-4">
                <Progress value={100} classNames={{indicator: "bg-kuning2"}}/>
              </div>
              <div className="flex items-center justify-center w-[26px] h-[26px] rounded-full bg-kuning2 text-10px text-white">2</div>
            </div>
          </div>

        </div>

        {/* Bagian 3 */}
        <div className="flex flex-col w-full mt-10 gap-3">
          <Input
            type="nama"
            label="Nama"
            variant="bordered"
            placeholder="Masukkan nama lengkap Anda"
            className="w-full"
          />
          
          <Input
            type="nomer telpon"
            label="Nomor Telpon"
            variant="bordered"
            placeholder="Masukkan nomor telpon Anda"
            className="w-full"
          />

          <Input
            type="tanggal lahir"
            label="Tanggal Lahir"
            variant="bordered"
            placeholder="mm/dd/yyyy"
            className="w-full"
          />


          <Input
            type="Social Media"
            label="Social Media"
            variant="bordered"
            placeholder="Masukkan akun Anda"
            className="w-full"
          />


          <Input
            type="Alamat"
            label="Alamat"
            variant="bordered"
            placeholder="Masukkan alamat Anda"
            className="w-full"
          />

        </div>

        <div className="flex flex-row justify-between items-center w-full mt-5">
          <Button variant="ghost" className="font-sans text-black bg-white">Sebelumnya</Button>
          <Button variant="light" className="font-sans text-white bg-kuning2">Masuk</Button>
        </div>

        <div className="flex items-center w-full gap-6">
            <a className="font-inter font-normal text-gray-400">Sudah mempunyai akun? </a>
            <Button variant="light" className="font-sans text-kuning"> Masuk </Button>
        </div>

      </div>
    </div>
  );
}

export default Login;
