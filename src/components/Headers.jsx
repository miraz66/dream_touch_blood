import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TestModal from "../utils/Modle";
import UserProfileModel from "./UserProfileModel";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Campaign", href: "/campaign" },
  { name: "Group", href: "/group" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="py-3 px-2 2xl:py-4 sm:px-8 lg:px-10">
              <div className="md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto flex max-lg:flex-wrap h-16 items-center lg:justify-between justify-center">
                <div className="inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex items-center">
                    <a
                      className="text-gray-400 lg:text-center font-bold text-3xl lg:text-4xl 2xl:text-5xl"
                      href="http://localhost:5173/"
                    >
                      <span className="text-red-500">Blood</span>{" "}
                      <span className="font-serif">Donate</span>
                    </a>
                  </div>
                </div>

                <div className="relative ml-10 lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 cursor-pointer hover:text-gray-700"
                    onClick={() => setIsModalOpen(!isModalOpen)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  {isModalOpen && (
                    <TestModal
                      css={"absolute top-14 right-0"}
                      onClose={() => setIsModalOpen(!isModalOpen)}
                    >
                      <UserProfileModel />
                    </TestModal>
                  )}
                </div>

                <div
                  className="absolute inset-y-0 right-0 flex md:items-center pr-2 sm:static 
                              sm:inset-auto sm:ml-6 sm:pr-0"
                >
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex lg:space-x-2">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              "px-3 font-medium" +
                              (!isActive
                                ? "after:content-[' '] after:bg-red-500 after:m-auto after:block after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointer xl:text-lg"
                                : "cursor-pointer border-b-2 border-black")
                            );
                          }}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>

                  <div className="relative ml-10 max-lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-10 h-10 cursor-pointer hover:text-gray-700"
                      onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    {isModalOpen && (
                      <TestModal
                        css={"absolute top-14 right-0"}
                        onClose={() => setIsModalOpen(!isModalOpen)}
                      >
                        <UserProfileModel />
                      </TestModal>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 w-full px-2 pt-2 pb-3 bg--300 backdrop-filter backdrop-blur-lg absolute">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block hover:underline uppercase rounded-md px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
