"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  MessageSquare,
  Target,
  FileText,
  Briefcase,
  Phone,
  Calendar,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "/" },

  {
    name: "About Us",
    href: "/about",
    icon: GraduationCap,
  },

  {
    name: "Services",
    href: "/service",
    icon: MessageSquare,
  },

  {
    name: "Destination",
    href: "/destination",
    hasDropdown: true,
    icon: Target,
    dropdownItems: [
      {
        name: "Ivy League",
        slug: "ivy-league",
        description: "Top universities abroad",
      },
      {
        name: "GMAT Preparation",
        slug: "gmat",
        description: "Score high in GMAT",
      },
      {
        name: "PTE Academic",
        slug: "pte",
        description: "Pearson Test of English",
      },
      {
        name: "GRE Preparation",
        slug: "gre",
        description: "Mock tests & practice",
      },
    ],
  },

  {
    name: "Blogs",
    href: "/blog",
    icon: FileText,
  },

  {
    name: "Events",
    href: "/events",
    icon: Calendar,
  },

  {
    name: "Career",
    href: "/career",
    icon: Briefcase,
  },

  {
    name: "Contact Us",
    href: "/contact",
    icon: Phone,
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mobileDropdown, setMobileDropdown] = React.useState(null)

  return (
    <nav className="sticky top-0 z-[999] bg-white border-b border-gray-200">

      {/* ================= TOP BAR ================= */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={140}
            height={50}
            className="object-contain"
            priority
          />
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden lg:flex items-center gap-2">

          {navItems.map((item) => (
            <div key={item.name} className="relative group">

              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-800 hover:text-orange-500 hover:bg-orange-50 transition"
              >
                <span>{item.name}</span>

                {item.hasDropdown && (
                  <ChevronDown size={14} className="mt-[2px]" />
                )}
              </Link>

              {/* DESKTOP DROPDOWN */}
              {item.hasDropdown && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <div className="w-64 bg-white border rounded-xl shadow-xl py-3">

                    {item.dropdownItems.map((drop) => (
                      <Link
                        key={drop.slug}
                        href={`/${drop.slug}`}
                        className="block px-5 py-3 hover:bg-orange-50"
                      >
                        <div className="font-semibold text-gray-800">
                          {drop.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {drop.description}
                        </div>
                      </Link>
                    ))}

                  </div>
                </div>
              )}
            </div>
          ))}

        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-gray-700"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
  {isOpen && (
    <div className="fixed inset-0 z-[70] flex">

      {/* BACKDROP */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* SIDEBAR */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="
          relative
          w-[85%]
          max-w-sm
          h-full
          bg-white
          shadow-2xl
          flex
          flex-col
          overflow-y-auto
          overscroll-contain
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={40}
          />
          <button onClick={() => setIsOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* MENU */}
        <div className="flex-1 px-6 py-4 space-y-1">

          {navItems.map((item) => (
            <div key={item.name} className="border-b last:border-0">

              {/* MAIN ROW */}
              <div className="flex items-center justify-between py-4">

                {/* NAV LINK */}
                <Link
                  href={item.href}
                  onClick={() => {
                    if (!item.hasDropdown) setIsOpen(false)
                  }}
                  className="text-lg font-semibold text-gray-800 hover:text-orange-500"
                >
                  {item.name}
                </Link>

                {/* DROPDOWN TOGGLE */}
                {item.hasDropdown && (
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.name ? null : item.name
                      )
                    }
                    className="p-2"
                  >
                    <motion.div
                      animate={{
                        rotate:
                          mobileDropdown === item.name ? 180 : 0,
                      }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                )}
              </div>

              {/* DROPDOWN */}
              <AnimatePresence>
                {item.hasDropdown &&
                  mobileDropdown === item.name &&
                  item.dropdownItems && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-5 pb-3"
                    >
                      {item.dropdownItems.map((drop) => (
                        <Link
                          key={drop.slug}
                          href={`/${drop.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="block py-3 text-gray-600 hover:text-orange-500"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
              </AnimatePresence>

            </div>
          ))}

        </div>
      </motion.aside>
    </div>
  )}
</AnimatePresence>

    </nav>
  )
}
