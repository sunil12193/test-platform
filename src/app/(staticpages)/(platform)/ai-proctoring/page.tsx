import Image from "next/image";
import WorkflowCard from "@/component/static-component/workflow-cards";
import CTASection from "@/component/static-component/CTAsection";
import {
  FiUser,
  FiUsers,
  FiMonitor,
  FiMic,
} from "react-icons/fi";

const features = [
  {
    title: "Face Detection",
    desc: "Realtime face tracking and identity verification using AI vision models.",
    icon: <FiUser size={28} className="text-white" />,
  },
  {
    title: "Multiple Person Detection",
    desc: "Detect unauthorized participants during assessments instantly.",
    icon: <FiUsers size={28} className="text-white" />,
  },
  {
    title: "Tab Switching Alerts",
    desc: "Track suspicious browser activities and focus violations.",
    icon: <FiMonitor size={28} className="text-white" />,
  },
  {
    title: "Voice & Noise Detection",
    desc: "Identify background conversations and abnormal audio patterns.",
    icon: <FiMic size={28} className="text-white" />,
  },
];

export default function AIProctoringPage() {

  const monitoring = [
    "Live Video Monitoring",
    "Screen Recording",
    "Realtime Suspicious Activity Detection",
    "Browser Lockdown",
    "AI Behavior Analysis",
    "Automated Proctor Reports",
    "Identity Verification",
    "Session Integrity Tracking",
  ];

  const workflow = [
    {
      step: "01",
      title: "Candidate Verification",
      desc: "AI verifies candidate identity before assessment starts.",
    },
    {
      step: "02",
      title: "Live Monitoring",
      desc: "Continuous AI-powered tracking during the examination session.",
    },
    {
      step: "03",
      title: "Suspicious Detection",
      desc: "Realtime alerts generated for abnormal behavior patterns.",
    },
    {
      step: "04",
      title: "Integrity Reports",
      desc: "Detailed proctoring reports with screenshots and analytics.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] overflow-hidden">

      {/* HERO */}
      <section className="relative py-12 lg:py-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-center lg:text-start">
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xl font-semibold mb-7">
              AI Proctoring Platform
            </div>

            <h1 className="text-3xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Secure
              <br />
              Online
              <br />
              <span className="text-[#0F2B46]">Assessments</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-2xl">
              Advanced AI-powered proctoring platform designed to maintain
              assessment integrity through intelligent monitoring and realtime
              fraud detection.
            </p>

            <div className="grid grid-cols-2 text-sm lg:text-base gap-4 mt-10">
              <button className="h-14 px-2 lg:px-8 rounded-2xl bg-[#0F2B46] text-white font-black shadow-xl hover:scale-[1.02] transition-all duration-200">
                Explore Platform
              </button>

              <button className="h-14 px-2 lg:px-8 rounded-2xl bg-white border border-slate-200 text-slate-700 font-black hover:shadow-lg transition-all duration-200">
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[40px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden text-white">
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    value: "99.2%",
                    label: "Exam Integrity",
                  },
                  {
                    value: "24/7",
                    label: "Realtime Monitoring",
                  },
                  {
                    value: "1M+",
                    label: "Sessions Monitored",
                  },
                  {
                    value: "AI",
                    label: "Fraud Detection",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/10 p-7"
                  >
                    <h3 className="text-3xl lg:text-5xl font-black">{item.value}</h3>

                    <p className="text-blue-100 mt-4 leading-relaxed text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FLOATING CARD */}
            <div className="absolute -bottom-10 -left-10 rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 hidden lg:block">
              <p className="text-sm text-slate-500">
                Suspicious Activities Prevented
              </p>

              <h3 className="text-5xl font-black text-red-500 mt-3">48K+</h3>

              <p className="text-sm text-slate-500 mt-3 max-w-xs leading-relaxed">
                AI-driven fraud detection across enterprise assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xl font-semibold mb-6">
            Proctoring Features
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
            Intelligent Monitoring System
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            AI-powered proctoring capabilities built for enterprise-grade online
            assessments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 h-64 w-64 bg-blue-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10">
                <div className="h-18 w-18 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B] flex items-center justify-center shadow-xl mb-7">
                  {item.icon}
                </div>

                <h3 className="text-2xl lg:text-3xl font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mt-5 text-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MONITORING */}
      <section className="bg-white border-y border-slate-200 py-12 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xl font-semibold mb-7">
              Monitoring Capabilities
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
              Advanced AI Surveillance Infrastructure
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              Monitor every assessment session with intelligent AI-driven
              security and behavioral analytics.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {monitoring.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#F8FAFC] border border-slate-200 px-5 py-5 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-4 w-4 rounded-full bg-linear-to-r from-[#0F2B46] to-[#1E4D7B]" />

                    <h3 className="font-bold text-slate-800">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[40px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden">
            <div className="lg:h-137.5 h-64 text-center rounded-4xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-2xl font-bold">
              AI Proctoring Dashboard
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xl font-semibold mb-6">
            AI Workflow
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
            How AI Proctoring Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {workflow.map((item, index) => (
            <WorkflowCard
              key={index}
              step={item.step}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>

      <CTASection
        title="Secure Your Online Assessments"
        description="Prevent cheating, maintain integrity, and build trusted assessment experiences with AI-powered proctoring."
        primaryBtnText="Request Demo"
        secondaryBtnText="Talk To Sales"
      />
    </div>
  );
}
