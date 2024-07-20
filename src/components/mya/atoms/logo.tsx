import Image from "next/image";
import logo from "@assets/images/mya/logo.png";

const MyaLogo = ({ width = 75.5, height = 75.5 }) => {
  return <Image src={logo} alt="Mya Logo" width={width} height={height} />;
};

export default MyaLogo;
