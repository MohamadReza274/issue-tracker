"use client";
import { Status } from "@/lib/types";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filterStatus, setStatus] = useState(searchParams.get("status") || "");

  const handleChangeStatus = (status: Status) => {
    setStatus(status);
    const params = new URLSearchParams();
    if (status) params.append("status", status);
    if (searchParams.get("sortOrder"))
      params.append("sortOrder", searchParams.get("sortOrder")!);

    const query = params.size ? "?" + params.toString() : "";
    router.push("/issues" + query);
  };

  return (
    <Listbox value={filterStatus} onChange={handleChangeStatus}>
      <Label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200">
        Filter by status
      </Label>
      <div className=" relative mt-2">
        <ListboxButton className="relative w-full max-w-[12rem] cursor-default rounded-md bg-white dark:bg-transparent dark:text-gray-200 py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <span className="block truncate">{filterStatus || "All"}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full  overflow-auto rounded-md bg-white dark:bg-gray-400 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {statuses.map((status) => (
            <ListboxOption
              key={status.label}
              value={status.value}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {status.label}
              </span>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default IssueStatusFilter;
