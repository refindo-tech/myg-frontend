"use client"
import React, { useState, useEffect } from "react";
import { Input, Button, Checkbox } from '@nextui-org/react';
import { EyeIcon } from '@heroicons/react/16/solid';
import { EyeSlashIcon } from '@heroicons/react/16/solid';


const Login: React.FC = () => {

    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
      <div className='flex'>
        <div className="w-[986px] h-[1000px] absolute left-[40px] top-[40px] bg-yellow-400 rounded-[42px] shadow-lg"></div>
        <div className="w-[682px] h-[682px] absolute left-[319px] top-[228px] bg-yellow-300 rounded-full"></div>
        <img
          className="w-[662px] h-[880px] absolute left-[533px] top-[160px] object-cover"
          src="/mnt/data/Login.jpg"
          alt="Skincare"
        />
        <div className="absolute left-[112px] top-[228px] flex flex-col justify-start items-start gap-3">
          <div className="text-yellow-700 text-7xl font-normal leading-[72px] font-['Playfair Display']">Join Us!</div>
          <div className="relative w-[540px] h-[260px]">
            <div className="absolute left-0 top-0 text-yellow-50 text-9xl font-semibold leading-[128px] font-['Playfair Display']">MYG</div>
            <div className="absolute left-[51px] top-[132px] text-yellow-200 text-9xl font-semibold leading-[128px] font-['Playfair Display']">Essentia</div>
          </div>
        </div>
        <div className="absolute left-[1227px] top-[176px] flex flex-col justify-start items-center gap-[58px]">
          <img className="w-[160.07px] h-[111px]" src="/vercel.svg" alt="Logo" />
          <div className="flex flex-col justify-start items-center gap-7">
            <div className="flex flex-col justify-center items-center gap-5 w-full">
              <Input
                isRequired
                type="email"
                label="Email"
                placeholder="Masukkan email Anda"
                className="w-full flex-wrap md:flex-nowrap"
              />
               <Input
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                        <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                        <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                    </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-xs"
               />
              <div className="flex justify-between items-center w-full max-w-xs">
                <Checkbox>Remember me</Checkbox>
                <Button>Lupa Password?</Button>
              </div>
            </div>
            <Button className="w-full max-w-xs bg-yellow-400 text-white">Masuk</Button>
            <div className="text-zinc-600 text-lg font-normal">atau</div>
            <div className="flex flex-col justify-center items-center gap-5 w-full">
              <Button className="w-full max-w-xs bg-white text-slate-700 border border-gray-300">Sign in with Google</Button>
              <Button className="w-full max-w-xs bg-blue-600 text-white">Sign in with Facebook</Button>
            </div>
            <div className="flex justify-start items-center gap-1">
              <div className="text-zinc-600 text-lg font-normal">Belum mempunyai akun?</div>
              <Button className="text-yellow-500">Daftar akun</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Login;
  