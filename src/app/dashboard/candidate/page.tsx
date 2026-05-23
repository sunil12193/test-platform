"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMail, FiPhone, FiBriefcase, FiAward } from "react-icons/fi";

import { API_BASE_URL, getRequest } from "../../../util/APIGeneric";
import ActionButtons from "../../../component/button";
import DataTable from "../../../component/table";
import { Candidate } from "@/type/canditate";
import { candidateData } from "@/dummyData/candidate";

export default function CandidatesPage() {
  const [data, setData] = useState<Candidate[]>(candidateData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getRequest(`${API_BASE_URL}/candidate`);

  //       if (response) {
  //         setData(response);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const columns = [
    {
      header: "Candidate",

      render: (item: Candidate) => (
        <div className="flex items-center gap-4 min-w-65">
          <div className="relative shrink-0">
            <Image
              src={item.profileImage}
              alt="profile"
              width={56}
              height={56}
              className="
                rounded-2xl
                object-cover
                border
                border-slate-200
                shadow-sm
              "
            />

            <span
              className="
                absolute
                bottom-0
                right-0
                h-3.5
                w-3.5
                rounded-full
                border-2
                border-white
                bg-emerald-500
              "
            />
          </div>

          <div className="text-left">
            <h2 className="text-[15px] font-semibold text-slate-800">
              {item.firstName} {item.lastName}
            </h2>

            <p className="text-xs text-slate-500 mt-1">{item.candidateId}</p>
          </div>
        </div>
      ),
    },

    {
      header: "Contact",

      render: (item: Candidate) => (
        <div className="space-y-2 text-left min-w-57.5">
          <div className="flex items-center gap-2 text-sm text-slate-700">
            <FiMail className="text-slate-400" />
            {item.email}
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <FiPhone className="text-slate-400" />
            {item.phone}
          </div>
        </div>
      ),
    },

    {
      header: "Skills",

      render: (item: Candidate) => (
        <div className="flex flex-wrap gap-2 min-w-62.5 justify-center">
          {item.skills.map((skill, index) => (
            <span
              key={index}
              className="
                px-3
                py-1
                rounded-full
                bg-blue-50
                border
                border-blue-100
                text-blue-700
                text-xs
                font-medium
              "
            >
              {skill}
            </span>
          ))}
        </div>
      ),
    },

    {
      header: "Experience",

      render: (item: Candidate) => (
        <div className="flex items-center justify-center gap-2 min-w-35">
          <div
            className="
              h-10
              w-10
              rounded-xl
              bg-amber-50
              text-amber-600
              flex
              items-center
              justify-center
            "
          >
            <FiBriefcase />
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-slate-800">
              {item.experience}
            </p>

            <p className="text-xs text-slate-500">Experience</p>
          </div>
        </div>
      ),
    },

    {
      header: "Education",

      render: (item: Candidate) => (
        <div className="flex justify-center min-w-30">
          <span
            className="
              px-4
              py-2
              rounded-xl
              bg-violet-50
              border
              border-violet-100
              text-violet-700
              text-sm
              font-semibold
            "
          >
            {item.education}
          </span>
        </div>
      ),
    },

    {
      header: "Position",

      render: (item: Candidate) => (
        <div className="min-w-55 text-left">
          <div className="flex items-center gap-2">
            <FiAward className="text-slate-400" />

            <h3 className="font-semibold text-slate-800 text-sm">
              {item.appliedPosition}
            </h3>
          </div>

          <p className="text-xs text-slate-500 mt-1 ml-6">Applied Role</p>
        </div>
      ),
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-linear-to-br
        from-slate-50
        via-blue-50/30
        to-slate-100
        p-6
      "
    >
      <div className="space-y-6">
        <ActionButtons
          addUrl="candidate/add"
          importUrl="candidate/import"
          exportUrl="candidate/export"
        />

        <DataTable title="Candidates" columns={columns} data={data} />
      </div>
    </div>
  );
}
