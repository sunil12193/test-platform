import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  FiMapPin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

interface FooterItem {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  items: FooterItem[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",

    items: [
      {
        label: "About",
        href: "/about-us",
      },

      {
        label: "Services",
        href: "/service",
      },

      {
        label: "Contact",
        href: "/contact-us",
      },
      {
        label: "Platform",
        href: "/platform",
      },

    ],
  },

  {
    title: "Platform",

    items: [
      {
        label: "Assessments",
        href: "/assessment",
      },

      {
        label: "Hiring Analytics",
        href: "/hiring-analytics",
      },

      {
        label: "AI Proctoring",
        href: "/ai-proctoring",
      },

      {
        label: "AI Recruitment",
        href: "/ai-recruitment",
      },
    ],
  },

  {
    title: "Resources",

    items: [
      {
        label: "Help Center",
        href: "/help-center",
      },
      {
        label: "Privacy",
        href: "/privacy-policy",
      },

      {
        label: "Terms",
        href: "/terms-and-conditions",
      },
    ],
  },
];

const companyInfo = {
  companyName:
    "Gleefix Services Pvt. Ltd.",

  address:
    "Plot No- 20, Block: H-1/A, Sector 63, Noida, Noida, Gautambuddha Nagar, Uttar Pradesh, 201301",

  email: "divya@gleefix.com",

  phone: "+91 75034 41724",
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white px-6 py-16">
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-6
          gap-12
        "
      >
        {/* LOGO */}
        <div className="lg:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-4"
          >
            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-white
                flex
                items-center
                justify-center
                overflow-hidden
              "
            >
              <Image
                src="/logo-without-bg.png"
                alt="Gleefix"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Gleefix
              </h2>

              <p className="text-xs text-slate-400 mt-1 font-bold">
                Where Ambitions Align !
              </p>
            </div>
          </Link>

          <p
            className="
    text-slate-400
    leading-relaxed
    mt-6
    max-w-md
  "
          >
            AI-powered recruitment platform for enterprise
            hiring, assessments, interview automation,
            and smart candidate evaluation.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://www.linkedin.com/company/gleeffix/"
              target="_blank"
              rel="noopener noreferrer"
              className="
      h-11
      w-11
      rounded-xl
      bg-white/10
      hover:bg-blue-600
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:scale-110
    "
            >
              <FaLinkedinIn className="text-lg" />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
      h-11
      w-11
      rounded-xl
      bg-white/10
      hover:bg-blue-500
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:scale-110
    "
            >
              <FaFacebookF className="text-lg" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
      h-11
      w-11
      rounded-xl
      bg-white/10
      hover:bg-pink-500
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:scale-110
    "
            >
              <FaInstagram className="text-lg" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
      h-11
      w-11
      rounded-xl
      bg-white/10
      hover:bg-slate-700
      flex
      items-center
      justify-center
      transition-all
      duration-300
      hover:scale-110
    "
            >
              <FaXTwitter className="text-lg" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-4">

          {/* DYNAMIC LINKS */}
          {footerSections.map(
            (section, index) => (
              <div key={index}>
                <h3
                  className="
                  font-bold
                  text-lg
                  mb-5
                  mt-2
                "
                >
                  {section.title}
                </h3>

                <div className="space-y-4">
                  {section.items.map(
                    (item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="
                        block
                        text-slate-400
                        hover:text-white
                        hover:translate-x-1
                        transition-all
                        duration-200
                      "
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )
          )}

          {/* CONTACT */}
          <div>
            <h3
              className="
              font-bold
              text-lg
              mb-5
            "
            >
              Contact Us
            </h3>

            <div className="space-y-5">
              {/* COMPANY NAME */}
              <div>
                <p className="text-white font-semibold">
                  {companyInfo.companyName}
                </p>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-3">
                <FiMapPin
                  className="
                  text-orange-400
                  mt-1
                  text-2xl
                "
                />

                <p
                  className="
                  text-slate-400
                  text-sm
                  leading-6
                "
                >
                  {companyInfo.address}
                </p>
              </div>

              {/* EMAIL */}
              <a
                href={`mailto:${companyInfo.email}`}
                className="
                flex
                items-center
                gap-3
                hover:text-white
                transition-all
              "
              >
                <FiMail
                  className="
                  text-orange-400
                  text-lg
                "
                />

                <p
                  className="
                  text-slate-400
                  text-sm
                "
                >
                  {companyInfo.email}
                </p>
              </a>

              {/* PHONE */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="
                flex
                items-center
                gap-3
                hover:text-white
                transition-all
              "
              >
                <FiPhone
                  className="
                  text-orange-400
                  text-lg
                "
                />

                <p
                  className="
                  text-slate-400
                  text-sm
                "
                >
                  {companyInfo.phone}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="
          max-w-7xl
          mx-auto
          border-t
          border-white/10
          mt-16
          pt-8
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >
        <p
          className="
            text-sm
            text-slate-500
          "
        >
          © 2026 Gleefix. All rights
          reserved.
        </p>

        <div
          className="
            flex
            items-center
            gap-6
            text-sm
          "
        >
          <Link
            href="/privacy-policy"
            className="
              text-slate-500
              hover:text-white
              transition-all
            "
          >
            Privacy
          </Link>

          <Link
            href="/terms-and-conditions"
            className="
              text-slate-500
              hover:text-white
              transition-all
            "
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}