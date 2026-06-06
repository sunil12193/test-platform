import Image from "next/image";
import Link from "next/link";
import {
  FiZap,
  FiShield,
  FiLayers,
  FiTrendingUp,
} from "react-icons/fi";

export default function GleefixAboutPage() {
  const stats = [
    {
      value: "43+",
      label: " Clients",
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
      icon: FiZap,
    },
    {
      title: "Integrity",
      desc: "Building secure and trustworthy assessment ecosystems for enterprises.",
      icon: FiShield,
    },
    {
      title: "Scalability",
      desc: "Enterprise-ready infrastructure designed for global hiring operations.",
      icon: FiLayers,
    },
    {
      title: "Impact",
      desc: "Helping organizations hire smarter and candidates succeed faster.",
      icon: FiTrendingUp,
    },
  ];

  const leadership = [
    {
      name: "Saransh Garg",
      role: "CTO",
      image: "/user.jpeg"
    },
    {
      name: "Sunil",
      role: "Chief Technology Officer",
      image: "/user1.jpeg"
    },
    {
      name: "Divyaa Gupta",
      role: "Director ",
      image: "/use.jpeg"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] overflow-hidden">

      {/* HERO */}
      <section className="relative lg:py-28 py-12 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 text-center lg:text-left ">
          {/* LEFT */}
          <div className=" lg:text-left">
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xl font-semibold mb-7">
              About Gleefix
            </div>

            <h1 className="text-3xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
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

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10">
              <Link
                href="/platform"
              >
                <button className="h-14 px-8 cursor-pointer rounded-2xl bg-[#0F2B46] text-white font-black shadow-xl hover:scale-[1.02] transition-all duration-200">
                  Explore Platform
                </button>

              </Link>

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
                    <h3 className="lg:text-5xl text-3xl font-black">{item.value}</h3>

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
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="relative lg:mt-22">
            <div className="rounded-[40px] bg-white border border-slate-200 shadow-2xl p-8 overflow-hidden">
              <div className="rounded-4xl overflow-hidden border border-slate-200">
                <Image
                  src="/story-img.jpeg"
                  alt="Our Story"
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xl font-semibold mb-7">
              Our Journey
            </div>

            <h2 className="lg:text-5xl text-3xl font-black text-slate-900 leading-tight">
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
      <section className="bg-white border-y border-slate-200 py-12 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xl font-semibold mb-6">
              Our Core Values
            </div>

            <h2 className="lg:text-5xl text-3xl font-black text-slate-900 leading-tight">
              Principles That Drive Us
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              We believe in building technology that transforms recruitment
              while maintaining integrity, trust, and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-4xl bg-[#F8FAFC] border border-slate-200 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 h-48 w-48 bg-blue-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  <div className="relative z-10">
                    <div className="h-18 w-18 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B] shadow-xl mb-7 flex items-center justify-center">
                      <Icon className="text-white text-4xl" />
                    </div>

                    <h3 className="text-3xl font-black text-slate-900">
                      {value.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mt-5 text-lg">
                      {value.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xl font-semibold mb-6">
            Leadership Team
          </div>

          <h2 className="lg:text-5xl text-3xl font-black text-slate-900 leading-tight">
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
              <div className="h-75 rounded-[28px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full object-cover"
                />
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
      <section className="px-6 lg:pb-24 pb-12">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-linear-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] px-10 lg:py-24 py-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="lg:text-5xl text-3xl lg:text-6xl font-black leading-tight">
              Join Us In Transforming Hiring
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
              Discover how Gleefix helps enterprises build intelligent
              recruitment ecosystems powered by AI and automation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <Link
                href="/platform"
              >
                <button className="h-14 px-8 cursor-pointer rounded-2xl bg-white text-[#0F2B46] font-black hover:scale-[1.02] transition-all duration-200">
                  Explore Platform
                </button>

              </Link>

              <Link
                href="/contact-us"
              >

                <button className="h-14 px-8 cursor-pointer rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-black hover:bg-white/20 transition-all duration-200">
                  Contact Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
