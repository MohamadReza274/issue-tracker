import React from 'react';
import prisma from "@/lib/db";
import {notFound} from "next/navigation";
import {Issue} from "@prisma/client";
import EditIssueButton from "@/app/issues/[id]/EditIssueButton";
import IssueDetails from "@/app/issues/[id]/IssueDetails";

interface Props {
    params: { id: string };
}

const IssueDetailsPage = async ({params}: Props) => {
    const id = parseInt(params.id, 10);
    if (!id) {
        notFound();
    }
    const issue = await prisma.issue.findUnique({where: {id}}) as Issue;

    if (!issue) {
        notFound();
    }
    return (
        <div className="flex my-8">
            <div className="flex flex-col gap-y-6 ">
                <IssueDetails issue={issue}/>
            </div>
            <div>
                <EditIssueButton issueId={issue.id}/>
            </div>
        </div>
    );
};

export default IssueDetailsPage;