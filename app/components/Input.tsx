import { Search } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps) {
  return (
    <div className="flex gap-2 border border-gray-500 rounded items-center bg-white px-2 h-10 sm:h-10">
      <Search className="stroke-gray-500" size={16} />
      <input
        {...props}
        className="outline-none text-sm sm:text-base"
        placeholder="O que proucura hoje?"
      />
    </div>
  );
}
