"use client";
import React, { useState, useMemo } from "react";
import { Input, Button, Checkbox, Image } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { loginUser } from "@/lib/authentication/fetchData";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";

interface LoginData {
  email: string;
  password: string;
}

interface ValidationError {
  instancePath: string;
  message: string;
}

export function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginData>({ email: '', password: '' });
  const [touchedFields, setTouchedFields] = useState({ email: false, password: false });
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isEmailInvalid = useMemo(() => {
    if (!touchedFields.email) return false;
    return !validateEmail(formData.email);
  }, [formData.email, touchedFields.email]);

  const isPasswordInvalid = useMemo(() => {
    if (!touchedFields.password) return false;
    return formData.password.length < 6;
  }, [formData.password, touchedFields.password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setTouchedFields((prevFields) => ({
      ...prevFields,
      [name]: true,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
  
    if (isEmailInvalid || isPasswordInvalid) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please provide a valid email and a password with at least 6 characters.",
      });
      return;
    }
  
    Swal.fire({
      icon: "info",
      title: "Logging in...",
      showConfirmButton: false,
      timer: 1000
    });
  
    try {
      const response = await loginUser(formData.email, formData.password);
      if (response) {
        console.log('User logged in successfully:', response);
  
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Berhasil Login!",
          showConfirmButton: false,
          timer: 2000
        });
  
        sessionStorage.setItem('accessToken', response.results.accessToken);
        router.push('dashboard/');
      }
    } catch (error: any) {
      console.error('Login failed:', error);
  
      if (error.status === 404 && error.data.message === 'User not found') {
        Swal.fire({
          icon: "error",
          title: "Email tidak terdaftar",
          text: "Email yang Anda masukkan belum terdaftar. Silakan periksa kembali atau daftar akun baru.",
        });
      } else if (error.status === 401 && error.data.message === 'Invalid password') {
        Swal.fire({
          icon: "error",
          title: "Password salah",
          text: "Password yang Anda masukkan salah. Silakan coba lagi.",
        });

      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong during login!"
        });
      }
  
      if (error.data && error.data.errors) {
        setErrors(error.data.errors);
      } else {
        setErrors([{ instancePath: '', message: 'An unexpected error occurred. Please try again later.' }]);
      }
    }
  };

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
      <div className="flex flex-col flex-grow mx-auto items-center justify-center px-3 md:ml-0 xl:pr-48 xl:w-[40%] xl:flex-grow xl:h-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full text-left flex justify-center">
            <Image
              src={images.myg_logo.src}
              alt="Logo"
              className="object-cover w-32 xl:w-56"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full mt-10 gap-3"
          >
            <Input
              isRequired
              type="email"
              label="Email"
              variant="bordered"
              placeholder="Masukkan email Anda"
              className="w-full"
              aria-label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={isEmailInvalid}
              errorMessage={isEmailInvalid ? "Please enter a valid email." : undefined}
            />

            <Input
              label="Password"
              variant="bordered"
              placeholder="Masukkan password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={
                    isPasswordVisible ? "Hide password" : "Show password"
                  }
                >
                  {isPasswordVisible ? (
                    <icons.EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <icons.EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isPasswordVisible ? "text" : "password"}
              className="w-full"
              aria-label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={isPasswordInvalid}
              errorMessage={isPasswordInvalid ? "Password harus memiliki minimal 6 karakter" : undefined}
            />

            <div className="flex justify-between items-center w-full">
              <Checkbox
                className="font-inter text-gray-700"
                aria-label="Remember me"
              >
                Remember me
              </Checkbox>
              <Button variant="light" className="font-sans text-kuning" aria-label="Lupa Password">Lupa Password?</Button>
            </div>

            <div className="flex flex-row justify-between items-center w-full mt-3">
              <Button
                type="submit"
                variant="light"
                className="w-full font-sans text-white bg-kuning2 font-semibold"
                aria-label="Login"
              >
                Login
              </Button>
            </div>

            <div className="flex flex-col gap-5 justify-center w-full">

              <div className="flex items-center w-full gap-6">
                <span className="font-inter font-normal text-gray-400">
                  Belum punya akun?{" "}
                </span>
                <Button
                  variant="light"
                  className="font-sans text-kuning"
                  aria-label="Daftar"
                  onClick={() => router.push("/regist")}
                >
                  {" "}
                  Daftar{" "}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
