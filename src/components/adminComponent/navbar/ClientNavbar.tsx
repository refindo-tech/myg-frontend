'use client';

import React from "react";
import NavbarComponent from "./navbar"; // Sesuaikan path

type ClientNavbarProps = {
  userData: {
    email: string;
    profilePicture: string | null;
    fullName: string;
  } | null;
  onLogout: () => void;
};

const ClientNavbar: React.FC<ClientNavbarProps> = (props) => {
  return <NavbarComponent {...props} />;
};

export default ClientNavbar;