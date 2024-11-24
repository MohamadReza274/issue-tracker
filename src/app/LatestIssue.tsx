import prisma from "@/lib/db";
import React from "react";
import { IssueStatusBadge } from "./Components";
import { Status } from "@/lib/types";
import Image from "next/image";

const LatestIssue = async () => {
  const lastestIssues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assignToUser: true,
    },
  });

  console.log(lastestIssues);

  return (
    <>
      <h2 className="text-3xl mb-2">Latest Issues</h2>
      <ul role="list" className="divide-y divide-gray-600 dark:divide-gray-100">
        {lastestIssues.map((issue) => (
          <li
            key={issue.id}
            className="flex justify-between items-center gap-x-6 py-5"
          >
            <div className="flex items-start justify-center flex-col">
              <h3 className="leading-6 text-gray-900 dark:text-gray-200 text-md mb-2">
                {issue.title}
              </h3>
              <IssueStatusBadge status={issue.status as Status} />
            </div>
            {issue.assignToUser && issue.assignToUser.image && (
              <Image
                width={40}
                height={40}
                alt=""
                src={issue.assignToUser.image}
                className="inline-block h-10 w-10 rounded-full"
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LatestIssue;
