"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    //Handle logout in the future
  };

  return (
    <div
      className={twMerge(
        `
    h-fit 
    bg-gradient-to-b 
    from-emerald-800
    p-6
    `,
        className
      )}
    >
      <div
        className="
          w-full
          mb-4
          flex
          items-center
          justify-between

        "
      >
        <div
          className="
              hidden
              md:flex gap-x-2
              item-center

            "
        >
          <button
            onClick={() => router.back()}
            className="
                rounded-full
                bg-black
                flex
                item-center
                justify-center
                hover:opacity-75
                transition
                "
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="
                rounded-full
                bg-black
                flex
                item-center
                justify-center
                hover:opacity-75
                transition
                "
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div
          className="
            flex md:hidden gap-x-2 item-center 
            "
        >
          <button
            className="
                    rounded-full
                    p-2
                    bg-white
                    flex
                    item-center
                    justify-center
                    hover:opacity-75
                    transition
                    "
          >
            <HiHome className="text-black" size={20} />
          </button>
          <button
            className="
                    rounded-full
                    p-2
                    bg-white
                    flex
                    item-center
                    justify-center
                    hover:opacity-75
                    transition
                    "
          >
            <BiSearch className="text-black" size={20} />
          </button>
        </div>
        <div
          className="
             flex justify-between items-center gap-x-4
            "
        >
          <>
            <div
              className="
                "
            >
              <Button
                onClick={() => {}}
                className="
                    bg-transparent
                    text-neutral-300
                    font-medium
                    "
              >
                SignUp
              </Button>
            </div>
            <div
              className="
                "
            >
              <Button onClick={() => {}} className="bg-white px-6 py-2">
                LogIn
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
