import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
type ListBoxProps = {
  options: {
    name: string;
    value: string;
  }[];
  label: string;
  clearSelection: boolean;
  onSelect: (value: string) => void;
};
export function ListBox({
  clearSelection,
  options,
  label,
  onSelect,
}: ListBoxProps) {
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  useEffect(() => {
    if (clearSelection) {
      setSelectedOption(options[0].value);
    }
  }, [clearSelection, options]);

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className="flex flex-col relative gap-1 min-w-[100px] sm:min-w-[300px]">
      <span className="text-sm sm:text-base">{label}</span>
      <Listbox value={selectedOption} onChange={handleOptionSelect}>
        {({ open }) => (
          <>
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate sm:text-base">
                {options.find((opt) => opt.value === selectedOption)?.name}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="stroke-slate-600" size={22} />
              </span>
            </Listbox.Button>

            <Listbox.Options className="absolute mt-16 z-10 py-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-36 overflow-auto focus:outline-none sm:text-sm">
              {options
                .filter((option) => option.value !== "null")
                .map((option, index) => (
                  <Listbox.Option
                    key={index}
                    value={option.value}
                    className={({ active, selected }) =>
                      `${
                        active ? "bg-indigo-600 text-white" : ""
                      } cursor-default select-none relative py-2 pl-3 pr-9`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`${
                            selected ? "font-medium" : "font-normal"
                          } block truncate sm:text-base`}
                        >
                          {option.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
}
