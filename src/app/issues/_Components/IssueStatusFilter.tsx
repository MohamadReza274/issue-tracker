"use client";
import { Status } from "@/lib/types";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const [filterStatus, setStatus] = useState("");

  useEffect(() => {
    router.replace("/issues");
  }, [router]);

  const handleChangeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setStatus(value);
    const query = value ? `?status=${value}` : "";
    router.push("/issues/" + query);
  };
  return (
    <div>
      <label
        htmlFor="status"
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
      >
        Filter By Status
      </label>
      <select
        id="status"
        value={filterStatus}
        name="status"
        onChange={handleChangeStatus}
        defaultValue={filterStatus}
        className="mt-1 block w-full dark:bg-transparent dark:text-gray-200 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-gray-600 sm:text-sm sm:leading-6"
      >
        {statuses.map((status) => (
          <option
            key={status.label}
            value={status.value || ""}
            className="dark:text-gray-200 dark:bg-transparent"
          >
            {status.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IssueStatusFilter;
