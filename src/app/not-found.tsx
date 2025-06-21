"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import "../app/globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function NotFound() {
  return (
    <NextUIProvider> {/* Tambahkan NextUIProvider di sini */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-[#FEF5F5] via-[#FFF7CC] to-[#FEF5F5] p-4 overflow-hidden">
        <div className="w-full max-w-md p-8 mx-auto text-center rounded-2xl shadow-2xl bg-white relative overflow-hidden">
          {/* Konten yang sama seperti sebelumnya */}
          <div className="relative z-10">
            <div className="mb-6">
              <div className="relative mx-auto w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-[#06ADFE]/10 animate-pulse"></div>
                
                <div className="absolute flex items-center justify-center inset-0">
                  <svg
                    className="w-16 h-16 text-[#B680A2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-[#B680A2] mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-600 mb-8">
              Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                color="primary"
                className="bg-[#06ADFE] text-white font-medium"
                onClick={() => window.history.back()}
              >
                Kembali
              </Button>
              
              <Button 
                as={Link}
                href="/"
                color="secondary"
                className="bg-[#B680A2] text-white font-medium"
              >
                Halaman Utama
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} MYG
          </div>
        </div>
      </div>
    </NextUIProvider>
  );
}