import React, { ChangeEvent } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button,
  Image,
} from "@nextui-org/react";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";
import useAuthCheck from "@/hooks/common/auth";  // Pastikan path ini benar

type NavbarProps = {
  handleConsultationClick: () => void;
  searchTerm: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  userData: {
    email: string;
    profilePicture: string | null;
    fullName: string;
  } | null;
  onLogout: () => void;
};

const NavbarComponent: React.FC<NavbarProps> = ({
  handleConsultationClick,
  searchTerm,
  onSearchChange,
  userData,
  onLogout,
}) => {
  const isLogged = useAuthCheck(); // Menggunakan hook useAuthCheck untuk mengecek status login

  return (
    <Navbar isBordered className="bg-white py-2 inline-flex mx-auto gap-20">
      <NavbarContent justify="start" className="flex-none ">
        <Image
          src={images.my_Beauty_logo.src}
          alt="Logo"
          className="object-cover w-[70px] h-[46px]"
        />
      </NavbarContent>

      <NavbarContent className="items-center gap-4 flex" justify="start">
        <NavbarContent className="hidden xl:flex gap-16 font-playfair font-semibold">
          <NavbarItem>
            <Link color="foreground" href="#" className="text-ungu px-5 text-[20px]">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              onClick={handleConsultationClick}
              className="cursor-pointer text-zinc px-5 text-[20px]"
            >
              Konsultasi
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem]",
            mainWrapper: "h-full p-0",
            input:
              "text-gray-400 text-sm font-normal font-['Open Sans'] leading-[14px] dark:placeholder-gray-500",
            inputWrapper:
              "h-1/2 font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="I'm looking for..."
          size="sm"
          endContent={<icons.SearchIcon size={18} />}
          type="search"
          radius="full"
          value={searchTerm}
          onChange={onSearchChange}
        />

        <Dropdown
          placement="bottom-end"
          className="hidden xl:flex items-center gap-2 font-openSans text-zinc"
        >
          <DropdownTrigger>
            <div className="xl:flex items-center hidden gap-2">
              <Avatar
                showFallback
                name={userData?.fullName || "Jane Doe"}
                src={userData?.profilePicture || "https://api.dicebear.com/9.x/thumbs/svg?seed=Felix"}
                className="bg-ungu2 text-white font-inter"
              />
              {!isLogged ? ( // Jika pengguna belum login, tampilkan tombol login
                <Button isIconOnly variant="light">
                  Login
                </Button>
              ) : (
                <p className="font-semibold hidden">{userData?.email || "zoey@example.com"}</p>
              )}
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{userData?.email || "zoey@example.com"}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={onLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="xl:hidden">
          <DropdownTrigger>
            <Button isIconOnly variant="light" className="xl:hidden">
              <icons.MenuIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{userData?.email || "zoey@example.com"}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={onLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
