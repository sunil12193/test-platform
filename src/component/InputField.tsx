export function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder?: string | undefined;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-700">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          mt-2
          px-4
          py-3
          rounded-2xl
          border
          border-gray-300
          outline-none
          focus:ring-2
          focus:ring-blue-500
        "
      />
    </div>
  );
}
