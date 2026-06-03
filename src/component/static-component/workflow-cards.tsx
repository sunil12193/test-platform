type WorkflowCardProps = {
  step: string;
  title: string;
  desc: string;
};

export default function WorkflowCard({
  step,
  title,
  desc,
}: WorkflowCardProps) {
  return (
    <div
      className="
        rounded-[36px]
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
      <div className="text-2xl lg:text-6xl font-black text-[#0F2B46]/10">
        {step}
      </div>

      <h3 className="text-2xl lg:text-3xl font-black text-slate-900 mt-5">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed mt-5 text-lg">
        {desc}
      </p>
    </div>
  );
}