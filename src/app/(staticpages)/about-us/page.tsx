import Image from "next/image";

export default function GleefixAboutPage() {
  const stats = [
    {
      value: "350+",
      label: "Enterprise Clients",
    },
    {
      value: "1M+",
      label: "Assessments Conducted",
    },
    {
      value: "98%",
      label: "Hiring Accuracy",
    },
    {
      value: "24+",
      label: "Countries Served",
    },
  ];

  const values = [
    {
      title: "Innovation",
      desc: "We continuously innovate hiring technologies powered by AI and automation.",
    },
    {
      title: "Integrity",
      desc: "Building secure and trustworthy assessment ecosystems for enterprises.",
    },
    {
      title: "Scalability",
      desc: "Enterprise-ready infrastructure designed for global hiring operations.",
    },
    {
      title: "Impact",
      desc: "Helping organizations hire smarter and candidates succeed faster.",
    },
  ];

  const leadership = [
    {
      name: "Saransh Garg",
      role: "Founder & CEO",
    },
    {
      name: "Aman Verma",
      role: "Chief Technology Officer",
    },
    {
      name: "Ritika Sharma",
      role: "VP Enterprise Growth",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] overflow-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-center overflow-hidden">
              <Image
                src="/gleeffix_logo.jpeg"
                alt="Gleefix"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-xl font-black text-[#0F2B46]">Gleefix</h2>

              <p className="text-xs text-slate-500 mt-1">
                Consulting Talent. Building Futures.
              </p>
            </div>
          </div>

          {/* NAV */}
          <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-600">
            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Home
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Services
            </button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Platform
            </button>

            <button className="text-[#0F2B46]">About Us</button>

            <button className="hover:text-[#0F2B46] transition-all duration-200">
              Contact
            </button>
          </div>

          <button className="h-11 px-6 rounded-xl bg-[#0F2B46] hover:bg-[#163a5c] text-white font-semibold shadow-sm hover:shadow-lg transition-all duration-200">
            Get Started
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
              About Gleefix
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Redefining
              <br />
              Enterprise Hiring
              <br />
              <span className="text-[#0F2B46]">With AI.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-2xl">
              Gleefix is an AI-powered recruitment and assessment platform built
              to help enterprises hire smarter, faster, and more efficiently
              through intelligent automation and modern hiring infrastructure.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="h-14 px-8 rounded-2xl bg-[#0F2B46] text-white font-black shadow-xl hover:scale-[1.02] transition-all duration-200">
                Explore Platform
              </button>

              <button className="h-14 px-8 rounded-2xl bg-white border border-slate-200 text-slate-700 font-black hover:shadow-lg transition-all duration-200">
                Our Vision
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[40px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden text-white">
              <div className="grid grid-cols-2 gap-5">
                {stats.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/10 p-7"
                  >
                    <h3 className="text-5xl font-black">{item.value}</h3>

                    <p className="text-blue-100 mt-4 leading-relaxed text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING */}
            <div className="absolute -bottom-10 -left-10 rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 hidden lg:block">
              <p className="text-sm text-slate-500">Platform Growth</p>

              <h3 className="text-5xl font-black text-emerald-600 mt-3">
                240%
              </h3>

              <p className="text-sm text-slate-500 mt-3 max-w-xs leading-relaxed">
                Enterprise adoption growth in the last year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="relative">
            <div className="rounded-[40px] bg-white border border-slate-200 shadow-2xl p-8 overflow-hidden">
              <div className="h-125 rounded-4xl bg-linear-to-br from-blue-50 to-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 text-2xl font-bold">
                Company Story Visual
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-7">
              Our Journey
            </div>

            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Building The Future Of Recruitment
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              Gleefix was founded with a vision to solve the inefficiencies of
              traditional hiring through AI-driven recruitment infrastructure.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mt-6">
              Today, we empower enterprises globally with intelligent assessment
              systems, realtime analytics, AI proctoring, and scalable hiring
              workflows.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {[
                "AI Driven Hiring",
                "Enterprise Security",
                "Realtime Analytics",
                "Global Scalability",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200 px-5 py-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-4 w-4 rounded-full bg-linear-to-r from-[#0F2B46] to-[#1E4D7B]" />

                    <h3 className="font-bold text-slate-800">{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white border-y border-slate-200 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-6">
              Our Core Values
            </div>

            <h2 className="text-5xl font-black text-slate-900 leading-tight">
              Principles That Drive Us
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              We believe in building technology that transforms recruitment
              while maintaining integrity, trust, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-4xl bg-[#F8FAFC] border border-slate-200 p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-0 right-0 h-48 w-48 bg-blue-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="h-18 w-18 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B] shadow-xl mb-7" />

                  <h3 className="text-3xl font-black text-slate-900">
                    {value.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mt-5 text-lg">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
            Leadership Team
          </div>

          <h2 className="text-5xl font-black text-slate-900 leading-tight">
            Meet The Visionaries
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            Passionate leaders building the next generation recruitment
            ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {leadership.map((member, index) => (
            <div
              key={index}
              className="rounded-[36px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-75 rounded-[28px] bg-linear-to-br from-blue-50 to-slate-100 border border-slate-200 flex items-center justify-center text-slate-400 text-xl font-bold">
                Leadership Image
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-3xl font-black text-slate-900">
                  {member.name}
                </h3>

                <p className="text-[#0F2B46] font-semibold mt-3 text-lg">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-linear-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] px-10 py-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Join Us In Transforming Hiring
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
              Discover how Gleefix helps enterprises build intelligent
              recruitment ecosystems powered by AI and automation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <button className="h-14 px-8 rounded-2xl bg-white text-[#0F2B46] font-black hover:scale-[1.02] transition-all duration-200">
                Explore Platform
              </button>

              <button className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-black hover:bg-white/20 transition-all duration-200">
                Contact Team
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
              AI-powered recruitment platform for enterprise hiring and
              assessments.
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
              items: ["Help Center", "Documentation", "Privacy", "Terms"],
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
