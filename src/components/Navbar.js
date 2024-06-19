"use client";
import { navItems } from "@/data/navItems";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Navbar } from "flowbite-react";

const Header = () => {
  // const pathname = usePathname();
  const pathname = usePathname();
  return (
    <Navbar fluid rounded className="fixed w-full z-50 mynav">
      <Navbar.Brand as={Link} href="/">
        <Image
          src="/logo.svg"
          className="mr-3 h-6 sm:h-9"
          width={40}
          height={40}
          alt="Sky Blogs Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Sky Blogs
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navItems.map((item) => (
          <Navbar.Link
            as={Link}
            href={item.href}
            active={pathname === item.href}
            className="flex items-center gap-2"
            key={item.title}
          >
            {item.title}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
