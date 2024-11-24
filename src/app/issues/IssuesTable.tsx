import React from "react";
import Link from "next/link";
import { IssueStatusBadge } from "@/app/Components";
import { Issue } from "@prisma/client";
import { Status } from "@/lib/types";
import IssueStatusFilter from "./_Components/IssueStatusFilter";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { classNames } from "@/lib/constants";

export const tableHeaders: {
  id: number;
  label: string;
  sortOrder: string;
  class?: string;
}[] = [
  { id: 1, label: "Title", sortOrder: "title" },
  { id: 2, label: "Status", sortOrder: "status" },
  {
    id: 3,
    label: "CreatedAt",
    sortOrder: "createdAt",
    class: "hidden md:table-cell",
  },
];

const IssuesTable = ({
  issues,
  searchParams,
}: {
  issues: Issue[];
  searchParams: { status: Status; sortOrder: string };
}) => {
  return (
    <>
      <div className="grid gap-x-4 max-w-sm">
        <IssueStatusFilter />
      </div>

      <table className="min-w-full divide-y divide-gray-300 overflow-auto">
        <thead>
          <tr>
            {tableHeaders?.map((header) => (
              <th
                key={header.id}
                scope="col"
                className={classNames(
                  "py-3.5  pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 dark:text-white",
                  header?.class || ""
                )}
              >
                <Link
                  href={{
                    query: { ...searchParams, sortOrder: header.sortOrder },
                  }}
                >
                  {header.label}
                </Link>
                {header.sortOrder == searchParams.sortOrder && (
                  <ArrowUpIcon className="w-4 h-4 inline mr-1" />
                )}
              </th>
            ))}
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {issues?.map((issue) => (
            <tr key={issue.id}>
              <td className="whitespace-nowrap py-4 text-sm font-medium text-gray-900 dark:text-white">
                <Link href={`/issues/${issue.id}`} className="link capitalize">
                  {issue.title.slice(0, 30)}...
                </Link>
              </td>
              <td className="whitespace-nowrap py-4 text-sm text-gray-500 dark:text-gray-300">
                <IssueStatusBadge status={issue.status as Status} />
              </td>
              <td className=" hidden md:table-cell whitespace-nowrap py-4 text-sm text-gray-500 dark:text-gray-300">
                {issue.createdAt.toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default IssuesTable;
