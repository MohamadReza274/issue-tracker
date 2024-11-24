import prisma from "@/lib/db";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";
import LatestIssue from "./LatestIssue";

export default async function Home() {
  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  const props = {
    open: openIssues,
    inProgress: inProgressIssues,
    closed: closedIssues,
  };

  return (
    <div className=" font-[family-name:var(--font-geist-sans)] grid grid-cols-2 gap-6">
      {/* <LatestIssue /> */}
      <div className="flex flex-col col-span-2 md:col-span-1 gap-y-6">
        <IssueSummary {...props} />
        <IssueChart {...props} />
      </div>
      <div className="col-span-2 md:col-span-1">
        <LatestIssue />
      </div>
    </div>
  );
}
