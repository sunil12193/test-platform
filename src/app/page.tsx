import Image from "next/image";

export default function GleefixHomepage() {
  const services = [
    {
      title: "AI Recruitment",
      desc: "Automate hiring workflows with AI-powered candidate screening and assessment intelligence.",
    },
    {
      title: "Skill Assessments",
      desc: "Create customizable coding, aptitude, and technical assessments with proctoring.",
    },
    {
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
      value: "350+",
      label: "Enterprise Clients",
    },
    {
      value: "24/7",
      label: "Realtime Monitoring",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F8FC] overflow-hidden">
      {/* NAVBAR */}
      <header
        className="
          sticky
          top-0
          z-50
          backdrop-blur-xl
          bg-white/80
          border-b
          border-slate-200/80
        "
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo.jpeg"
              alt="Gleefix"
              width={100}
              height={100}
              className="object-contain"
            />

            <div>
              <p className="text-xs text-slate-500 mt-0.5">
                Consulting Talent. Building Futures.
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-medium text-slate-600">
            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Home
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Services
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Platform
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Pricing
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Contact
            </button>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button
              className="
                hidden
                md:flex
                h-11
                px-5
                rounded-xl
                border
                border-slate-200
                bg-white
                text-slate-700
                font-medium
                hover:shadow-md
                transition-all
                duration-200
              "
            >
              Login
            </button>

            <button
              className="
                h-11
                px-6
                rounded-xl
                bg-[#0F2B46]
                hover:bg-[#163a5c]
                text-white
                font-semibold
                shadow-sm
                hover:shadow-lg
                transition-all
                duration-200
              "
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-24 px-6">
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
              AI Powered Hiring Platform
            </div>

            <h1
              className="
                text-5xl
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

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                className="
                  h-14
                  px-8
                  rounded-2xl
                  bg-[#0F2B46]
                  hover:bg-[#163a5c]
                  text-white
                  font-semibold
                  shadow-xl
                  hover:scale-[1.02]
                  transition-all
                  duration-200
                "
              >
                Start Free Trial
              </button>

              <button
                className="
                  h-14
                  px-8
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
                rounded-[32px]
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
                    bg-gradient-to-br
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
                  bg-gradient-to-br
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

                  <h3 className="text-4xl font-bold mt-4">128</h3>
                </div>

                <div
                  className="
                    rounded-2xl
                    bg-gradient-to-br
                    from-orange-400
                    to-amber-500
                    text-white
                    p-5
                  "
                >
                  <p className="text-orange-100 text-sm">Fraud Alerts</p>

                  <h3 className="text-4xl font-bold mt-4">14</h3>
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

              <h3 className="text-4xl font-black text-emerald-600 mt-3">94%</h3>

              <div className="mt-4 w-56 h-3 rounded-full bg-slate-200 overflow-hidden">
                <div className="w-[94%] h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
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

          <h2 className="text-4xl font-black text-slate-900 leading-tight">
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
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#0F2B46]
                  to-[#1E4D7B]
                  mb-6
                "
              />

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
      <section className="max-w-7xl mx-auto px-6 py-24">
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

          <h2 className="text-4xl font-black text-slate-900">
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
              company: "TechNova",
              review:
                "Gleefix reduced our hiring cycle by 45% while improving assessment accuracy.",
            },
            {
              name: "Neha Sharma",
              role: "Talent Lead",
              company: "InnoSoft",
              review:
                "The AI proctoring and analytics completely transformed our remote hiring process.",
            },
            {
              name: "Amit Kapoor",
              role: "VP Engineering",
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
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#0F2B46]
                    to-[#1E4D7B]
                  "
                />

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
      <section className="bg-white border-y border-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-slate-900">
              How Gleefix Works
            </h2>

            <p className="text-slate-500 text-lg mt-6 leading-relaxed">
              Simplify your recruitment workflow in four intelligent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              "Create Assessment",
              "Invite Candidates",
              "AI Based Monitoring",
              "Analyze Results",
            ].map((step, index) => (
              <div
                key={index}
                className="
                  relative
                  rounded-[28px]
                  bg-[#F8FAFC]
                  border
                  border-slate-200
                  p-8
                  overflow-hidden
                "
              >
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    text-6xl
                    font-black
                    text-slate-100
                  "
                >
                  0{index + 1}
                </div>

                <div
                  className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#0F2B46]
                    to-[#1E4D7B]
                    mb-6
                  "
                />

                <h3 className="text-xl font-bold text-slate-900">{step}</h3>

                <p className="text-slate-500 leading-relaxed mt-4">
                  Seamlessly manage enterprise-grade recruitment workflows with
                  intelligent automation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
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

          <h2 className="text-4xl font-black text-slate-900">
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
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-500 text-lg mt-6">
              Everything you need to know about the Gleefix hiring platform.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "How does AI proctoring work?",
              "Can we create custom assessments?",
              "Does Gleefix support coding interviews?",
              "Can enterprises integrate ATS systems?",
            ].map((faq, index) => (
              <div
                key={index}
                className="
                  rounded-3xl
                  bg-white
                  border
                  border-slate-200
                  p-6
                  shadow-sm
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-slate-900">{faq}</h3>

                  <button
                    className="
                      h-10
                      w-10
                      rounded-xl
                      bg-slate-100
                      text-slate-700
                      font-bold
                    "
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
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
            bg-gradient-to-r
            from-[#0F2B46]
            via-[#163A5C]
            to-[#1E4D7B]
            px-10
            py-20
            text-center
            text-white
            relative
            overflow-hidden
          "
        >
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl font-black leading-tight">
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

      {/* FOOTER */}
      <footer className="bg-[#0F172A] text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/gleeffix_logo.jpeg"
                  alt="Gleefix"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-bold">Gleefix</h2>

                <p className="text-xs text-slate-400 mt-1">
                  Consulting Talent. Building Futures.
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mt-6 max-w-sm">
              AI-powered recruitment and assessment platform for modern
              enterprises.
            </p>
          </div>

          {[
            {
              title: "Company",
              items: ["About", "Careers", "Blogs", "Contact"],
            },
            {
              title: "Platform",
              items: [
                "Assessments",
                "Analytics",
                "AI Proctoring",
                "Integrations",
              ],
            },
            {
              title: "Resources",
              items: [
                "Documentation",
                "Help Center",
                "Privacy Policy",
                "Terms",
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-5">{section.title}</h3>

              <div className="space-y-4">
                {section.items.map((item, idx) => (
                  <button
                    key={idx}
                    className="block text-slate-400 hover:text-white transition-all duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2026 Gleefix. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <button className="hover:text-white transition-all duration-200">
              Privacy
            </button>

            <button className="hover:text-white transition-all duration-200">
              Terms
            </button>

            <button className="hover:text-white transition-all duration-200">
              Security
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
