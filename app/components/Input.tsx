import { Search } from "lucide-react";

export function Input() {
  return (
    <div className="flex gap-2 border border-gray-500 rounded items-center bg-white px-2 h-10">
      <Search className="stroke-gray-500" size={16} />
      <input className="outline-none" placeholder="O que proucura hoje?" />
    </div>
  );
}
