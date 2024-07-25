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
import images from "../../../public/images/images";

type NavbarProps = {
  handleConsultationClick: () => void;
  searchTerm: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const NavbarComponent: React.FC<NavbarProps> = ({
  handleConsultationClick,
  searchTerm,
  onSearchChange,
}) => {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Image
            src={images.my_Beauty_logo.src}
            alt="Logo"
            className="object-cover w-[70px] h-[46px]"
          />
        </NavbarBrand>
        <NavbarContent className="hidden xl:flex gap-16 font-playfair font-semibold">
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              onClick={handleConsultationClick}
              className="cursor-pointer text-zinc"
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
            <div className="xl:flex items-center hidden">
              <Avatar
                showFallback
                name="Jane Doe"
                src="https://images.unsplash.com/broken"
                className="bg-ungu2 text-white font-inter"
              />
              <Button isIconOnly variant="light">
                Login
              </Button>
            </div>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="logout" color="danger">
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
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Profile</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
