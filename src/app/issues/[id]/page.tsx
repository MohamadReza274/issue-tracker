import { auth } from "@/app/auth";
import AssigneeSelectBox from "@/app/issues/[id]/AssigneeSelectBox";
import DeleteIssueButton from "@/app/issues/[id]/DeleteIssueButton";
import EditIssueButton from "@/app/issues/[id]/EditIssueButton";
import IssueDetails from "@/app/issues/[id]/IssueDetails";
import prisma from "@/lib/db";
import { Issue } from "@prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const id = parseInt(params.id, 10);
  const session = await auth();

  if (!id) {
    notFound();
  }
  const issue = (await prisma.issue.findUnique({ where: { id } })) as Issue;

  if (!issue) {
    notFound();
  }
  return (
    <div className="grid grid-cols-5">
      <div className="flex flex-col gap-y-6 w-full col-span-5 md:col-span-4">
        <IssueDetails issue={issue} />
      </div>
      {session && session.user && (
        <div className="flex flex-col gap-4 mt-4 md:mt-0 col-span-5 md:col-span-1">
          <AssigneeSelectBox issue={issue} />
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </div>
      )}
    </div>
  );
};

export default IssueDetailsPage;
