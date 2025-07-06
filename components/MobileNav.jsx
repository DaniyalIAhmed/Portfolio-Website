"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "services",
    path: "/services",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className='bg-primary flex flex-col'>
        <nav className="flex flex-col pt-8 gap-5">
          {
            links.map((link, index) => (
              <Link key={index} href={link.path} className={`py-4 px-8 ${pathname === link.path ? "text-accent border-[1px] border-accent rounded-[5px]" : "text-white"} capitalize text-center`}>
                  {link.name}
              </Link>
            ))
          }
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
