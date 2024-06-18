import { ImHome } from "react-icons/im";
import { BsInfoSquareFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export const navItems = [
  {
    title: "Home",
    href: "/",
    icon: <ImHome />,
  },
  {
    title: "About Us",
    href: "/about-us",
    icon: <BsInfoSquareFill />,
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    icon: <GrMail />,
  },
];
