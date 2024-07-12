"use client";
import React, { useState } from "react";
import { Input, Button, Checkbox, Image } from "@nextui-org/react";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";

export function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

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
        <Image
          src={images.myg_logo.src}
          alt="Logo"
          className="object-cover mt-24 w-32"
        />

        <div className="flex flex-col w-full my-12 gap-3">
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
            placeholder="Enter your password"
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
        </div>

        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <Button variant="light" className="w-full font-sans text-white bg-kuning2">Masuk</Button>

          <a className="font-normal text-gray-600"> atau </a>

          <Button startContent={<icons.GoogleIcon/>} variant="bordered" className="w-full font-sans">Sign in with Google</Button>

          <Button startContent={<icons.FacebookIcon/>} color="primary" className="w-full font-sans">Sign in with Facebook</Button>

          <div className="flex gap-6 items-center w-full">
            <a className="font-inter font-normal text-gray-400">Belum mempunyai akun? </a>
            <Button variant="light" className="font-sans text-kuning"> Daftar akun </Button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;
