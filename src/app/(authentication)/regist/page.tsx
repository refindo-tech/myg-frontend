"use client";
import React, { useState } from "react";
import { Input, Button, Checkbox, Image, Progress, DateInput } from "@nextui-org/react";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";

export function Regist() {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
  const handlePrevious = () => setStep((prev) => Math.max(prev - 1, 1));

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
      <div className="flex flex-col mx-auto items-center px-3 sm:max-w-sm md:w-full xl:w-full xl:h-full xl:ml-0">
        <div className="flex flex-col mt-24 gap-6">
          <div className="w-full text-left">
            <h1 className="text-2xl font-bold font-playfair tracking-wider">Daftar Akun</h1>
            <p className="mt-2 text-sm font-normal font-openSans tracking-widest text-gray-600">
              Lengkapi data berikut untuk melanjutkan pendaftaran
            </p>
          </div>

          <div className="flex items-center justify-center pb-6 border-b-medium">
            <div className="flex items-center w-full justify-center space-x-4">
              <div className={`flex items-center justify-center w-[26px] h-[26px] rounded-full ${step === 1 ? "bg-kuning2" : "bg-gray-200"} text-10px text-white font-semibold`}>1</div>
              <div className="w-[150px] mx-4">
                <Progress value={step === 1 ? 50 : 100} classNames={{ indicator: "bg-kuning2" }} />
              </div>
              <div className={`flex items-center justify-center w-[26px] h-[26px] rounded-full ${step === 2 ? "bg-kuning2" : "bg-gray-200"} text-10px text-white font-semibold`}>2</div>
            </div>
          </div>
        </div>

        {/* Form Step 1 */}
        {step === 1 && (
          <div className="flex flex-col w-full mt-10 gap-3">
            <Input
              isRequired
              type="email"
              label="Email"
              variant="bordered"
              placeholder="Masukkan email Anda"
              className="w-full"
            />

            <Input
              label="Password"
              variant="bordered"
              placeholder="Masukkan password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <icons.EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <icons.EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="w-full"
            />

            <Input
              label="Password"
              variant="bordered"
              placeholder="Masukkan kembali password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <icons.EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <icons.EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="w-full"
            />

            <div className="flex justify-between items-center w-full">
              <Checkbox className="font-inter text-gray-700">Remember me</Checkbox>
              <Button variant="light" className="font-sans text-kuning">Lupa Password?</Button>
            </div>

            <div className="flex flex-row justify-between items-center w-full mt-5">
              <Button onClick={handleNext} variant="light" className="w-full font-sans text-white bg-kuning2 font-semibold">Selanjutnya</Button>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center w-full">
              <a className="font-normal text-gray-600"> atau </a>

              <Button startContent={<icons.GoogleIcon />} variant="bordered" className="w-full font-sans">Sign in with Google</Button>

              <Button startContent={<icons.FacebookIcon />} color="primary" className="w-full font-sans">Sign in with Facebook</Button>

              <div className="flex items-center w-full gap-6">
                <a className="font-inter font-normal text-gray-400">Sudah mempunyai akun? </a>
                <Button variant="light" className="font-sans text-kuning"> Masuk </Button>
              </div>
            </div>

          </div>
        )}

        {/* Form Step 2 */}
        {step === 2 && (
          <div className="flex flex-col w-full mt-10 gap-3">
            <Input
              type="text"
              label="Nama"
              variant="bordered"
              placeholder="Masukkan nama lengkap Anda"
              className="w-full"
            />

            <Input
              type="text"
              label="Nomor Telepon"
              variant="bordered"
              placeholder="Masukkan nomor telepon Anda"
              className="w-full"
            />

            <DateInput label="Tanggal Lahir" variant="bordered" className="w-full" />

            <Input
              type="text"
              label="Sosial Media"
              variant="bordered"
              placeholder="Masukkan akun Anda"
              className="w-full"
            />

            <Input
              type="text"
              label="Alamat"
              variant="bordered"
              placeholder="Masukkan alamat Anda"
              className="w-full"
            />

            <div className="flex flex-row justify-between items-center w-full mt-5">
              <Button onClick={handlePrevious} variant="ghost" className="font-sans text-black bg-white">Sebelumnya</Button>
              <Button variant="light" className="font-sans text-white bg-kuning2 font-semibold">Daftar</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Regist;
