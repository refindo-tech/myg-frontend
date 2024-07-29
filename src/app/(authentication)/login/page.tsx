"use client";
import React, { useState } from "react";
import { Input, Button, Checkbox, Image } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
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
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    try {
      const response = await loginUser(formData.email, formData.password);
      if (response) {
        console.log('User logged in successfully:', response);
        
        // Set accessToken in session storage
        sessionStorage.setItem('accessToken', response.results.accessToken);
        // Set refreshToken in cookie

        router.push('myBeautica/home');
      } else {
        setErrors([{ instancePath: '', message: 'Login failed. Please check your credentials and try again.' }]);
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error('Error logging in user:', error.message);
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
      <div className="flex flex-col flex-grow mx-auto items-center justify-center px-3 md:ml-0 md:px-28 xl:pr-48 xl:w-[40%] xl:flex-grow xl:h-full">
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
              isInvalid={!!errors.find((err) => err.instancePath === "/email")}
              errorMessage={
                errors.find((err) => err.instancePath === "/email")?.message
              }
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
              isInvalid={
                !!errors.find((err) => err.instancePath === "/password")
              }
              errorMessage={
                errors.find((err) => err.instancePath === "/password")?.message
              }
            />

            <div className="flex justify-between items-center w-full">
              <Checkbox
                className="font-inter text-gray-700"
                aria-label="Remember me"
              >
                Remember me
              </Checkbox>
            </div>

            <div className="flex flex-row justify-between items-center w-full mt-5">
              <Button
                type="submit"
                variant="light"
                className="w-full font-sans text-white bg-kuning2 font-semibold"
                aria-label="Login"
              >
                Login
              </Button>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center w-full mt-5">
              <span className="font-normal text-gray-600"> atau </span>

              <Button
                startContent={<icons.GoogleIcon />}
                variant="bordered"
                className="w-full font-sans"
                aria-label="Sign in with Google"
              >
                Sign in with Google
              </Button>

              <Button
                startContent={<icons.FacebookIcon />}
                color="primary"
                className="w-full font-sans"
                aria-label="Sign in with Facebook"
              >
                Sign in with Facebook
              </Button>

              <div className="flex items-center w-full gap-6 mt-5">
                <span className="font-inter font-normal text-gray-400">
                  Belum punya akun?{" "}
                </span>
                <Button
                  variant="light"
                  className="font-sans text-kuning"
                  aria-label="Daftar"
                  onClick={() => router.push("/register")}
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
