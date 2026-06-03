import Image from "next/image";
import WorkflowCard from "@/component/static-component/workflow-cards";
import CTASection from "@/component/static-component/CTAsection";

import {
  FiUserCheck,
  FiFileText,
  FiGitBranch,
  FiCpu,
} from "react-icons/fi";

const modules = [
  {
    title: "AI Candidate Screening",
    desc: "Automatically shortlist top candidates using AI-powered evaluation models.",
    icon: <FiUserCheck size={34} className="text-white" />,
  },
  {
    title: "Smart Resume Parsing",
    desc: "Extract and analyze candidate profiles with intelligent resume parsing.",
    icon: <FiFileText size={34} className="text-white" />,
  },
  {
    title: "Automated Hiring Workflow",
    desc: "Streamline recruitment operations with automated hiring pipelines.",
    icon: <FiGitBranch size={34} className="text-white" />,
  },
  {
    title: "AI Recommendations",
    desc: "Get intelligent hiring recommendations based on skill and performance analysis.",
    icon: <FiCpu size={34} className="text-white" />,
  },
];

export default function AIRecruitmentPlatformPage() {

  const features = [
    "AI Resume Ranking",
    "Candidate Skill Matching",
    "Hiring Workflow Automation",
    "Realtime Recruitment Analytics",
    "AI Interview Insights",
    "Behavioral Intelligence",
    "Enterprise Hiring Dashboard",
    "Global Recruitment Management",
  ];

  const workflows = [
    {
      step: "01",
      title: "Collect Applications",
      desc: "Receive candidate applications through integrated recruitment channels.",
    },
    {
      step: "02",
      title: "AI Screening",
      desc: "AI automatically evaluates resumes, skills, and candidate relevance.",
    },
    {
      step: "03",
      title: "Assessment & Evaluation",
      desc: "Candidates complete assessments with AI-driven performance analysis.",
    },
    {
      step: "04",
      title: "Smart Hiring Decisions",
      desc: "Recruiters receive intelligent hiring recommendations and insights.",
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
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xl font-semibold mb-7">
              AI Recruitment Platform
            </div>

            <h1 className="text-3xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900">
              Hire Smarter
              <br />
              With
              <br />
              <span className="text-[#0F2B46]">Artificial Intelligence</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-2xl">
              Transform enterprise recruitment with AI-powered screening,
              intelligent candidate evaluation, automated workflows, and
              realtime hiring analytics.
            </p>

            <div className="grid grid-cols-2 text-sm lg:text-base gap-4 mt-10">
              <button className="h-14 px-2 lg:px-8 rounded-2xl bg-[#0F2B46] text-white font-black shadow-xl hover:scale-[1.02] transition-all duration-200">
                Start Hiring
              </button>

              <button className="h-14 px-2 lg:px-8 rounded-2xl bg-white border border-slate-200 text-slate-700 font-black hover:shadow-lg transition-all duration-200">
                Explore Features
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-[40px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-8 shadow-2xl overflow-hidden text-white">
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    value: "94%",
                    label: "Hiring Accuracy",
                  },
                  {
                    value: "2.5x",
                    label: "Faster Recruitment",
                  },
                  {
                    value: "1M+",
                    label: "Candidates Evaluated",
                  },
                  {
                    value: "240+",
                    label: "Enterprise Clients",
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
              <p className="text-sm text-slate-500">Recruitment Efficiency</p>

              <h3 className="text-5xl font-black text-emerald-600 mt-3">
                +240%
              </h3>

              <p className="text-sm text-slate-500 mt-3 max-w-xs leading-relaxed">
                Improved enterprise hiring performance using AI automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xl font-semibold mb-6">
            AI Recruitment Modules
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
            Enterprise Recruitment Infrastructure
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed mt-8">
            Intelligent hiring systems built for modern enterprise recruitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {modules.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[36px] bg-white border border-slate-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 h-64 w-64 bg-blue-100/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative z-10">
                <div className="h-18 w-18 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B] shadow-xl mb-7 flex items-center justify-center">
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

      {/* FEATURES */}
      <section className="bg-white border-y border-slate-200 py-12 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xl font-semibold mb-7">
              Recruitment Features
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
              AI Powered Recruitment Ecosystem
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mt-8">
              Automate and optimize every stage of recruitment with intelligent
              hiring infrastructure.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              {features.map((feature, index) => (
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
              AI Recruitment Dashboard
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xl font-semibold mb-6">
            Hiring Workflow
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
            Intelligent Recruitment Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {workflows.map((item, index) => (
            <WorkflowCard
              key={index}
              step={item.step}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Secure Your Online Assessments"
        description="Prevent cheating, maintain integrity, and build trusted assessment experiences with AI-powered proctoring."
        primaryBtnText="Request Demo"
        secondaryBtnText="Talk To Sales"
      />
    </div>
  );
}
