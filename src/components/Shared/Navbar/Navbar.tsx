"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import logo from "../../../../public/images/logo.png"
import {
  Home,
  Settings,
  Menu,
  X,
  Contact,

  Code2,
  LayoutDashboard,
} from "lucide-react";


import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  gradient: string;
  iconColor: string;
}

const navItems: NavItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    path: "/", // hrefs to <Route path="/" element={<Home />} />
    gradient:
      "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    label: "Projects",
    path: "/projects",
    gradient:
      "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "About",
    path: "/about",
    gradient:
      "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "group-hover:text-green-500 dark:group-hover:text-green-400",
  },
  {
    icon: <Settings className="h-5 w-5" />,
    label: "Blogs",
    path: "/blogs",
    gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
    iconColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400",
  },
  {

    icon: <LayoutDashboard className="h-5 w-5" />,
    label: "Dashboard",
    path: "/dashboard",
    gradient:
      "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "group-hover:text-red-500 dark:group-hover:text-red-400",
  },

];

// const dashBoardItems = [
//   {
//     icon: <User className="h-5 w-5" />,
//     label: 'Dashboard',
//     path: '/admin',
//     role: role.admin,
//     gradient:
//       'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
//     iconColor: 'group-hover:text-blue-500 dark:group-hover:text-blue-400',
//   },
//   {
//     icon: <User className="h-5 w-5" />,
//     label: 'Dashboard',
//     path: '/admin',
//     role: role.superAdmin,
//     gradient:
//       'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
//     iconColor: 'group-hover:text-blue-500 dark:group-hover:text-blue-400',
//   },
//   {
//     icon: <User className="h-5 w-5" />,
//     label: 'Dashboard',
//     path: '/user',
//     role: role.user,
//     gradient:
//       'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
//     iconColor: 'group-hover:text-blue-500 dark:group-hover:text-blue-400',
//   },
//   {
//     icon: <User className="h-5 w-5" />,
//     label: 'Dashboard',
//     path: '/agent',
//     role: role.agent,
//     gradient:
//       'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
//     iconColor: 'group-hover:text-blue-500 dark:group-hover:text-blue-400',
//   },
// ];

// Animation Variants
const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants: Variants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function NavBar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
 const { data: session } = useSession();
 console.log(session);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 z-50 w-full overflow-hidden border-gray-200/60 p-3 backdrop-blur-lg transition-colors duration-300 ${isScrolled
          ? "bg-black dark:bg-black/90"
          : "bg-transparent dark:bg-transparent"
        }`}
      initial="initial"
      whileHover="hover"
    >
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute -inset-2 z-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(239,68,68,0.1) 100%)",
        }}
        variants={navGlowVariants}
      />

      {/* Top bar: logo + nav + toggle */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 md:gap-0">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <Image
            className="h-10 w-10 sm:h-12 sm:w-12"
            src={logo}
            alt="Khandaker Istekharul Haque"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden flex-wrap items-center gap-4 md:flex lg:gap-8 xl:gap-10">
          {navItems.map((item) => (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="group relative block overflow-visible rounded-xl"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                {/* Glow effect */}
                <motion.div
                  className="pointer-events-none absolute inset-0 z-0 rounded-2xl"
                  variants={glowVariants}
                  style={{ background: item.gradient, opacity: 0 }}
                />

                {/* Front-facing nav item */}
                <motion.div
                  className="relative z-10"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom",
                  }}
                >
                  <Link
                    href={item.path}
                    className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-600 transition-colors sm:px-4 sm:text-base dark:text-gray-300 ${item.iconColor}`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>

                {/* Back-facing nav item */}
                <motion.div
                  className="absolute inset-0 z-10"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    transform: "rotateX(90deg)",
                  }}
                >
                  <Link
                    href={item.path}
                    className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-600 transition-colors sm:px-4 sm:text-base dark:text-gray-300 ${item.iconColor}`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.li>
          ))}



          {/* Register Button */}


          {/* <li className="relative overflow-visible">
            {data?.data?.email ? (
              <>
               
                <button
                  onClick={() => setOpen(!open)}
                  className="rounded-full border-2 border-purple-600 transition-transform duration-300 hover:scale-110"
                >
                  <Avatar
                    name={data?.data?.name || data?.data?.email}
                    src={data?.data?.picture}
                    round={true}
                    size="40"
                    textSizeRatio={2}
                    className=""
                  />
                </button>

               
                {open &&
                  createPortal(
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300,
                      }}
                      className="fixed top-16 right-6 z-[9999] w-48 rounded-md border border-purple-500 bg-white shadow-xl dark:bg-gray-900"
                    >
                    
                      <div className="border-b border-gray-100/50 px-4 py-3 dark:border-gray-800/50">
                        <p className="truncate text-sm font-medium text-gray-800 dark:text-white">
                          {data?.data?.name || "User"}
                        </p>
                        <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                          {data?.data?.email}
                        </p>
                      </div>

                   
               

                    
                      <div className="border-t border-gray-100/50 dark:border-gray-800/50">
                        <button
                          onClick={() => {
                            setOpen(false);
                            handleLogout();
                          }}
                          className="flex w-full items-center px-4 py-3 text-sm text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:text-red-400 dark:hover:bg-red-900/20 dark:hover:text-red-300"
                        >
                          <svg
                            className="mr-3 h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </motion.div>,
                    document.body
                  )}
              </>
            ) : (
              <Link href="/login" className="relative z-10">
                <button className="group relative z-10 cursor-pointer overflow-hidden rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 px-6 py-1.5 font-sans text-xs font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 sm:px-8 sm:py-2 sm:text-sm md:px-10 md:py-2.5 md:text-base">
                  <span className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                  <span className="relative">Login</span>
                </button>
              </Link>
            )}
          </li> */}
        </ul>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-gray-600 focus:outline-none dark:text-gray-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      <motion.ul
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="mt-3 flex flex-col items-center gap-3 overflow-hidden md:hidden"
      >
        {/* Regular nav items */}
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className="w-full rounded-xl px-4 py-2 text-center text-sm text-gray-600 transition-colors hover:bg-gray-100 sm:text-base dark:text-gray-300 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        {/* Dashboard item (based on role) */}
        {/* {data?.data?.role &&
          dashBoardItems
            .filter((item) => item.role === data?.data?.role)
            .map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className="w-full rounded-xl px-4 py-2 text-center text-sm font-semibold text-gray-500 transition-colors hover:bg-purple-100 sm:text-base dark:text-gray-300 dark:hover:bg-purple-900/30"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
        {data?.data?.email ? (
          // Logout
          <button
            onClick={() => {
              setIsOpen(false);
              handleLogout();
            }}
            className="w-full rounded-xl px-4 py-2 text-center text-sm font-semibold text-red-600 transition-colors hover:bg-red-100 sm:text-base dark:text-red-400 dark:hover:bg-red-900/30"
          >
            Logout
          </button>
        ) : (
          // Login
          <Link
            href="/login"
            className="w-full rounded-xl px-4 py-2 text-center text-sm font-semibold text-blue-600 transition-colors hover:bg-blue-100 sm:text-base dark:text-blue-400 dark:hover:bg-blue-900/30"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        )} */}
      </motion.ul>
    </motion.nav>
  );
}

export default NavBar;
