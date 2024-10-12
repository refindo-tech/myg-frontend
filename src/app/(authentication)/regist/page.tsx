"use client";
import React, { useState, useMemo } from "react";
import { Input, Button, Checkbox, Image, Progress } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import api from '@/axios/axiosConfig';
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";
import { InstagramIcon } from '@/components/mya/icons';

interface UserProfile {
  fullName: string;
  phoneNumber: string;
  birthdate: string;
  socialMedia: string;
  address: string;
}

interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  userProfile: UserProfile;
}

interface ValidationError {
  instancePath: string;
  message: string;
}

export function Regist() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [formData, setFormData] = useState<RegisterData>({
    email: '',
    password: '',
    confirmPassword: '',
    userProfile: {
      fullName: '',
      phoneNumber: '',
      birthdate: '',
      socialMedia: '',
      address: ''
    }
  });
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 2));
  const handlePrevious = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      userProfile: {
        ...prevData.userProfile,
        [name]: value
      }
    }));
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
  };

  const validateEmail = (value: string) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const isEmailInvalid = useMemo(() => {
    if (!touchedFields.email) return false;
    return !validateEmail(formData.email);
  }, [formData.email, touchedFields.email]);

  const isPasswordInvalid = useMemo(() => {
    if (!touchedFields.password) return false;
    return formData.password.length < 6;
  }, [formData.password, touchedFields.password]);

  const isConfirmPasswordInvalid = useMemo(() => {
    if (!touchedFields.confirmPassword) return false;
    return formData.password !== formData.confirmPassword;
  }, [formData.password, formData.confirmPassword, touchedFields.confirmPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
  
    if (isPasswordInvalid) {
      Swal.fire({
        icon: "error",
        title: "Password terlalu pendek",
        text: "Password harus memiliki minimal 6 karakter.",
      });
      return;
    }
  
    if (isConfirmPasswordInvalid) {
      Swal.fire({
        icon: "error",
        title: "Password tidak cocok",
        text: "Password dan Confirm Password tidak sama.",
      });
      return;
    }
  
    try {
      const formattedData = {
        ...formData,
        userProfile: {
          ...formData.userProfile,
          birthdate: new Date(formData.userProfile.birthdate).toISOString() // Format birthdate to ISO 8601
        }
      };
  
      const response = await api.post('/myg/auth/register', formattedData);
      console.log('User registered successfully:', response.data);
      Swal.fire({
        icon: "success",
        title: "Pendaftaran Berhasil",
        text: "Akun Anda berhasil didaftarkan. Silakan login.",
      });
      router.push('/login');
    } 
    
    catch (error: any) {
      console.error('Registration failed:', error);
  
      const errorType = error.response?.data?.errorType;
  
      switch (errorType) {
        case 'EMAIL_DUPLICATE':
          Swal.fire({
            icon: "error",
            title: "Email Sudah Terdaftar",
            text: "Email yang Anda masukkan sudah digunakan. Silakan gunakan email lain atau login dengan email tersebut.",
          });
          break;
  
        case 'PASSWORD_MISMATCH':
          Swal.fire({
            icon: "error",
            title: "Password Tidak Cocok",
            text: "Password dan konfirmasi password tidak cocok. Silakan periksa kembali.",
          });
          break;
  
        case 'VALIDATION_ERROR':
          Swal.fire({
            icon: "error",
            title: "Input Tidak Valid",
            text: "Ada kesalahan pada data yang Anda masukkan. Silakan periksa dan coba lagi.",
          });
          break;
  
        default:
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response?.data?.message || "Terjadi kesalahan saat pendaftaran!",
          });
          break;
      }
  
      if (error.response?.data?.errors) {
          setErrors(error.response.data.errors);
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
      <div className="flex flex-col flex-grow mx-auto items-center justify-center px-3 md:ml-0 md:px-0 xl:pr-48 xl:w-[40%] xl:flex-grow xl:h-full">
        <div className="flex flex-col gap-6 w-full">
          <div className="w-full text-left">
            <h1 className="text-2xl font-bold font-playfair tracking-wider md:text-4xl xl:text-4xl">Daftar Akun</h1>
            <p className="mt-2 text-sm font-normal font-openSans tracking-widest text-gray-600 md:text-xl xl:text-2xl">
              Lengkapi data berikut untuk melanjutkan pendaftaran
            </p>
          </div>

          <div className="flex items-center justify-center pb-6 border-b-medium w-full">
            <div className="flex items-center w-full justify-center space-x-4">
              <div className={`flex items-center justify-center w-[26px] h-[26px] rounded-full ${step === 1 ? "bg-kuning2" : "bg-gray-200"} text-10px text-white font-semibold md:w-[40px] md:h-[40px] md:text-lg`}>1</div>
              <div className="w-[150px] mx-4 md:w-[220px]">
                <Progress value={step === 1 ? 50 : 100} classNames={{ indicator: "bg-kuning2" }}/>
              </div>
              <div className={`flex items-center justify-center w-[26px] h-[26px] rounded-full ${step === 2 ? "bg-kuning2" : "bg-gray-200"} text-10px text-white font-semibold md:w-[40px] md:h-[40px] md:text-lg`}>2</div>
            </div>
          </div>
        </div>

        {/* Form Step 1 */}
        {step === 1 && (
          <form onSubmit={handleNext} className="flex flex-col w-full mt-10 gap-3">
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
              color={isEmailInvalid ? "danger" : "success"}
              errorMessage={isEmailInvalid ? "Please enter a valid email" : ""}
            />
            {errors.find(err => err.instancePath === '/email') && <p>{errors.find(err => err.instancePath === '/email')?.message}</p>}

            <Input
              label="Password"
              variant="bordered"
              placeholder="Masukkan password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={isPasswordVisible ? "Hide password" : "Show password"}
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
              errorMessage={isPasswordInvalid ? "Password harus memiliki minimal 6 karakter" : ""}
            />
            {errors.find(err => err.instancePath === '/password') && <p>{errors.find(err => err.instancePath === '/password')?.message}</p>}

            <Input
              label="Confirm Password"
              variant="bordered"
              placeholder="Masukkan kembali password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  aria-label={isConfirmPasswordVisible ? "Hide confirm password" : "Show confirm password"}
                >
                  {isConfirmPasswordVisible ? (
                    <icons.EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <icons.EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isConfirmPasswordVisible ? "text" : "password"}
              className="w-full"
              aria-label="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              isInvalid={isConfirmPasswordInvalid}
              errorMessage={isConfirmPasswordInvalid ? "Password dan Confirm Password tidak sama" : ""}
            />
            {errors.find(err => err.instancePath === '/confirmPassword') && <p>{errors.find(err => err.instancePath === '/confirmPassword')?.message}</p>}

            <div className="flex flex-row justify-between items-center w-full mt-5">
              <Button onClick={handleNext} variant="light" className="w-full font-sans text-white bg-kuning2 font-semibold" aria-label="Selanjutnya">Selanjutnya</Button>
            </div>

            <div className="flex flex-col gap-5 justify-center items-center w-full">
              <div className="flex items-center w-full gap-6">
                <span className="font-inter font-normal text-gray-400">Sudah mempunyai akun? </span>
                <Button
                  variant="light"
                  className="font-sans text-kuning"
                  aria-label="Masuk"
                  onClick={() => router.push("/login")}
                >
                  {" "}
                  Masuk{" "}
                </Button>
              </div>
            </div>

          </form>
        )}

        {/* Form Step 2 */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="flex flex-col w-full mt-10 gap-3">
            <Input
              type="text"
              label="Nama"
              variant="bordered"
              placeholder="Masukkan nama lengkap Anda"
              className="w-full"
              aria-label="Nama"
              name="fullName"
              value={formData.userProfile.fullName}
              onChange={handleProfileChange}
            />

            <Input
              type="text"
              label="Nomor Telepon"
              variant="bordered"
              placeholder="Masukkan nomor telepon Anda"
              className="w-full"
              aria-label="Nomor Telepon"
              name="phoneNumber"
              value={formData.userProfile.phoneNumber}
              onChange={handleProfileChange}
            />

            <Input
              type="date"
              label="Tanggal Lahir"
              variant="bordered"
              className="w-full"
              aria-label="Tanggal Lahir"
              name="birthdate"
              value={formData.userProfile.birthdate}
              onChange={handleProfileChange}
            />
            {errors.find(err => err.instancePath === '/userProfile/birthdate') && <p>{errors.find(err => err.instancePath === '/userProfile/birthdate')?.message}</p>}

            <Input
              type="text"
              label="Sosial Media (Instagram)"
              variant="bordered"
              placeholder="Masukkan akun Anda"
              className="w-full"
              aria-label="Sosial Media"
              name="socialMedia"
              startContent={<InstagramIcon />}
              value={formData.userProfile.socialMedia}
              onChange={handleProfileChange}
            />

            <Input
              type="text"
              label="Alamat"
              variant="bordered"
              placeholder="Masukkan alamat Anda"
              className="w-full"
              aria-label="Alamat"
              name="address"
              value={formData.userProfile.address}
              onChange={handleProfileChange}
            />

            <div className="flex flex-row justify-between items-center w-full mt-5">
              <Button onClick={handlePrevious} variant="ghost" className="font-sans text-black bg-white" aria-label="Sebelumnya">Sebelumnya</Button>
              <Button type="submit" variant="light" className="font-sans text-white bg-kuning2 font-semibold" aria-label="Daftar">Daftar</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Regist;
