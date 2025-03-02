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
import { useRouter } from "next/navigation";
import icons from "@/components/icons/icon";
import images from "../../../../public/images/images";
import useAuthCheck from "@/hooks/common/auth"; // Pastikan path ini benar

//component
import BurguerButton from "@/components/adminComponent/navbar/burguer-button"; // Pastikan path ini benar

type NavbarProps = {
  userData: {
    email: string;
    profilePicture: string | null;
    fullName: string;
  } | null;
  onLogout: () => void;
};

const NavbarComponent: React.FC<NavbarProps> = ({
  userData,
  onLogout,
}) => {
  const isLogged = useAuthCheck();
  const router = useRouter();

  const handleLogin = () => {
    // console.log("Login clicked");
    router.push("/login");
  };

  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar isBordered className="bg-white py-2 inline-flex mx-auto gap-20">
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent as="div" className="items-center" justify="end">

          <Dropdown
            placement="bottom-end"
            className="hidden xl:flex items-center gap-2 font-openSans text-zinc"
          >
            <DropdownTrigger>
              <div className="xl:flex items-center hidden gap-2">
                <Avatar
                  showFallback
                  name={userData?.fullName || "Jane Doe"}
                  src={
                    userData?.profilePicture ||
                    "https://api.dicebear.com/9.x/thumbs/svg?seed=Felix"
                  }
                  className="bg-ungu2 text-white font-inter"
                />
                {!isLogged ? ( // Jika pengguna belum login, tampilkan tombol login
                  <Button isIconOnly variant="light" onClick={handleLogin}>
                    Login
                  </Button>
                ) : (
                  <p className="font-semibold hidden">
                    {userData?.email || "zoey@example.com"}
                  </p>
                )}
              </div>
            </DropdownTrigger>
            {isLogged && (
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">
                    {userData?.email || "zoey@example.com"}
                  </p>
                </DropdownItem>
                {/* <DropdownItem key="settings">My Profile</DropdownItem> */}
                <DropdownItem key="logout" color="danger" onClick={onLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            )}
          </Dropdown>

          {isLogged && (
            <Dropdown className="md:hidden">
              <DropdownTrigger>
                <Button isIconOnly variant="light" className="md:hidden">
                  <icons.MenuIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">
                    {userData?.email || "zoey@example.com"}
                  </p>
                </DropdownItem>
                <DropdownItem key="settings">My Profile</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={onLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
