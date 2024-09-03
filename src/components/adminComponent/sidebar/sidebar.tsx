// import React from "react";
// import { Sidebar } from "./sidebar.styles";
// import { Tooltip } from "@nextui-org/react";
// import { HomeIcon } from "../icon";
// import { UserIcon } from "../icon";
// import { BookIcon } from "../icon";
// import { ProductIcon } from "../icon";
// import { PenjualanIcon } from "../icon";
// import { LayananIcon } from "../icon";
// import { TestimonialIcon } from "../icon";
// import { LogoutIcon } from "../icon";
// import { usePathname } from "next/navigation";
// import { useSidebarContext } from "../layout/layout-context";
// import {Image} from "@nextui-org/react";
// import { SidebarItem } from "./sidebar-item";
// import { SidebarMenu } from "./sidebar-menu";

// const defaultLogo = "/assets/images/logo/myg.png"

// export const SidebarWrapper = () => {
//     const pathname = usePathname();
//     const { collapsed, setCollapsed } = useSidebarContext();

//     return (
//         <aside className="h-screen z-[20] sticky top-0">
//             {collapsed ? (
//                 <div className={Sidebar.Overlay()} onClick={setCollapsed} />
//             ) : null}
//             <div
//                 className={Sidebar({ collapsed, })}>
//                     <div className={Sidebar.Header()}>
//                         {/* taruh logo di sini */}
//                         <Image src={defaultLogo} sizes="lg" />
//                     </div>

//                     <div className="flex flex-col justify-between h-full">
//                         <div className={Sidebar.Body()}>
//                             <SidebarItem
//                                 href="/dashboard"
//                                 title="Home"
//                                 icon={<HomeIcon />}
//                                 isActive={pathname === "/"}
//                             />

//                             <SidebarMenu title="Manajemen Akun">
//                                 <SidebarItem
//                                     href="/"
//                                     title="admin"
//                                     icon={<UserIcon />}
//                                     isActive={pathname === "/"}
//                                 />
//                                 <SidebarItem
//                                     href="/"
//                                     title="User"
//                                     icon={<UserIcon />}
//                                     isActive={pathname === "/"}
//                                 />
//                             </SidebarMenu>

//                             <SidebarMenu title="General">
//                                 <SidebarItem
//                                     href="/"
//                                     title="MY Academy"
//                                     icon={<BookIcon />}
//                                     isActive={pathname === "/"}
//                                 />

//                                 <SidebarItem
//                                     href="/"
//                                     title="Produk"
//                                     icon={<ProductIcon />}
//                                     isActive={pathname === "/"}
//                                 />

//                                 <SidebarItem
//                                     href="/"
//                                     title="Penjualan Produk"
//                                     icon={<PenjualanIcon />}
//                                     isActive={pathname === "/"}
//                                 />

//                                 <SidebarItem
//                                     href="/"
//                                     title="Pelayanan"
//                                     icon={<LayananIcon />}
//                                     isActive={pathname === "/"}
//                                 />

//                                 <SidebarItem
//                                     href="/"
//                                     title="Testimonial"
//                                     icon={<TestimonialIcon />}
//                                     isActive={pathname === "/"}
//                                 />
//                             </SidebarMenu>

//                         </div>

//                         <div className={Sidebar.Footer()}>
//                             <Tooltip content="Logout" placement="right">
//                                 <SidebarItem
//                                     href="/"
//                                     title="Logout"
//                                     icon={<LogoutIcon />}
//                                 />
//                             </Tooltip>
//                         </div>
//                     </div>
//             </div>
//         </aside>
//     )
// };

import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Tooltip } from "@nextui-org/react";
import { HomeIcon } from "../icon";
import { UserIcon } from "../icon";
import { BookIcon } from "../icon";
import { ProductIcon } from "../icon";
import { PenjualanIcon } from "../icon";
import { LayananIcon } from "../icon";
import { TestimonialIcon } from "../icon";
import { LogoutIcon } from "../icon";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "../layout/layout-context";
import { Image } from "@nextui-org/react";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";

const defaultLogo = "/assets/images/logo/myg.png";

type SidebarWrapperProps = {
  onToggle: (isOpen: boolean) => void;
};

export const SidebarWrapper: React.FC<SidebarWrapperProps> = ({ onToggle }) => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  React.useEffect(() => {
    onToggle(collapsed);
  }, [collapsed, onToggle]);

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div className={Sidebar({ collapsed })}>
        <div className={Sidebar.Header()}>
          {/* taruh logo di sini */}
          <Image src={defaultLogo} sizes="lg" />
        </div>

        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              href="/dashboard"
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
            />

            <SidebarMenu title="Manajemen Akun">
              <SidebarItem
                href="/"
                title="admin"
                icon={<UserIcon />}
                isActive={pathname === "/"}
              />
              <SidebarItem
                href="/"
                title="User"
                icon={<UserIcon />}
                isActive={pathname === "/"}
              />
            </SidebarMenu>

            <SidebarMenu title="General">
              <SidebarItem
                href="/"
                title="MY Academy"
                icon={<BookIcon />}
                isActive={pathname === "/"}
              />

              <SidebarItem
                href="/"
                title="Produk"
                icon={<ProductIcon />}
                isActive={pathname === "/"}
              />

              <SidebarItem
                href="/"
                title="Penjualan Produk"
                icon={<PenjualanIcon />}
                isActive={pathname === "/"}
              />

              <SidebarItem
                href="/"
                title="Pelayanan"
                icon={<LayananIcon />}
                isActive={pathname === "/"}
              />

              <SidebarItem
                href="/"
                title="Testimonial"
                icon={<TestimonialIcon />}
                isActive={pathname === "/"}
              />
            </SidebarMenu>
          </div>

          <div className={Sidebar.Footer()}>
            <Tooltip content="Logout" placement="right">
              <SidebarItem
                href="/"
                title="Logout"
                icon={<LogoutIcon />}
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
