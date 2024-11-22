import { Status } from "@/lib/types";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  return (
    <div>
      <label
        htmlFor="status"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Filter By Status
      </label>
      <select
        id="status"
        name="status"
        defaultValue={""}
        className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-gray-600 sm:text-sm sm:leading-6"
      >
        {statuses.map((status) => (
          <option key={status.label} value={status.value || ""}>
            {status.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IssueStatusFilter;
