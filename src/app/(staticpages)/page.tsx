"use client";
import { useState } from "react";  
import Link from "next/link";
import Image from "next/image";
import { BarChart3, Bot, FileCheck } from "lucide-react";
import {
  FilePlus2,
  UserPlus,
  ShieldCheck,
} from "lucide-react";

import {
  Plus,
  Minus,
  HelpCircle,
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "How does AI proctoring work?",

    answer:
      "Gleefix uses AI-powered webcam monitoring, screen tracking, tab-switch detection, and suspicious activity analysis to ensure secure online assessments.",
  },

  {
    question:
      "Can we create custom assessments?",

    answer:
      "Yes. You can create coding tests, MCQs, aptitude assessments, and fully customized enterprise hiring workflows.",
  },

  {
    question:
      "Does Gleefix support coding interviews?",

    answer:
      "Absolutely. Gleefix provides live coding environments, multiple programming language support, real-time execution, and evaluation systems.",
  },

  {
    question:
      "Can enterprises integrate ATS systems?",

    answer:
      "Yes. Gleefix supports seamless ATS and HRMS integrations for enterprise-grade recruitment automation.",
  },
];

export default function GleefixHomepage() {
  const services = [
    {
      icon: Bot,
      title: "AI Recruitment",
      desc: "Automate hiring workflows with AI-powered candidate screening and assessment intelligence.",
    },
    {
      icon: FileCheck,
      title: "Skill Assessments",
      desc: "Create customizable coding, aptitude, and technical assessments with proctoring.",
    },
    {
      icon: BarChart3,
      title: "Hiring Analytics",
      desc: "Track hiring campaigns, completion rates, candidate quality, and recruitment ROI.",
    },
  ];

  const stats = [
    {
      value: "12K+",
      label: "Candidates Assessed",
    },
    {
      value: "98%",
      label: "Fraud Detection Accuracy",
    },
    {
      value: "43+",
      label: "Enterprise Clients",
    },
    {
      value: "24/7",
      label: "Realtime Monitoring",
    },
  ];

  const steps = [
    {
      title: "Create Assessment",

      description:
        "Build coding tests, MCQs, and enterprise assessments with ease.",

      icon: FilePlus2,
    },

    {
      title: "Invite Candidates",

      description:
        "Invite and manage candidates through automated workflows.",

      icon: UserPlus,
    },

    {
      title: "AI Based Monitoring",

      description:
        "Advanced AI proctoring with webcam, screen, and tab monitoring.",

      icon: ShieldCheck,
    },

    {
      title: "Analyze Results",

      description:
        "Get deep hiring insights and performance analytics instantly.",

      icon: BarChart3,
    },
  ];

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(
      openIndex === index
        ? null
        : index
    );
  };


  return (
    <div className="min-h-screen bg-[#F6F8FC] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative lg:py-24 py-12 px-6">
        {/* BG GLOW */}
        <div className="absolute top-10 left-0 h-96 w-96 bg-blue-200/40 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2
                rounded-full
                bg-blue-50
                border
                border-blue-100
                text-blue-700
                text-sm
                font-semibold
                mb-6
              "
            >
              AI Powered Hiring Solutions
            </div>

            <h1
              className="
                text-3xl
                lg:text-6xl
                font-black
                leading-tight
                tracking-tight
                text-slate-900
              "
            >
              Hire Smarter.
              <br />
              <span className="text-[#0F2B46]">Assess Faster.</span>
            </h1>

            <p
              className="
                mt-7
                text-lg
                leading-relaxed
                text-slate-600
                max-w-2xl
              "
            >
              Gleefix helps enterprises streamline recruitment with AI-driven
              assessments, proctoring, hiring analytics, and intelligent
              candidate evaluation.
            </p>

            <div className="grid grid-cols-2 text-sm lg:text-base gap-4 mt-10">
              <button
                className="
                  h-14
                  lg:px-8
                  rounded-2xl
                  bg-[#0F2B46]
                  hover:bg-[#163a5c]
                  text-white
                  font-semibold
                  shadow-xl
                  hover:scale-[1.02]
                  transition-all
                  duration-200
                  cursor-pointer
                "
              >
                Start Free Trial
              </button>

              <button
                className="
                  h-14
                  lg:px-8
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  hover:bg-slate-50
                  text-slate-700
                  font-semibold
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  duration-200
                  cursor-pointer
                "
              >
                Watch Demo
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
              {stats.map((item, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-black text-[#0F2B46]">
                    {item.value}
                  </h3>

                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* MAIN CARD */}
            <div
              className="
                relative
                rounded-4xl
                bg-white
                border
                border-slate-200
                shadow-2xl
                p-6
              "
            >
              {/* TOP BAR */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Recruitment Dashboard
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Realtime hiring analytics
                  </p>
                </div>

                <div
                  className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-linear-to-br
                    from-[#0F2B46]
                    to-[#1E4D7B]
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    text-lg
                  "
                >
                  AI
                </div>
              </div>

              {/* CHART */}
              <div
                className="
                  h-64
                  rounded-3xl
                  bg-linear-to-br
                  from-blue-50
                  to-slate-100
                  border
                  border-slate-200
                  flex
                  items-center
                  justify-center
                  text-slate-400
                  font-semibold
                "
              >
                Analytics Dashboard Preview
              </div>

              {/* LOWER CARDS */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div
                  className="
                    rounded-2xl
                    bg-[#0F2B46]
                    text-white
                    p-5
                  "
                >
                  <p className="text-blue-100 text-sm">Active Assessments</p>

                  <h3 className="lg:text-4xl text-2xl font-bold mt-4">128</h3>
                </div>

                <div
                  className="
                    rounded-2xl
                    bg-linear-to-br
                    from-orange-400
                    to-amber-500
                    text-white
                    p-5
                  "
                >
                  <p className="text-orange-100 text-sm">Fraud Alerts</p>

                  <h3 className="lg:text-4xl text-2xl font-bold mt-4">14</h3>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div
              className="
                absolute
                -bottom-10
                -left-10
                rounded-3xl
                bg-white
                border
                border-slate-200
                shadow-2xl
                p-5
                hidden
                lg:block
              "
            >
              <p className="text-sm text-slate-500">Candidate Completion</p>

              <h3 className="lg:text-4xl text-2xl font-black text-emerald-600 mt-3">94%</h3>

              <div className="mt-4 w-56 h-3 rounded-full bg-slate-200 overflow-hidden">
                <div className="w-[94%] h-full rounded-full bg-linear-to-r from-emerald-500 to-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-orange-50
              border
              border-orange-100
              text-orange-700
              text-sm
              font-semibold
              mb-6
            "
          >
            Platform Features
          </div>

          <h2 className="lg:text-4xl text-3xl font-black text-slate-900 leading-tight">
            Everything You Need For Modern Hiring
          </h2>

          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            Powerful AI recruitment infrastructure designed for enterprise-grade
            hiring and candidate assessment workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                rounded-[28px]
                bg-white
                border
                border-slate-200
                p-8
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div
                className="
                  h-16
                  w-16
                  rounded-full
                  bg-linear-to-br
                  from-[#0F2B46]
                  to-[#1E4D7B]
                  mb-6
                  flex
                  items-center
                  justify-center
                "
              >
                {service.icon && (
                  <service.icon
                    size={38}
                    color="#FFFFFF"
                    className="m-4"
                  />
                )}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mt-5">
                {service.desc}
              </p>

              <button
                className="
                  mt-8
                  text-[#0F2B46]
                  font-semibold
                  group-hover:translate-x-1
                  transition-all
                  duration-200
                "
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 lg:py-24 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-blue-50
              border
              border-blue-100
              text-blue-700
              text-sm
              font-semibold
              mb-6
            "
          >
            Trusted By Enterprises
          </div>

          <h2 className="lg:text-4xl text-3xl font-black text-slate-900">
            What Our Clients Say
          </h2>

          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            Enterprises trust Gleefix to streamline hiring operations and
            improve candidate quality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
          {[
            {
              name: "Rahul Verma",
              role: "HR Director",
              image: "/user1.jpeg",
              company: "TechNova",
              review:
                "Gleefix reduced our hiring cycle by 45% while improving assessment accuracy.",
            },
            {
              name: "Ankit Sharma",
              role: "Talent Lead",
              image: "/user1.jpeg",
              company: "InnoSoft",
              review:
                "The AI proctoring and analytics completely transformed our remote hiring process.",
            },
            {
              name: "Amit Kapoor",
              role: "VP Engineering",
              image: "/user1.jpeg",
              company: "CodeGrid",
              review:
                "The assessment platform is extremely scalable, modern, and enterprise-ready.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                rounded-[28px]
                bg-white
                border
                border-slate-200
                p-8
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="
                    h-14
                    w-14
                    rounded-full
                    bg-linear-to-br
                    from-[#0F2B46]
                    to-[#1E4D7B]
                    overflow-hidden
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">{item.name}</h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed">“{item.review}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white border-y border-slate-200 py-12 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="lg:text-4xl text-3xl font-black text-slate-900">
              How Gleefix Works
            </h2>

            <p className="text-slate-500 text-lg mt-6 leading-relaxed">
              Simplify your recruitment workflow in four intelligent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
          group
          relative
          rounded-[28px]
          bg-white
          border
          border-slate-200
          p-8
          overflow-hidden
          shadow-sm
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
        "
                >
                  {/* BACKGROUND NUMBER */}
                  <div
                    className="
            absolute
            top-5
            right-5
            text-7xl
            font-black
            text-slate-100
            group-hover:text-slate-200
            transition-all
          "
                  >
                    0{index + 1}
                  </div>

                  {/* ICON */}
                  <div
                    className="
            relative
            z-10
            h-16
            w-16
            rounded-full
            bg-gradient-to-br
            from-[#0F2B46]
            to-[#1E4D7B]
            flex
            items-center
            justify-center
            shadow-lg
            group-hover:scale-110
            transition-transform
            duration-300
          "
                  >
                    <Icon className="text-white w-8 h-8" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10">
                    <h3
                      className="
              text-xl
              font-bold
              text-slate-900
              mt-7
            "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
              text-slate-500
              leading-relaxed
              mt-4
            "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* HOVER GLOW */}
                  <div
                    className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            bg-gradient-to-br
            from-blue-50/40
            to-transparent
            pointer-events-none
          "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-emerald-50
              border
              border-emerald-100
              text-emerald-700
              text-sm
              font-semibold
              mb-6
            "
          >
            Integrations
          </div>

          <h2 className="lg:text-4xl text-3xl font-black text-slate-900">
            Connect With Your Favorite Tools
          </h2>

          <p className="text-slate-500 text-lg mt-6 leading-relaxed">
            Integrate seamlessly with HRMS, ATS, communication, and productivity
            platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mt-16">
          {[
            "Slack",
            "Microsoft Teams",
            "Zoom",
            "Google Workspace",
            "LinkedIn",
            "GitHub",
          ].map((tool, index) => (
            <div
              key={index}
              className="
                h-32
                rounded-3xl
                bg-white
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                flex
                items-center
                justify-center
                text-center
                font-bold
                text-slate-700
              "
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        to-white
        py-12
        lg:py-28
        px-6
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[600px]
          bg-blue-100/40
          blur-3xl
          rounded-full
          pointer-events-none
        "
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              bg-blue-50
              border
              border-blue-100
              text-blue-700
              text-sm
              font-semibold
              mb-6
            "
          >
            <HelpCircle className="w-4 h-4" />

            Frequently Asked Questions
          </div>

          <h2
            className="
              lg:text-4xl 
              text-3xl
              md:text-5xl
              font-black
              text-slate-900
              leading-tight
            "
          >
            Have Questions?
            <br />

            We’ve Got Answers.
          </h2>

          <p
            className="
              text-slate-500
              text-lg
              mt-6
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Everything you need to know
            about the Gleefix AI-powered
            recruitment and assessment
            platform.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen =
              openIndex === index;

            return (
              <div
                key={index}
                className={`
                  group
                  rounded-[30px]
                  border
                  overflow-hidden
                  transition-all
                  duration-300
                  cursor-pointer

                  ${
                    isOpen
                      ? "bg-[#0F172A] border-[#0F172A] shadow-2xl"
                      : "bg-white border-slate-200 hover:border-blue-200 hover:shadow-xl"
                  }
                `}
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    toggleFAQ(index)
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-5
                    p-7
                    text-left
                  "
                >
                  <div className="flex items-start gap-5">
                    {/* NUMBER */}
                    <div
                      className={`
                        min-w-[48px]
                        h-12
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-sm
                        transition-all

                        ${
                          isOpen
                            ? "bg-white/10 text-white"
                            : "bg-slate-100 text-slate-700"
                        }
                      `}
                    >
                      0{index + 1}
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3
                        className={`
                          text-lg
                          md:text-xl
                          font-bold
                          transition-all

                          ${
                            isOpen
                              ? "text-white"
                              : "text-slate-900"
                          }
                        `}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* ICON */}
                  <div
                    className={`
                      min-w-[50px]
                      h-[50px]
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      transition-all

                      ${
                        isOpen
                          ? "bg-white text-slate-900 rotate-180"
                          : "bg-slate-100 text-slate-700"
                      }
                    `}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        px-7
                        pb-7
                        pl-[92px]
                      "
                    >
                      <p
                        className={`
                          leading-relaxed
                          text-[15px]

                          ${
                            isOpen
                              ? "text-slate-300"
                              : "text-slate-500"
                          }
                        `}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

      {/* CTA */}
      <section className="px-6 pb-24 pt-24">
        <div
          className="
            max-w-7xl
            mx-auto
            rounded-[36px]
            bg-linear-to-r
            from-[#0F2B46]
            via-[#163A5C]
            to-[#1E4D7B]
            px-10
            py-12
            lg:py-20
            text-center
            text-white
            relative
            overflow-hidden
          "
        >
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-5xl font-black leading-tight">
              Ready To Transform Your Hiring Process?
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed mt-7">
              Join modern enterprises using Gleefix to streamline assessments,
              reduce hiring time, and improve candidate quality.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
              <button
                className="
                  h-14
                  px-8
                  rounded-2xl
                  bg-white
                  text-[#0F2B46]
                  font-bold
                  hover:scale-[1.02]
                  transition-all
                  duration-200
                "
              >
                Book Demo
              </button>

              <button
                className="
                  h-14
                  px-8
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-md
                  text-white
                  font-bold
                  hover:bg-white/20
                  transition-all
                  duration-200
                "
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
