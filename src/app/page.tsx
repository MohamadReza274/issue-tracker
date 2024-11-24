import prisma from "@/lib/db";
import IssueSummary from "./IssueSummary";
import IssueChart from "./IssueChart";

export default async function Home() {
  const openIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <div className=" font-[family-name:var(--font-geist-sans)]">
      {/* <LatestIssue /> */}
      <IssueChart
        open={openIssues}
        inProgress={inProgressIssues}
        closed={closedIssues}
      />
    </div>
  );
}
