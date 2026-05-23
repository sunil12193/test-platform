import Image from "next/image";

export default function GleefixContactPage() {
  const offices = [
    {
      city: "New Delhi",
      address: "Cyber Hub, Gurugram, Haryana, India",
      phone: "+91 98765 43210",
      email: "india@gleefix.com",
    },
    {
      city: "Singapore",
      address: "Marina Bay Financial Centre, Singapore",
      phone: "+65 8123 4567",
      email: "apac@gleefix.com",
    },
    {
      city: "London",
      address: "Canary Wharf, London, United Kingdom",
      phone: "+44 20 1234 5678",
      email: "uk@gleefix.com",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] overflow-hidden">
      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 h-96 w-96 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 bg-orange-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold mb-7">
            Let’s Connect
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 max-w-5xl mx-auto">
            Contact Our Team
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mt-8 max-w-3xl mx-auto">
            Reach out to Gleefix for enterprise hiring solutions, AI-powered
            recruitment, assessments, integrations, or custom platform
            consultations.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            {/* CONTACT INFO */}
            <div className="rounded-[36px] bg-linear-to-br from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] p-10 text-white shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-semibold mb-8">
                  Enterprise Support
                </div>

                <h2 className="text-4xl font-black leading-tight">
                  We’d Love To Hear From You
                </h2>

                <p className="text-blue-100 leading-relaxed mt-7 text-lg max-w-xl">
                  Our team is here to help enterprises streamline recruitment
                  workflows, improve hiring quality, and scale assessments
                  globally.
                </p>

                <div className="space-y-6 mt-10">
                  {[
                    {
                      title: "Email Support",
                      value: "support@gleefix.com",
                    },
                    {
                      title: "Phone",
                      value: "+91 98765 43210",
                    },
                    {
                      title: "Business Hours",
                      value: "Mon - Fri | 9 AM - 7 PM",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-5"
                    >
                      <p className="text-sm text-blue-100">{item.title}</p>

                      <h3 className="text-xl font-bold mt-3">{item.value}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* OFFICES */}
            <div className="rounded-[36px] bg-white border border-slate-200 shadow-sm p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-black text-slate-900">
                    Global Offices
                  </h2>

                  <p className="text-slate-500 mt-2">
                    Worldwide enterprise presence
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {offices.map((office, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3 className="text-2xl font-black text-slate-900">
                          {office.city}
                        </h3>

                        <p className="text-slate-500 leading-relaxed mt-4 max-w-md">
                          {office.address}
                        </p>
                      </div>

                      <div className="h-14 w-14 rounded-3xl bg-linear-to-br from-[#0F2B46] to-[#1E4D7B]" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 mt-6">
                      <div className="rounded-2xl bg-slate-50 border border-slate-100 px-5 py-4">
                        <p className="text-sm text-slate-500">Phone</p>

                        <h4 className="font-bold text-slate-800 mt-2">
                          {office.phone}
                        </h4>
                      </div>

                      <div className="rounded-2xl bg-slate-50 border border-slate-100 px-5 py-4">
                        <p className="text-sm text-slate-500">Email</p>

                        <h4 className="font-bold text-slate-800 mt-2 break-all">
                          {office.email}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[36px] bg-white border border-slate-200 shadow-sm p-8 sticky top-28">
            <div className="mb-8">
              <div className="inline-flex px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-semibold mb-6">
                Send Message
              </div>

              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                Start Your Conversation
              </h2>

              <p className="text-slate-500 leading-relaxed mt-5 text-lg">
                Fill out the form and our team will get back to you shortly.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none focus:border-[#0F2B46] focus:bg-white transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none focus:border-[#0F2B46] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Work Email
                </label>

                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none focus:border-[#0F2B46] focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Your Company"
                  className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none focus:border-[#0F2B46] focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Service Interested In
                </label>

                <select className="w-full h-14 rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none focus:border-[#0F2B46] focus:bg-white transition-all duration-200">
                  <option>AI Recruitment</option>
                  <option>Assessment Platform</option>
                  <option>AI Proctoring</option>
                  <option>Enterprise Integration</option>
                  <option>Custom Solution</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your requirements..."
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5 outline-none resize-none focus:border-[#0F2B46] focus:bg-white transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-[#0F2B46] hover:bg-[#163a5c] text-white font-black shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden border border-slate-200 shadow-2xl bg-white">
          <div className="px-10 py-8 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-slate-900">
                Our Global Presence
              </h2>

              <p className="text-slate-500 mt-2">
                Supporting enterprises worldwide
              </p>
            </div>

            <button className="h-12 px-6 rounded-2xl bg-[#0F2B46] text-white font-bold">
              View Locations
            </button>
          </div>

          <div className="h-125 bg-linear-to-br from-blue-50 to-slate-100 flex items-center justify-center text-slate-400 text-2xl font-bold">
            Interactive Map Placeholder
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto rounded-[40px] bg-linear-to-r from-[#0F2B46] via-[#163A5C] to-[#1E4D7B] px-10 py-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-6xl font-black leading-tight">
              Let’s Build Smarter Hiring Together
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed mt-8 max-w-3xl mx-auto">
              Connect with Gleefix and discover how AI-powered recruitment can
              transform your hiring operations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mt-12">
              <button className="h-14 px-8 rounded-2xl bg-white text-[#0F2B46] font-black hover:scale-[1.02] transition-all duration-200">
                Schedule Demo
              </button>

              <button className="h-14 px-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-black hover:bg-white/20 transition-all duration-200">
                Talk To Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
